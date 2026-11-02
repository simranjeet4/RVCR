import urllib.request
import json

HEADERS = {'User-Agent': 'Mozilla/5.0'}

def fetch_json(url):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=15) as res:
        return json.loads(res.read().decode('utf-8', errors='ignore'))

# Fetch all media items across pages
all_media = []
page = 1
while True:
    try:
        data = fetch_json(f'https://rvcr.tech/wp-json/wp/v2/media?per_page=100&page={page}')
        if not data:
            break
        all_media.extend(data)
        page += 1
    except Exception as e:
        break

print(f"Total media items fetched: {len(all_media)}")
media_summary = {}
for m in all_media:
    mime = m.get('mime_type')
    media_summary[mime] = media_summary.get(mime, 0) + 1

print("Media types summary:", media_summary)

# List video or animation files
videos_or_gifs = [m for m in all_media if 'video' in m.get('mime_type', '') or 'gif' in m.get('mime_type', '')]
print(f"Videos / Gifs found: {len(videos_or_gifs)}")
for v in videos_or_gifs:
    print(f"  [{v.get('mime_type')}] {v.get('source_url')}")

# Print sample image URLs
print("\nSample image URLs:")
for m in all_media[:10]:
    print(f"  {m.get('source_url')}")
