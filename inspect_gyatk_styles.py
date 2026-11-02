import urllib.request
import re

HEADERS = {'User-Agent': 'Mozilla/5.0'}

def fetch(url):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=10) as res:
        return res.read().decode('utf-8', errors='ignore')

# 1. Inspect CSS bundle from gyatk.com
html = fetch('https://gyatk.com/')
css_links = re.findall(r'href=[\'"]([^\'"]+\.css)[\'"]', html)
for cl in css_links:
    if not cl.startswith('http'):
        cl = 'https://gyatk.com' + cl
    css = fetch(cl)
    print(f"=== CSS File: {cl} ({len(css)} bytes) ===")
    
    # Heading rules
    headings = re.findall(r'(h[1-6][^{]*\{[^}]*\})', css)
    print("Headings in CSS:")
    for h in headings[:10]:
        print(" ", h)
        
    # Paragraph rules
    paras = re.findall(r'(p[^{]*\{[^}]*\})', css)
    print("Paragraphs in CSS:")
    for p in paras[:10]:
        print(" ", p)
        
    # Button rules
    buttons = re.findall(r'(\.btn[^{]*\{[^}]*\}|button[^{]*\{[^}]*\})', css)
    print("Buttons in CSS:")
    for b in buttons[:10]:
        print(" ", b)

    # Link rules
    links = re.findall(r'(a[^{]*\{[^}]*\})', css)
    print("Links in CSS:")
    for l in links[:10]:
        print(" ", l)
