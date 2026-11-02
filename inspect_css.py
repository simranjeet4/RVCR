import urllib.request
import re

HEADERS = {'User-Agent': 'Mozilla/5.0'}

def fetch(url):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=15) as res:
        return res.read().decode('utf-8', errors='ignore')

# Post CSS files from Elementor
css_urls = [
    'https://rvcr.tech/wp-content/uploads/elementor/css/post-10.css',
    'https://rvcr.tech/wp-content/uploads/elementor/css/post-105.css',
    'https://rvcr.tech/wp-content/uploads/elementor/css/post-113.css',
    'https://rvcr.tech/wp-content/uploads/elementor/css/post-119.css',
]

all_css = ""
for url in css_urls:
    try:
        content = fetch(url)
        all_css += content + "\n"
        print(f"Fetched {url}: {len(content)} chars")
    except Exception as e:
        print(f"Failed {url}: {e}")

# Extract hex colors
colors = set(re.findall(r'#(?:[0-9a-fA-F]{3}){1,2}\b', all_css))
print(f"\nUnique colors found ({len(colors)}):")
print(sorted(colors))

# Extract fonts
font_families = set(re.findall(r'font-family:\s*([^;]+);', all_css))
print(f"\nFont families found ({len(font_families)}):")
for f in sorted(font_families):
    print(" ", f)
