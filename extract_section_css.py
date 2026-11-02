import urllib.request
import re

css = open('public/assets/images/BLACK.webp', 'rb') # just checking local files
# We downloaded post CSS earlier, let's fetch post-105.css from the web or inspect
with urllib.request.urlopen('https://rvcr.tech/wp-content/uploads/elementor/css/post-105.css') as res:
    post_105 = res.read().decode('utf-8', errors='ignore')

with urllib.request.urlopen('https://rvcr.tech/wp-content/uploads/elementor/css/post-113.css') as res:
    post_113 = res.read().decode('utf-8', errors='ignore')

with urllib.request.urlopen('https://rvcr.tech/wp-content/uploads/elementor/css/post-119.css') as res:
    post_119 = res.read().decode('utf-8', errors='ignore')

all_css = post_105 + "\n" + post_113 + "\n" + post_119

element_ids = [
    'f95adc5', 'be835f7', '0596887', '2c12140', '6ef1465', 
    '1e7bf25', 'e23118a', 'cb1a358', '646e73fc', '4abbb2f7', 
    '0acd466', '2e7946aa', '1ebaf6d', '6de022f'
]

for eid in element_ids:
    print(f"\n================ ID: {eid} ================")
    matches = re.findall(rf'(\.elementor-element-{eid}[^{{]*\{{[^}}]*\}})', all_css)
    for m in matches:
        # filter background, color, font
        if any(k in m for k in ['background', 'color', 'border', 'padding', 'margin', 'gradient']):
            print(" ", m.strip())
