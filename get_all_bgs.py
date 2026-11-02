import urllib.request
import re

with urllib.request.urlopen('https://rvcr.tech/wp-content/uploads/elementor/css/post-105.css') as res:
    post_105 = res.read().decode('utf-8', errors='ignore')

# Find all background-image or background-color in post_105
bg_rules = re.findall(r'(\.elementor-element-[a-zA-Z0-9]+[^{]*\{[^}]*background[^}]*\})', post_105)
for r in bg_rules:
    print(r)
