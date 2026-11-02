import urllib.request
import json
import re

HEADERS = {'User-Agent': 'Mozilla/5.0'}

def fetch(url):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=15) as res:
        return json.loads(res.read().decode('utf-8', errors='ignore'))

pages = fetch('https://rvcr.tech/wp-json/wp/v2/pages?per_page=100')
print(f"Total pages: {len(pages)}")

page_details = []
for p in pages:
    page_id = p['id']
    slug = p['slug']
    title = p['title']['rendered']
    link = p['link']
    content_html = p['content']['rendered']
    
    # Extract headings
    h1s = re.findall(r'<h1[^>]*>(.*?)</h1>', content_html, re.DOTALL | re.IGNORECASE)
    h2s = re.findall(r'<h2[^>]*>(.*?)</h2>', content_html, re.DOTALL | re.IGNORECASE)
    h3s = re.findall(r'<h3[^>]*>(.*?)</h3>', content_html, re.DOTALL | re.IGNORECASE)
    imgs = re.findall(r'<img[^>]+src=[\'"]([^\'"]+)[\'"]', content_html, re.IGNORECASE)
    
    # clean tag text
    def clean(text):
        return re.sub(r'<[^>]+>', '', text).strip()

    h1_clean = [clean(x) for x in h1s]
    h2_clean = [clean(x) for x in h2s]
    h3_clean = [clean(x) for x in h3s]
    
    page_details.append({
        'id': page_id,
        'slug': slug,
        'title': title,
        'link': link,
        'img_count': len(imgs),
        'h1': h1_clean,
        'h2': h2_clean,
        'h3': h3_clean,
        'sample_text': clean(content_html)[:200]
    })

print(json.dumps(page_details, indent=2))
