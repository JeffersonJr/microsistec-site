import re
with open('src/components/microsistec/MicrosistecLanding.tsx', 'r') as f:
    content = f.read()

pattern = r'function\s+FooterCol\s*\([^)]*\)\s*{'
match = re.search(pattern, content)
if match:
    start_idx = match.start()
    brace_count = 0
    in_string = False
    string_char = ''
    idx = match.end() - 1
    
    while idx < len(content):
        c = content[idx]
        if in_string:
            if c == string_char and content[idx-1] != '\\':
                in_string = False
        else:
            if c in '"\'`':
                in_string = True
                string_char = c
            elif c == '{':
                brace_count += 1
            elif c == '}':
                brace_count -= 1
                if brace_count == 0:
                    break
        idx += 1
    end_idx = idx + 1
    func_content = content[start_idx:end_idx]
    new_content = content[:start_idx] + content[end_idx:]
    
    with open('src/components/microsistec/MicrosistecLanding.tsx', 'w') as f:
        f.write(new_content)
    
    with open('src/components/microsistec/sections/Footer.tsx', 'r') as f:
        footer_content = f.read()
    
    # insert before export default function Footer
    footer_content = footer_content.replace("export default function Footer", func_content + "\n\nexport default function Footer")
    with open('src/components/microsistec/sections/Footer.tsx', 'w') as f:
        f.write(footer_content)
    print("Fixed FooterCol")
else:
    print("Could not find FooterCol")
