import requests

from bs4 import BeautifulSoup
with open('log.txt', 'w') as f:

    f.write(data)


url = "https://www.abhinavdharmesh.live"

response = requests.get(url)

soup = BeautifulSoup(response.text, 'html.parser')

title = soup.find('title').get_text()

print(title)

