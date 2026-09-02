import re

with open('src/components/microsistec/MicrosistecLanding.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Line 100: Logo
content = content.replace(
    '''<img\n              src="/logo.png"\n              alt="Microsistec Logo"''',
    '''<img\n              src="/logo.png"\n              alt="Microsistec Logo"\n              width={160}\n              height={40}\n              fetchpriority="high"'''
)

# Line 1434 (approx) : Logo placeholder in some component
# Wait, let's just use regex to add loading="lazy" if not present and if it's not the main logo.

def add_attrs(match):
    tag = match.group(0)
    if 'fetchpriority="high"' in tag:
        return tag
    if 'loading=' not in tag and 'logo.png' not in tag:
        # insert loading lazy before alt or src
        tag = tag.replace('<img', '<img loading="lazy"')
    return tag

content = re.sub(r'<img[^>]+>', add_attrs, content)

with open('src/components/microsistec/MicrosistecLanding.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

with open('src/routes/solucoes.$slug.tsx', 'r', encoding='utf-8') as f:
    content_slug = f.read()

content_slug = re.sub(r'<img[^>]+>', add_attrs, content_slug)

with open('src/routes/solucoes.$slug.tsx', 'w', encoding='utf-8') as f:
    f.write(content_slug)

