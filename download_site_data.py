import os
import json
import urllib.request
import re
from urllib.parse import urlparse, unquote

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

os.makedirs('scraped_data/html', exist_ok=True)
os.makedirs('public/assets/images', exist_ok=True)
os.makedirs('public/assets/videos', exist_ok=True)

def fetch(url):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=20) as res:
        return res.read()

def fetch_json(url):
    return json.loads(fetch(url).decode('utf-8', errors='ignore'))

print("1. Fetching all pages...")
pages = fetch_json('https://rvcr.tech/wp-json/wp/v2/pages?per_page=100')
with open('scraped_data/pages.json', 'w', encoding='utf-8') as f:
    json.dump(pages, f, indent=2)

print(f"Saved {len(pages)} pages to scraped_data/pages.json")

for p in pages:
    slug = p['slug']
    link = p['link']
    try:
        html = fetch(link).decode('utf-8', errors='ignore')
        with open(f'scraped_data/html/{slug}.html', 'w', encoding='utf-8') as f:
            f.write(html)
        print(f"  Downloaded HTML for {slug}")
    except Exception as e:
        print(f"  Failed HTML for {slug}: {e}")

print("\n2. Fetching media list from WP API...")
all_media = []
page_num = 1
while True:
    try:
        data = fetch_json(f'https://rvcr.tech/wp-json/wp/v2/media?per_page=100&page={page_num}')
        if not data:
            break
        all_media.extend(data)
        page_num += 1
    except Exception:
        break

with open('scraped_data/media.json', 'w', encoding='utf-8') as f:
    json.dump(all_media, f, indent=2)
print(f"Saved {len(all_media)} media entries to scraped_data/media.json")

# Collect all media URLs from media library AND html pages
all_urls = set()
for m in all_media:
    src = m.get('source_url')
    if src:
        all_urls.add(src)

# Also regex search for upload URLs in all downloaded HTML
for p in pages:
    slug = p['slug']
    content = p.get('content', {}).get('rendered', '')
    found = re.findall(r'https?://rvcr\.tech/wp-content/uploads/[^\s"\'<>)]+', content)
    for u in found:
        # clean any trailing backslashes or commas
        clean_u = u.split('#')[0].rstrip('\\')
        all_urls.add(clean_u)

print(f"\n3. Total unique media URLs identified: {len(all_urls)}")
with open('scraped_data/media_urls.txt', 'w', encoding='utf-8') as f:
    for u in sorted(all_urls):
        f.write(u + '\n')

print("Starting download of media assets...")
asset_map = {}
downloaded_count = 0
failed_count = 0

for idx, url in enumerate(sorted(all_urls), 1):
    parsed = urlparse(url)
    filename = os.path.basename(unquote(parsed.path))
    if not filename:
        continue
    
    ext = os.path.splitext(filename)[1].lower()
    if ext in ['.mp4', '.m4v', '.webm', '.ogv']:
        target_dir = 'public/assets/videos'
        rel_path = f'/assets/videos/{filename}'
    else:
        target_dir = 'public/assets/images'
        rel_path = f'/assets/images/{filename}'
        
    local_path = os.path.join(target_dir, filename)
    asset_map[url] = rel_path
    
    if os.path.exists(local_path) and os.path.getsize(local_path) > 0:
        continue
        
    try:
        data = fetch(url)
        with open(local_path, 'wb') as f:
            f.write(data)
        downloaded_count += 1
        if idx % 10 == 0 or idx == len(all_urls):
            print(f"[{idx}/{len(all_urls)}] Downloaded {filename} ({len(data)} bytes)")
    except Exception as e:
        print(f"[{idx}/{len(all_urls)}] Error downloading {url}: {e}")
        failed_count += 1

with open('scraped_data/asset_map.json', 'w', encoding='utf-8') as f:
    json.dump(asset_map, f, indent=2)

print(f"\nCompleted: {downloaded_count} downloaded, {failed_count} failed.")
