from sqlalchemy import create_engine, text

sql_url = "cockroachdb://AiggieNews:Kb4q6M_zb9rUOGpnHIGmyw@free-tier14.aws-us-east-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Ddamp-iguana-6369"

engine = create_engine(sql_url)
with engine.connect() as conn:
    conn.execute(text("CREATE TABLE IF NOT EXISTS articles (id INT PRIMARY KEY, text STRING, tag INT)"))
    conn.execute(text("INSERT INTO articles (id, text, tag) VALUES (1, 'hello world', 1)"))
    conn.execute(text("INSERT INTO articles (id, text, tag) VALUES (2, 'hello world', 2)"))
    conn.execute(text("INSERT INTO articles (id, text, tag) VALUES (3, 'hello world', 3)"))
    res = conn.execute(text("SELECT * FROM articles"))
    for row in res:
        print(row)




