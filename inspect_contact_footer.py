from bs4 import BeautifulSoup

soup = BeautifulSoup(open('scraped_data/html/home.html', encoding='utf-8'), 'html.parser')
contact = soup.find('section', id='Contact')

cols = contact.find_all('div', class_=lambda c: c and ('elementor-col-50' in c or 'elementor-inner-column' in c))
for i, col in enumerate(cols):
    print(f"\n--- Contact Column {i+1} ---")
    for el in col.find_all(['h2', 'h3', 'p', 'form', 'iframe', 'a']):
        if el.name == 'form':
            inputs = [inp.get('name') for inp in el.find_all(['input', 'textarea'])]
            print(f"  Form with inputs: {inputs}")
        elif el.name == 'iframe':
            print(f"  Iframe src: {el.get('src')}")
        else:
            txt = el.get_text(strip=True)
            if txt:
                print(f"  <{el.name}>: {txt}")

# Check Footer section
footer_sec = soup.find('footer')
if footer_sec:
    print("\n--- Footer Content ---")
    print(footer_sec.get_text(separator=' | ', strip=True)[:500])
