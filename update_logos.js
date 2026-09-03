const fs = require('fs');

const file = 'src/lib/data.ts';
let content = fs.readFileSync(file, 'utf8');

const replacements = {
  'Portal CRECI': 'https://imob.online/imgs/portais/portalcreci.png',
  'Olho Mágico': 'https://imob.online/imgs/portais/olhomagico.png',
  '321achei': 'https://imob.online/imgs/portais/321achei.png',
  'AlugarJa': 'https://imob.online/imgs/portais/alugarja.png',
  'Guia Imóvel & Cia': 'https://imob.online/imgs/portais/guiaimovelcia.png',
  'SP Imóvel': 'https://imob.online/imgs/portais/grupo_sp.png',
  'Portais Imobiliários': 'https://imob.online/imgs/portais/portaisimobiliarios.png',
  'Trocalar': 'https://imob.online/imgs/portais/trocalar.png',
  'VC Busca': 'https://imob.online/imgs/portais/vcbusca.png',
  'Linklar': 'https://imob.online/imgs/portais/linklar.png',
  'Storia Imóveis': 'https://imob.online/imgs/portais/storia.png',
  'Buskaza': 'https://imob.online/imgs/portais/campainha.png',
  'Epungo': 'https://imob.online/imgs/portais/epungo.png',
  'Imocasa': 'https://imob.online/imgs/portais/imocasa.png'
};

for (const [name, url] of Object.entries(replacements)) {
  const regex = new RegExp(`(name:\\s*["']${name}["'][\\s\\S]*?)(logoImg:\\s*["'].*?["']|officialColor:\\s*["'].*?["'])`, 'g');
  
  content = content.replace(regex, (match, p1, p2) => {
    if (match.includes('logoImg:')) {
      return p1 + `logoImg: "${url}"`;
    } else {
      return p1 + `logoImg: "${url}",\n    ` + p2;
    }
  });
}

fs.writeFileSync(file, content);
console.log("Logos updated successfully.");
