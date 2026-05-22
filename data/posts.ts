export type BlogPostData = {
  slug: string;
  title: string;
  date: string;
  readTime: number;
  category: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  contentHtml: string;
};

export const postsList: BlogPostData[] = [
  {
    slug: "reducir-cac",
    title: "Como reduzir o CAC de sua imobiliária em 30%",
    date: "2024-09-10",
    readTime: 5,
    category: "Marketing",
    excerpt: "Descubra como otimizar seus canais de aquisição de clientes, focar em conversão orgânica e aproveitar a triagem com Inteligência Artificial para derrubar o Custo de Aquisição de Clientes (CAC) de forma cirúrgica.",
    author: {
      name: "Marcus Vinícius",
      role: "Diretor de Growth",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120&h=120"
    },
    contentHtml: `
      <p>No mercado imobiliário moderno, o <strong>Custo de Aquisição de Clientes (CAC)</strong> tornou-se uma das métricas mais críticas para a saúde financeira e sustentabilidade de qualquer operação imobiliária. Com o encarecimento contínuo de anúncios pagos no Google Ads e Meta Ads (Instagram/Facebook), imobiliárias que dependem unicamente de mídia paga têm visto suas margens de lucro serem drasticamente reduzidas.</p>
      
      <p>Neste artigo prático, apresentamos uma metodologia testada e comprovada em mais de 1.200 clientes da Microsistec para <strong>reduzir seu CAC em até 30%</strong> em poucos meses, sem diminuir a quantidade de fechamentos.</p>
      
      <h3>1. Triagem Primária com Inteligência Artificial (MQL)</h3>
      <p>Uma das maiores fontes de vazamento de orçamento de marketing é direcionar leads frios ou desqualificados diretamente para corretores de alta performance. O tempo do corretor é valioso. Quando ele gasta horas ligando para pessoas que digitaram o telefone errado ou que procuram um imóvel de aluguel quando o foco é venda de luxo, você está jogando dinheiro fora.</p>
      <p>Ao implementar um chatbot especialista como o <strong>Albert</strong> em seu site e WhatsApp:</p>
      <ul>
        <li>O robô qualifica 100% dos leads nas primeiras mensagens 24 horas por dia.</li>
        <li>Identifica automaticamente o orçamento disponível, preferência de bairro e pressa de compra.</li>
        <li>Bloqueia leads falsos e envia apenas contatos prontos (MQL) para os corretores.</li>
      </ul>
      <p>Isso reduz o desperdício de tempo operacional e maximiza a produtividade do time de fechamento.</p>
      
      <blockquote>
        "Imobiliárias de alta performance não deixam seus corretores fazerem triagem. A Inteligência Artificial serve para entregar o lead aquecido e pronto para a proposta."
      </blockquote>
      
      <h3>2. Aceleração de Velocidade do Site (FCP & SEO)</h3>
      <p>Quantos clientes você perde simplesmente porque o seu site de imóveis demora mais de 3 segundos para carregar as fotos? Estudos do Google provam que a taxa de rejeição aumenta em 90% se o tempo de carregamento mobile subir de 1s para 3s.</p>
      <p>Investir em um site ultraveloz, como a tecnologia <strong>Microsistec Sites V8</strong>, garante que a sua taxa de conversão orgânica de visitantes para contatos cadastrados aumente consideravelmente. Mais leads gerados organicamente significa um custo médio por lead muito menor, diminuindo o CAC geral.</p>
      
      <h3>3. Nutrição Inteligente de Leads Abandonados</h3>
      <p>A maioria das imobiliárias foca apenas no lead que acabou de entrar. No entanto, sua carteira de contatos frios (aqueles que visitaram um imóvel há 3 meses e sumiram) é um verdadeiro pote de ouro. Em vez de comprar mais mídia paga para atrair novos visitantes:</p>
      <p>Configure réguas de automação que identifiquem a inatividade do cliente e disparem recomendações personalizadas com base no perfil histórico dele. O custo de reengajar um lead existente é próximo de zero.</p>
      
      <h3>Conclusão</h3>
      <p>Reduzir o CAC não significa investir menos em marketing, mas sim investir de forma mais inteligente. Integrando automação, IA de triagem rápida e um site de altíssima performance, sua imobiliária cria um funil sólido, ágil e focado na conversão real.</p>
    `
  },
  {
    slug: "automacao-followup",
    title: "Automação de follow‑up: o segredo para não perder leads",
    date: "2024-08-25",
    readTime: 7,
    category: "Vendas",
    excerpt: "Aprenda como estruturar uma régua de relacionamento automática e inteligente que engaja seus clientes pós-visita e pós-proposta, multiplicando seus fechamentos de comissão.",
    author: {
      name: "Renato Albuquerque",
      role: "Especialista em Processos Comerciais",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120"
    },
    contentHtml: `
      <p>Pesquisas indicam que mais de <strong>70% dos leads imobiliários</strong> são perdidos simplesmente por falta de acompanhamento (follow-up) sistemático. O corretor de imóveis tem uma rotina intensa: visitas, cartórios, vistorias e reuniões. Sem o auxílio de automações estruturadas, é humanamente impossível lembrar-se de mandar uma mensagem personalizada de pós-visita para cada um dos 50 clientes ativos em sua carteira.</p>
      
      <p>Neste artigo, vamos desvendar os segredos das imobiliárias líderes de vendas e como elas desenham uma <strong>régua de automação de follow-up</strong> que impede a perda de negócios.</p>
      
      <h3>O Efeito do Esquecimento Comercial</h3>
      <p>A empolgação do comprador de imóveis tem prazo de validade. Logo após fazer uma visita a um imóvel decorado, a empolgação dele está no nível máximo. Passadas 48 horas sem nenhum contato do corretor, o silêncio gera insegurança e abre espaço para a concorrência entrar.</p>
      
      <p>Um funil automatizado bem configurado reage a cada etapa da jornada de forma cirúrgica:</p>
      
      <h3>Etapa 1: O Follow-Up Imediato Pós-Visita (Gatilho Automático)</h3>
      <p>Assim que o corretor marca a visita como 'Concluída' no aplicativo mobile, o sistema dispara um e-mail ou WhatsApp contendo:</p>
      <ul>
        <li>Agradecimento pela visita e atenção dedicada.</li>
        <li>A ficha técnica completa do imóvel em formato PDF navegável.</li>
        <li>Um link expresso para tirar dúvidas sobre financiamento ou enviar proposta oficial.</li>
      </ul>
      
      <h3>Etapa 2: A Nutrição de Meio de Funil (Gatilhos Semanais)</h3>
      <p>Caso o cliente não responda à primeira abordagem pós-visita:</p>
      <p>Em vez de ligar de forma invasiva, a automação envia na semana seguinte um comparativo do bairro visitado, dados de valorização da região ou novas unidades similares que acabaram de entrar no mercado com preços atrativos. Você demonstra valor e conhecimento, mantendo sua marca em destaque de forma amigável.</p>
      
      <blockquote>
        "Quem é lembrado na hora da dúvida de compra é quem ofereceu suporte de valor de forma consistente, não quem ligou cobrando uma resposta comercial agressiva."
      </blockquote>
      
      <h3>Etapa 3: A Régua Pós-Proposta (Decisiva)</h3>
      <p>Quando uma proposta é enviada ao proprietário, a ansiedade do comprador atinge o topo. Automatizar mensagens que detalham as etapas do processo de análise documental e informam sobre o andamento das vistorias acalma o cliente e reduz a taxa de desistência pré-contrato.</p>
      
      <h3>Próximos Passos para sua Imobiliária</h3>
      <p>Para implementar isso com eficácia:</p>
      <ol>
        <li>Defina com sua diretoria quais são os prazos aceitáveis entre visitas e propostas.</li>
        <li>Escreva mensagens de WhatsApp curtas, humanas e focadas em prestar suporte, evitando tons puramente robóticos.</li>
        <li>Habilite as integrações de automação comercial Microsistec V8 para gerenciar esses disparos com base no preenchimento de campos em seu CRM.</li>
      </ol>
    `
  },
  {
    slug: "seo-imobiliario",
    title: "SEO para sites imobiliários: checklist 2024",
    date: "2024-08-12",
    readTime: 6,
    category: "SEO",
    excerpt: "Posicione seus imóveis no topo do Google. Siga nosso checklist completo de SEO técnico, otimização de imagens, velocidade Core Web Vitals e palavras-chave locais.",
    author: {
      name: "Gabriela Rossi",
      role: "Especialista em SEO & Conteúdo",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120"
    },
    contentHtml: `
      <p>Quando alguém decide comprar um apartamento ou casa, a primeira ação que toma é abrir o Google e digitar termos como <em>'apartamento 3 quartos no Centro'</em> ou <em>'casa à venda em condomínio fechado'</em>. Se os imóveis da sua imobiliária não aparecem na primeira página de resultados, você simplesmente não existe para esses potenciais compradores altamente qualificados.</p>
      
      <p>Neste guia definitivo de <strong>SEO Imobiliário para 2024</strong>, listamos as principais otimizações técnicas e estruturais que levarão seu portal ao topo orgânico das buscas do Google.</p>
      
      <h3>O Checklist Técnico do Google (Core Web Vitals)</h3>
      <p>O algoritmo do Google prioriza a experiência do usuário. Em termos práticos, se o seu site demora para abrir as fotos no celular, ele perde posições nas pesquisas. Atente-se a estes três pilares:</p>
      
      <ul>
        <li><strong>FCP (First Contentful Paint) < 1s:</strong> O primeiro bloco visível de conteúdo do site deve aparecer em menos de 1 segundo.</li>
        <li><strong>CLS (Cumulative Layout Shift) = 0:</strong> Os botões e imagens não podem 'pular' ou mudar de lugar enquanto a página carrega, evitando cliques acidentais irritantes.</li>
        <li><strong>Mobile Friendly:</strong> Mais de 82% das buscas por imóveis ocorrem pelo celular. O design mobile deve ser perfeito.</li>
      </ul>
      
      <h3>A Otimização de Palavras-Chave de Cauda Longa (Long-Tail)</h3>
      <p>Tentar competir pela palavra-chave geral 'apartamento em São Paulo' é extremamente difícil e caro contra grandes agregadores de portais imobiliários. A estratégia vencedora é focar em <strong>palavras-chave locais e ultra-específicas</strong>.</p>
      
      <p>Exemplo de otimização de títulos de imóveis no seu CRM:</p>
      <table>
        <thead>
          <tr>
            <th>Título Comum (Errado)</th>
            <th>Título Otimizado para SEO (Correto)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ap 3Q Centro</td>
            <td>Apartamento 3 quartos à venda no Centro de Piracicaba com Varanda Gourmet</td>
          </tr>
          <tr>
            <td>Casa Cond. Sol</td>
            <td>Casa em Condomínio Fechado à venda em Pinheiros com Piscina e 4 Suítes</td>
          </tr>
        </tbody>
      </table>
      
      <h3>SEO On-Page para Fichas de Imóvel</h3>
      <p>Cada imóvel cadastrado no seu CRM deve ser tratado como uma página de destino altamente otimizada:</p>
      <p>1. <strong>Descrições ricas e exclusivas:</strong> Evite copiar e colar descrições padrão da construtora. Escreva parágrafos descrevendo a vida na região, os diferenciais do condomínio e as vantagens do sol da manhã.</p>
      <p>2. <strong>Imagens leves e com ALT text:</strong> Renomeie o arquivo da foto de 'IMG_2024.jpg' para 'sala-apartamento-centro-cidade.jpg' e preencha a propriedade Alt-text da imagem no CRM. O Google não enxerga fotos, ele lê códigos.</p>
      <p>3. <strong>Sitemaps dinâmicos XML:</strong> Tenha um arquivo sitemap que avisa ao robô do Google imediatamente quando um novo imóvel entra em sua base de dados ou quando um preço é reduzido.</p>
      
      <h3>Comece Agora</h3>
      <p>Ao contratar um portal <strong>Microsistec Site V8</strong>, 100% dos requisitos deste checklist técnico já estão embutidos nativamente. Nossas páginas carregam instantaneamente e os sitemaps dinâmicos XML são auto-gerados a cada hora, garantindo indexação rápida e automática.</p>
    `
  }
];
