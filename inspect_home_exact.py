from bs4 import BeautifulSoup
import json
import re

with open('scraped_data/html/home.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

# Let's inspect style tags or inline styles for each section
main_sections = soup.find_all('section', class_=lambda c: c and 'elementor-top-section' in c)
print(f"Total top sections: {len(main_sections)}")

data = []
for idx, sec in enumerate(main_sections):
    sec_id = sec.get('id', '')
    sec_class = sec.get('class', [])
    text = sec.get_text(separator=' | ', strip=True)
    imgs = [img.get('src') for img in sec.find_all('img')]
    links = [(a.get('href'), a.get_text(strip=True)) for a in sec.find_all('a') if a.get_text(strip=True)]
    
    # check background images in style
    bg_style = sec.get('style', '')
    
    data.append({
        'index': idx + 1,
        'id': sec_id,
        'classes': sec_class,
        'text': text[:250],
        'imgs': imgs,
        'links': links
    })

print(json.dumps(data, indent=2))
