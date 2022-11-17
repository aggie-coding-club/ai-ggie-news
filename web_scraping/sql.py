from sqlalchemy import create_engine, text
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options
import time

sql_url = "cockroachdb://AiggieNews:Kb4q6M_zb9rUOGpnHIGmyw@free-tier14.aws-us-east-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Ddamp-iguana-6369"

def get_links():
    with create_engine(sql_url).connect() as conn:
        res = conn.execute(text("SELECT title, link FROM articles")) # get all articles that are not in the database
        d = {}
        for title, link in res:
            d[link] = title
    return d

def collect():
    titles = set()
    with create_engine(sql_url).connect() as conn: # connect to database
        # get all of the existing titles from the database and store them in a set
        for row in conn.execute(text("SELECT title FROM articles")): # get all titles and add them to the set
            titles.add(row[0])
        
    chrome_options = Options()
    chrome_options.add_argument("--ignore-certificate-errors-spki-list")
    chrome_options.add_argument('--ignore-ssl-errors')
    s = Service(ChromeDriverManager().install()) # manages chromedriver
    driver = webdriver.Chrome(service=s, chrome_options=chrome_options)
    base_url = "https://www.thebatt.com/search/?f=html&s=start_time&sd=desc&l=100&t=article&nsa=eedition"
    driver.get(base_url) # go to base page
    article_elems = driver.find_elements(By.CLASS_NAME, 'tnt-headline')
    article_links = [art_elem.find_element(By.TAG_NAME, 'a').get_attribute('href') for art_elem in article_elems] # get links and titles
    article_titles = [art_elem.find_element(By.TAG_NAME, 'a').get_attribute('aria-label') for art_elem in article_elems]
    # while the next page button is clickable, keep clicking it and collecting articles
    done = False
    count = 0
    while not done:
        # the final page is reached when the next page button has classname "next disabled"
        if "next disabled" in driver.find_element(By.XPATH, '//*[@id="main-page-container"]/div[2]/div[1]/div/div[4]/ul/li[2]').get_attribute('class'):
            done = True
        try:
            next_page = driver.find_element(By.XPATH, '//*[@id="main-page-container"]/div[2]/div[1]/div/div[4]/ul/li[2]/a')
            next_page.click()
            article_elems = driver.find_elements(By.CLASS_NAME, 'tnt-headline')
            article_links += [art_elem.find_element(By.TAG_NAME, 'a').get_attribute('href') for art_elem in article_elems]
            article_titles += [art_elem.find_element(By.TAG_NAME, 'a').get_attribute('aria-label') for art_elem in article_elems]
            time.sleep(3) # sleep for 3 second so battalion sever doesn't kill itself
        except Exception as e:
            print(e)
    driver.quit()

    with create_engine(sql_url).connect() as conn:
        for i in range(len(article_links)):
            if article_titles[i] not in titles:
                driver = webdriver.Chrome(service=s, chrome_options=chrome_options)
                try:
                    driver.get(article_links[i])
                    paragraphs = driver.find_elements(By.XPATH, '//div[@id="article-body"]/p')
                    text_body = "\n".join([p.text for p in paragraphs])
                    image = driver.find_element(By.XPATH, '/html/body/div[6]/div[6]/section[2]/article/div[4]/div[1]/div/div[2]/figure/div/div[1]/img').get_attribute('src')
                    conn.execute(text("INSERT INTO articles (title, link, text, image) VALUES (:title, :link, :text, :image)"), title=article_titles[i], link=article_links[i], text=text_body, image=image)
                except Exception as e:
                    print(e)
                driver.quit()
        
collect()




