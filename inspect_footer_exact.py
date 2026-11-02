import sys
from bs4 import BeautifulSoup

sys.stdout.reconfigure(encoding='utf-8')
soup = BeautifulSoup(open('scraped_data/html/home.html', encoding='utf-8'), 'html.parser')

footer = soup.find('footer')
if footer:
    for col in footer.find_all('div', class_='elementor-column'):
        print("--- Footer Column ---")
        for tag in col.find_all(['h2', 'h3', 'h4', 'p', 'a', 'img']):
            if tag.name == 'img':
                print("  Img:", tag.get('src'))
            elif tag.name == 'a':
                print(f"  Link [{tag.get('href')}]: {tag.get_text(strip=True)}")
            else:
                print(f"  <{tag.name}>: {tag.get_text(strip=True)}")
