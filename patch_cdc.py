import re

# data.ts
with open('src/lib/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("100% customizáveis", "totalmente customizáveis")
content = content.replace("garantindo presença no Google", "favorecendo o ranqueamento no Google")
content = content.replace("100% exclusivo", "exclusivo")
content = content.replace("garantir total velocidade", "maximizar a velocidade")
content = content.replace("100% digital", "totalmente digital")
content = content.replace("100% no cliente", "totalmente no cliente")
content = content.replace("100% Online", "totalmente Online")

with open('src/lib/data.ts', 'w', encoding='utf-8') as f:
    f.write(content)

# solucoes.$slug.tsx
with open('src/routes/solucoes.$slug.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("imóveis perfeitos", "imóveis ideais")
content = content.replace("100% personalizado", "totalmente personalizado")
content = content.replace('"100%", label: "LGPD conforme"', '"Total", label: "Adequação LGPD"')
content = content.replace('"100%", label: "integrado"', '"Total", label: "integrado"')
content = content.replace('"100%", label: "sincronizado"', '"Total", label: "sincronizado"')
content = content.replace('"100%", label: "métricas separadas"', '"Alta", label: "precisão de métricas"')
content = content.replace('"100%", label: "visual"', '"Total", label: "visual"')
content = content.replace('"100%", label: "automático"', '"Total", label: "automático"')
content = content.replace('"100%", label: "SEO score"', '"Alto", label: "SEO score"')
content = content.replace('"100%", label: "equidade"', '"Alta", label: "equidade"')
content = content.replace("100% pelo smartphone", "totalmente pelo smartphone")
content = content.replace("100% Responsivo", "Totalmente Responsivo")
content = content.replace("100% Exclusivo", "Totalmente Exclusivo")
content = content.replace("perfeito para imobiliárias dinâmicas", "ideal para imobiliárias dinâmicas")
content = content.replace("perfeito para jovens proptechs", "ideal para jovens proptechs")

with open('src/routes/solucoes.$slug.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

