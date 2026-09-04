import re

with open('src/components/microsistec/MicrosistecLanding.tsx', 'r') as f:
    content = f.read()

def extract_function(name):
    # Find start of function: function Name OR export function Name
    pattern = r'(?:export\s+)?function\s+' + name + r'\s*\([^)]*\)\s*{'
    match = re.search(pattern, content)
    if not match:
        return None, content
    
    start_idx = match.start()
    
    # Brace counting
    brace_count = 0
    in_string = False
    string_char = ''
    idx = match.end() - 1 # Points to '{'
    
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
    
    # Remove the function from original content
    new_content = content[:start_idx] + content[end_idx:]
    return func_content, new_content

components_to_extract = [
    'StatsStrip', 'Pillars', 'Albert', 'AlbertChat', 'Bubble',
    'Funil', 'FunnelVisual', 'Ecosystem', 'Blog', 'CTA',
    'Footer', 'FooterCol', 'IntegrationsSection', 'IntegrationPill'
]

extracted = {}

for comp in components_to_extract:
    func_content, new_content = extract_function(comp)
    if func_content:
        extracted[comp] = func_content
        content = new_content
        print(f"Extracted {comp}")
    else:
        print(f"Failed to extract {comp}")

import os
os.makedirs('src/components/microsistec/sections', exist_ok=True)

# Common imports for the new files
common_imports = """import * as React from "react";
import { Link } from "@tanstack/react-router";
import { useDemoModal } from "@/hooks/use-demo-modal";
import {
  ArrowLeft, ArrowUpRight, ArrowRight, Sparkles, Workflow, Smartphone, Target,
  LineChart, Bot, MessageSquare, Building2, Globe, ShieldCheck, CheckCircle2,
  Quote, KeyRound, ChevronDown, Menu, X, Users, Home, Facebook, Instagram, Youtube
} from "lucide-react";
import {
  solutions, getIconComponent, blogPosts, testimonials, portalIntegrations
} from "@/lib/data";
"""

def save_comp(name, code):
    # If the function doesn't have "export", add it
    if not code.startswith("export"):
        code = code.replace("function " + name, "export default function " + name, 1)
    else:
        code = code.replace("export function " + name, "export default function " + name, 1)
    
    with open(f'src/components/microsistec/sections/{name}.tsx', 'w') as f:
        f.write(common_imports + "\n" + code + "\n")

# Group some components together
if 'StatsStrip' in extracted: save_comp('StatsStrip', extracted['StatsStrip'])
if 'Pillars' in extracted: save_comp('Pillars', extracted['Pillars'])

# Albert group
albert_code = ""
if 'Bubble' in extracted: albert_code += extracted['Bubble'] + "\n\n"
if 'AlbertChat' in extracted: albert_code += extracted['AlbertChat'] + "\n\n"
if 'Albert' in extracted: albert_code += extracted['Albert']
if albert_code: save_comp('Albert', albert_code)

# Funil group
funil_code = ""
if 'FunnelVisual' in extracted: funil_code += extracted['FunnelVisual'] + "\n\n"
if 'Funil' in extracted: funil_code += extracted['Funil']
if funil_code: save_comp('Funil', funil_code)

if 'Ecosystem' in extracted: save_comp('Ecosystem', extracted['Ecosystem'])

# Integrations group
int_code = ""
if 'IntegrationPill' in extracted: int_code += extracted['IntegrationPill'] + "\n\n"
if 'IntegrationsSection' in extracted: int_code += extracted['IntegrationsSection']
if int_code: save_comp('IntegrationsSection', int_code)

if 'Blog' in extracted: save_comp('Blog', extracted['Blog'])
if 'CTA' in extracted: save_comp('CTA', extracted['CTA'])

# Footer group
footer_code = ""
if 'FooterCol' in extracted: footer_code += extracted['FooterCol'] + "\n\n"
if 'Footer' in extracted: footer_code += extracted['Footer']
if footer_code: save_comp('Footer', footer_code)

with open('src/components/microsistec/MicrosistecLanding.tsx', 'w') as f:
    f.write(content)

print("Done extracting")
