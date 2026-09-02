import re

# LeadForm.tsx
with open('src/components/LeadForm.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

consent_text = """
      <div className="text-[11px] text-gray-500 leading-tight">
        Ao enviar, você concorda com nossos <a href="/termos-de-uso" className="underline hover:text-gray-700">Termos</a> e <a href="/politica-de-privacidade" className="underline hover:text-gray-700">Política de Privacidade</a>.
      </div>
"""

# Insert before the submit button
content = content.replace(
    '{error && <p className="text-sm text-red-500">{error}</p>}',
    '{error && <p className="text-sm text-red-500">{error}</p>}' + consent_text
)

with open('src/components/LeadForm.tsx', 'w', encoding='utf-8') as f:
    f.write(content)


# DemoModal.tsx
with open('src/components/microsistec/DemoModal.tsx', 'r', encoding='utf-8') as f:
    content_modal = f.read()

consent_text_modal = """
                  <div className="text-[11px] text-muted-foreground leading-tight text-center max-w-sm mx-auto">
                    Ao enviar seus dados, você concorda com nossos <a href="/termos-de-uso" className="underline hover:text-foreground">Termos</a> e <a href="/politica-de-privacidade" className="underline hover:text-foreground">Política de Privacidade</a>.
                  </div>
"""

content_modal = content_modal.replace(
    '<p className="text-sm text-red-500 text-center font-medium bg-red-50/50 p-2 rounded-lg">{error}</p>\n                    )}',
    '<p className="text-sm text-red-500 text-center font-medium bg-red-50/50 p-2 rounded-lg">{error}</p>\n                    )}\n' + consent_text_modal
)

with open('src/components/microsistec/DemoModal.tsx', 'w', encoding='utf-8') as f:
    f.write(content_modal)

