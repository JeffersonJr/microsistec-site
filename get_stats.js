import fs from 'fs';
const data = JSON.parse(fs.readFileSync('stats.json', 'utf-8'));
// We just want the top level files
let map = [];
function readNode(node, path) {
  if (node.children) {
    node.children.forEach(c => readNode(c, path + "/" + node.name));
  } else {
    map.push({ path: path + "/" + node.name, size: node.size });
  }
}
// wait, visualizer stats format might be different depending on version. Let's just use the visualizer to output an HTML, or run source-map-explorer.
