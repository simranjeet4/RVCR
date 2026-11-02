with open('src/pages/HomePage.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

target1 = 'className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"'
replacement1 = 'className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"'

target2 = 'className="max-w-xl text-left py-12 md:py-20"'
replacement2 = 'className="max-w-xl text-left py-20 md:py-32"'

text = text.replace(target1, replacement1, 1)
text = text.replace(target2, replacement2, 1)

with open('src/pages/HomePage.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated hero container to w-full and added py-20 md:py-32 padding")
