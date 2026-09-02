import re

with open('src/lib/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# CRM
content = content.replace(
    '"CRM completo para sua imobiliária decolar nas vendas. Integre todos os seus leads e imóveis em um só lugar."',
    '"CRM Imobiliário inteligente para escalar suas vendas. Controle leads, funis e imóveis integrado com Inteligência Artificial."'
)
content = content.replace(
    '"Deixe o caos das planilhas para trás. O CRM da Microsistec reúne toda a gestão de leads, agendamentos, captações e acompanhamento de propostas num painel limpo, rápido e focado em produtividade. Dê à sua equipe as ferramentas para fechar mais negócios, mais rápido."',
    '"Deixe as planilhas para trás. O CRM Imobiliário da Microsistec reúne toda gestão de leads, automação de funis e integração com IA (LLMs) em um painel rápido e focado em produtividade e alta conversão."'
)

# Albert
content = content.replace(
    '"Seus leads esfriam porque você demora a responder? O Albert IA atende em segundos e só repassa os contatos quentes e prontos para fechar."',
    '"Não perca vendas por demora no atendimento. O Albert IA (Assistente Virtual Baseado em LLMs) qualifica leads em segundos com IA conversacional avançada."'
)
content = content.replace(
    '"Corretores perdem horas preciosas qualificando contatos curiosos ou perdem vendas porque não conseguem responder a tempo. O Albert IA resolve isso: ele entende intenções reais, responde com naturalidade 24 horas por dia, qualifica as finanças do lead e repassa o contato pronto para o corretor fechar o negócio no momento ideal."',
    '"Otimize seu funil de vendas com Inteligência Artificial. O Albert IA utiliza LLMs de última geração para entender intenções reais, qualificar leads financeiramente 24/7 e automatizar o atendimento inicial, garantindo que sua equipe só foque nos clientes de alta conversão."'
)

# Sites premium
content = content.replace(
    '"Seu site atual não atrai clientes e afasta leads? Tenha um Site Marketing de alta conversão, otimizado para captar leads todos os dias."',
    '"Transforme visitantes em leads qualificados. Tenha um Site Imobiliário de Alta Conversão, estruturado com SEO avançado para dominar o Google."'
)

with open('src/lib/data.ts', 'w', encoding='utf-8') as f:
    f.write(content)
