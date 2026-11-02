import urllib.request
import re

HEADERS = {'User-Agent': 'Mozilla/5.0'}

def fetch(url):
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=10) as res:
            return res.read().decode('utf-8', errors='ignore')
    except Exception as e:
        return str(e)

content = fetch('https://gyatk.com/landing-page/')
print("GYATK landing page len:", len(content))
colors = set(re.findall(r'#(?:[0-9a-fA-F]{3}){1,2}\b', content))
print("GYATK landing page colors:", sorted(colors))

css_links = re.findall(r'href=[\'"]([^\'"]+\.css[^\'"]*)[\'"]', content)
print("CSS links:", css_links[:5])
for l in css_links[:3]:
    css_data = fetch(l)
    css_colors = set(re.findall(r'#(?:[0-9a-fA-F]{3}){1,2}\b', css_data))
    print(f"Colors in {l[-30:]}: {sorted(css_colors)[:10]}")
