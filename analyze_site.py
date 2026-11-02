import urllib.request
import json
import re
from html.parser import HTMLParser

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

def fetch(url):
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=15) as res:
            return res.getcode(), res.read().decode('utf-8', errors='ignore')
    except Exception as e:
        return None, str(e)

print("--- 1. Checking WP REST API ---")
for endpoint in ['pages', 'posts', 'media', 'categories']:
    code, content = fetch(f'https://rvcr.tech/wp-json/wp/v2/{endpoint}?per_page=100')
    if code == 200:
        try:
            items = json.loads(content)
            print(f"Endpoint '{endpoint}': {len(items)} items")
            for item in items[:15]:
                title = item.get('title', {}).get('rendered', '')
                link = item.get('link', '')
                slug = item.get('slug', '')
                print(f"   [{slug}] {title} -> {link}")
        except Exception as err:
            print(f"Error parsing {endpoint}: {err}")
    else:
        print(f"Endpoint '{endpoint}' status: {code} ({content[:100]})")

print("\n--- 2. Checking sitemap ---")
for sm in ['https://rvcr.tech/wp-sitemap.xml', 'https://rvcr.tech/sitemap.xml', 'https://rvcr.tech/sitemap_index.xml']:
    code, content = fetch(sm)
    print(f"Sitemap {sm}: status {code}")
    if code == 200:
        urls = re.findall(r'<loc>(.*?)</loc>', content)
        print(f"   Found {len(urls)} sub-sitemaps/urls:")
        for u in urls[:10]:
            print(f"     - {u}")

print("\n--- 3. Checking Homepage HTML ---")
code, homepage = fetch('https://rvcr.tech/')
if code == 200:
    print(f"Homepage fetched successfully ({len(homepage)} chars)")
    # Find navigation links
    links = set(re.findall(r'href=[\'"](https?://rvcr\.tech[^\'"]*)[\'"]', homepage))
    print(f"Internal links found on homepage: {len(links)}")
    for l in sorted(links):
        print(f"   - {l}")
    
    # Find theme / builder
    themes = re.findall(r'wp-content/themes/([^/\'"]+)', homepage)
    plugins = re.findall(r'wp-content/plugins/([^/\'"]+)', homepage)
    fonts = re.findall(r'fonts\.googleapis\.com/css2?\?family=([^&\'"]+)', homepage)
    print(f"Themes: {set(themes)}")
    print(f"Plugins: {set(plugins)}")
    print(f"Fonts: {set(fonts)}")
