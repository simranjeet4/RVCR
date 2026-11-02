import urllib.request
import re

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

def fetch(url):
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=10) as res:
            return res.read().decode('utf-8', errors='ignore')
    except Exception as e:
        return str(e)

print("--- 1. rvcr.tech CSS colors already extracted: ---")
# Earlier we extracted:
# ['#000000', '#004297', '#010101', '#1379FF', '#17437C', '#2B5285', '#3A14DF', '#3F74B9', '#414141', '#677C77', '#682B85', '#777777', '#7FCED6', '#808483', '#94327A', '#96337B', '#BFC4C0', '#C9C9C9', '#CC00AA', '#DFDFDF', '#E6E6E6', '#E7D70E', '#EFF0EF', '#FD0000', '#FFFFFF']
# Notice the blues:
# #7FCED6 -> Cyan / Lightest cyan-blue
# #3F74B9 -> Light Blue
# #1379FF -> Vibrant Medium Electric Blue (used on buttons, active states, hero highlights)
# #2B5285 -> Medium-Dark Slate Blue
# #17437C -> Deep Navy Blue
# #004297 -> Dark Engineering Blue
# #0A192F / #0F172A / #0B1120 -> Deepest Industrial Midnight Navy

html_gyatk = fetch('https://gyatk.com/')
print("GYATK length:", len(html_gyatk))
gyatk_colors = set(re.findall(r'#(?:[0-9a-fA-F]{3}){1,2}\b', html_gyatk))
print("GYATK colors:", [c for c in gyatk_colors if any(b in c.lower() for b in ['2', '3', '4', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'])][:20])

html_kgyat = fetch('https://kgyat.com/')
print("KGYAT length:", len(html_kgyat))
kgyat_colors = set(re.findall(r'#(?:[0-9a-fA-F]{3}){1,2}\b', html_kgyat))
print("KGYAT colors:", list(kgyat_colors)[:20])
