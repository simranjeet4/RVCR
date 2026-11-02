import re

with open('src/pages/HomePage.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace font-light on headings with font-bold
def replacer(match):
    tag = match.group(0)
    tag = tag.replace('font-light', 'font-bold')
    return tag

updated = re.sub(r'<h[1-6][^>]*>', replacer, content)

with open('src/pages/HomePage.tsx', 'w', encoding='utf-8') as f:
    f.write(updated)

print("Updated HomePage.tsx headings to font-bold (700)")
