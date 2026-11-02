import urllib.request
import re

HEADERS = {'User-Agent': 'Mozilla/5.0'}
req = urllib.request.Request('https://gyatk.com/landing-page/', headers=HEADERS)
html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')

# find js bundle
js_files = re.findall(r'src=[\'"]([^\'"]+\.js)[\'"]', html)
print("JS files:", js_files)
for js in js_files:
    if not js.startswith('http'):
        js = 'https://gyatk.com' + js
    try:
        content = urllib.request.urlopen(urllib.request.Request(js, headers=HEADERS), timeout=10).read().decode('utf-8', errors='ignore')
        for word in ['Kgyat Engine', 'KGYAT', 'Patents', 'kgyat']:
            idx = content.find(word)
            if idx != -1:
                print(f"Found '{word}':", content[max(0, idx-100):min(len(content), idx+200)])
    except Exception as e:
        print(f"Error {js}: {e}")
