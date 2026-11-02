import urllib.request
import re

HEADERS = {'User-Agent': 'Mozilla/5.0'}

def check(url):
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')
        matches = re.findall(r'<a[^>]+href=[\'"]([^\'"]+)[\'"][^>]*>(.*?)</a>', html, re.DOTALL)
        for h, t in matches:
            t_clean = re.sub(r'<[^>]+>', '', t).strip()
            if any(w in t_clean.lower() for w in ['kgyat', 'engine', 'patent', 'rvcr', 'gyatk']):
                print(f"[{url}] {t_clean} -> {h}")
    except Exception as e:
        print(f"Error {url}: {e}")

check('https://gyatk.com/')
check('https://gyatk.com/landing-page/')
