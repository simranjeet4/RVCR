import os
import json
import re
from bs4 import BeautifulSoup
from urllib.parse import urlparse, unquote

with open('scraped_data/asset_map.json', 'r', encoding='utf-8') as f:
    asset_map = json.load(f)

with open('scraped_data/pages.json', 'r', encoding='utf-8') as f:
    raw_pages = json.load(f)

def resolve_asset(url):
    if not url:
        return ''
    clean_url = url.split('#')[0].rstrip('\\')
    if clean_url in asset_map:
        return asset_map[clean_url]
    # match by filename
    filename = os.path.basename(unquote(urlparse(clean_url).path))
    for k, v in asset_map.items():
        if os.path.basename(v) == filename:
            return v
    # check if file exists in assets
    for folder in ['images', 'videos']:
        if os.path.exists(f'public/assets/{folder}/{filename}'):
            return f'/assets/{folder}/{filename}'
    return url

parsed_pages = {}

for p in raw_pages:
    slug = p['slug']
    title = p['title']['rendered']
    page_id = p['id']
    content_html = p['content']['rendered']
    
    soup = BeautifulSoup(content_html, 'html.parser')
    
    # Extract elementor widgets / sections
    sections = []
    
    # Check top-level elementor sections or containers
    widgets = soup.find_all(['div', 'section'], class_=lambda c: c and ('elementor-widget' in c or 'elementor-section' in c))
    
    # We can also extract structured blocks by scanning headings & paragraphs
    blocks = []
    current_block = {'heading': '', 'subheading': '', 'paragraphs': [], 'list': [], 'images': [], 'videos': []}
    
    for el in soup.find_all(['h1', 'h2', 'h3', 'h4', 'p', 'ul', 'ol', 'img', 'video', 'blockquote']):
        tag = el.name
        
        if tag in ['h1', 'h2']:
            text = el.get_text(strip=True)
            if text and text not in ['+91 7403008844', 'info@gyatk.com', 'Contact us', 'Enter The']:
                if current_block['heading'] or current_block['paragraphs'] or current_block['images'] or current_block['videos']:
                    blocks.append(current_block)
                current_block = {'heading': text, 'subheading': '', 'paragraphs': [], 'list': [], 'images': [], 'videos': []}
        elif tag in ['h3', 'h4']:
            text = el.get_text(strip=True)
            if text:
                if not current_block['subheading']:
                    current_block['subheading'] = text
                else:
                    current_block['paragraphs'].append(f"### {text}")
        elif tag == 'p':
            text = el.get_text(strip=True)
            if text and not any(skip in text for skip in ['info@gyatk.com', '+91 7403008844', 'RVCR Tech Links']):
                current_block['paragraphs'].append(text)
        elif tag in ['ul', 'ol']:
            items = [li.get_text(strip=True) for li in el.find_all('li') if li.get_text(strip=True)]
            if items:
                current_block['list'].extend(items)
        elif tag == 'img':
            src = el.get('src', '') or el.get('data-src', '')
            alt = el.get('alt', '')
            res_src = resolve_asset(src)
            if res_src and not any(skip in res_src for skip in ['try-1-150x51-1.png']):
                current_block['images'].append({'src': res_src, 'alt': alt})
        elif tag == 'video':
            src = el.get('src', '')
            if not src:
                source = el.find('source')
                if source:
                    src = source.get('src', '')
            res_src = resolve_asset(src)
            if res_src:
                current_block['videos'].append(res_src)
                
    if current_block['heading'] or current_block['paragraphs'] or current_block['images'] or current_block['videos']:
        blocks.append(current_block)
        
    parsed_pages[slug] = {
        'id': page_id,
        'slug': slug,
        'title': title,
        'blocks': blocks
    }

with open('src/data/extracted_pages.json', 'w', encoding='utf-8') as f:
    json.dump(parsed_pages, f, indent=2)

print(f"Extracted content for {len(parsed_pages)} pages.")
for s, d in parsed_pages.items():
    print(f"Page '{s}': {len(d['blocks'])} structured content blocks")
