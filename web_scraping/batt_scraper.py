import selenium
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options


# need this or else will encounter error when trying to open multiple links
chrome_options = Options()
chrome_options.add_argument("--ignore-certificate-errors-spki-list")
chrome_options.add_argument('--ignore-ssl-errors')


s = Service(ChromeDriverManager().install()) # manages chromedriver
driver = webdriver.Chrome(service=s, chrome_options=chrome_options)

# tells bot to go to this link 
driver.get("https://www.thebatt.com/search/?l=25&sort=relevance&f=html&t=article%2Cvideo%2Cyoutube%2Ccollection&app=editorial&nsa=eedition&q=")

# getting all articles by the class name - on the battalion, all articles on the search have the class name "tnt-headline"
article_elems = driver.find_elements(By.CLASS_NAME, 'tnt-headline')

# article_links will be a list of links to articles found on the main search page
article_links = [art_elem.find_element(By.TAG_NAME, 'a').get_attribute('href') for art_elem in article_elems]



for link in article_links:
    try:
        print(link)
        driver.get(link) # jump to the link

    except:
        print("Unable to Find Link")
    

driver.quit()
