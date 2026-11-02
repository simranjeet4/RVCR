import urllib.request
import json
import re

HEADERS = {'User-Agent': 'Mozilla/5.0'}

def fetch_json(url):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=15) as res:
        return json.loads(res.read().decode('utf-8', errors='ignore'))

pages = fetch_json('https://rvcr.tech/wp-json/wp/v2/pages?per_page=100')

site_map_data = []
for p in pages:
    content = p.get('content', {}).get('rendered', '')
    title = p.get('title', {}).get('rendered', '')
    slug = p.get('slug', '')
    link = p.get('link', '')
    
    # extract video URLs
    videos = re.findall(r'<video[^>]+src=[\'"]([^\'"]+)[\'"]', content, re.IGNORECASE)
    video_sources = re.findall(r'<source[^>]+src=[\'"]([^\'"]+)[\'"]', content, re.IGNORECASE)
    all_videos = list(set(videos + video_sources))
    
    # extract image URLs
    imgs = list(set(re.findall(r'<img[^>]+src=[\'"]([^\'"]+)[\'"]', content, re.IGNORECASE)))
    
    # extract sections / headings
    headings = re.findall(r'<h[1-4][^>]*>(.*?)</h[1-4]>', content, re.DOTALL | re.IGNORECASE)
    clean_headings = [re.sub(r'<[^>]+>', '', h).strip() for h in headings if re.sub(r'<[^>]+>', '', h).strip()]
    
    site_map_data.append({
        'id': p.get('id'),
        'slug': slug,
        'title': title,
        'link': link,
        'headings': clean_headings[:12],
        'image_count': len(imgs),
        'images': imgs[:5],
        'video_count': len(all_videos),
        'videos': all_videos
    })

print(json.dumps(site_map_data, indent=2))
