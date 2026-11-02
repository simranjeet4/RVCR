import urllib.request
import re

HEADERS = {'User-Agent': 'Mozilla/5.0'}

def fetch(url):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=15) as res:
        return res.read().decode('utf-8', errors='ignore')

h = fetch('https://rvcr.tech/elementor-hf/header/')
f = fetch('https://rvcr.tech/elementor-hf/footer/')

print("Header length:", len(h))
print("Footer length:", len(f))

# Check footer links & contact info
footer_links = re.findall(r'<a[^>]+href=[\'"]([^\'"]+)[\'"][^>]*>(.*?)</a>', f, re.DOTALL | re.IGNORECASE)
print(f"Footer links ({len(footer_links)}):")
for link, text in footer_links:
    clean = re.sub(r'<[^>]+>', '', text).strip()
    print(f"  {clean} -> {link}")

# Check forms
print("Contact form in footer or home:")
forms = re.findall(r'<form[^>]*>.*?</form>', h + f + fetch('https://rvcr.tech/'), re.DOTALL | re.IGNORECASE)
print(f"Total forms found: {len(forms)}")
for form in forms:
    action = re.search(r'action=[\'"]([^\'"]*)[\'"]', form)
    inputs = re.findall(r'<input[^>]+name=[\'"]([^\'"]+)[\'"][^>]*>', form)
    print("Form action:", action.group(1) if action else "None", "Inputs:", inputs)
