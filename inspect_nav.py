import urllib.request
import json
import re

HEADERS = {'User-Agent': 'Mozilla/5.0'}

def fetch(url):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=15) as res:
        return res.read().decode('utf-8', errors='ignore')

# Check header-footer elementor post types
for url in [
    'https://rvcr.tech/wp-json/wp/v2/elementor-hf',
    'https://rvcr.tech/wp-json/wp/v2/types/elementor-hf',
    'https://rvcr.tech/wp-sitemap-posts-elementor-hf-1.xml'
]:
    try:
        content = fetch(url)
        print(f"URL: {url} -> {len(content)} bytes")
        if 'xml' in url:
            locs = re.findall(r'<loc>(.*?)</loc>', content)
            print("locs:", locs)
        else:
            print(content[:300])
    except Exception as e:
        print(f"Error {url}: {e}")

# Fetch the home page and inspect header & footer html
homepage_html = fetch('https://rvcr.tech/')
header_match = re.search(r'<header[^>]*>.*?</header>', homepage_html, re.DOTALL | re.IGNORECASE)
footer_match = re.search(r'<footer[^>]*>.*?</footer>', homepage_html, re.DOTALL | re.IGNORECASE)

print("\n--- Header Match ---")
if header_match:
    print(header_match.group(0)[:1000])
else:
    print("No <header> tag found directly, checking elementor header markup")

# Check menu links in homepage
nav_links = re.findall(r'<a[^>]+href=[\'"]([^\'"]+)[\'"][^>]*>(.*?)</a>', homepage_html, re.DOTALL | re.IGNORECASE)
print(f"\nTotal <a> links in homepage: {len(nav_links)}")

menu_items = []
for href, text in nav_links:
    clean_text = re.sub(r'<[^>]+>', '', text).strip()
    if clean_text and ('rvcr.tech' in href or href.startswith('/') or href.startswith('#')):
        menu_items.append((clean_text, href))

print(f"Relevant navigation links ({len(menu_items)}):")
for item in menu_items[:30]:
    print(f"  {item[0]} -> {item[1]}")
