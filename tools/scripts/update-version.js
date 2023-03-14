const fs = require('fs');

const path = process.argv[2];
const version = process.argv[3];

let json = fs.readFileSync(path).toString('utf-8');
json = json.replace(/"version": ".+"/, `"version": "${version}"`);

fs.writeFileSync(path, json);
