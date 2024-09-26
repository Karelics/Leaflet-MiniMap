const fs = require('pn/fs');
const svg2png = require('svg2png');
const path = require('path');
const ncp = require('ncp');

const svgSourcePath = path.resolve(__dirname, '../src/images/toggle.svg');
const pngSourcePath = path.resolve(__dirname, '../src/images/toggle.png');
const pngDistPath = path.resolve(__dirname, '../dist/images/toggle.png');

fs.readFile(svgSourcePath)
    .then(svg2png)
    .then(buffer => fs.writeFile(pngSourcePath, buffer))
		.then(() => ncp(pngSourcePath, pngDistPath))
    .catch(e => console.error(e));
