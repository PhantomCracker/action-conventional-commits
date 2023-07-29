const {execSync} = require('child_process');

execSync("rm -rf ./dist");
execSync("yarn set version latest");
execSync("yarn cache clean");
execSync("rm -rf node_modules");
execSync("rm yarn.lock");
// execSync("yarn install --check-files");
execSync("yarn install --loglevel error --legacy-peer-deps");

const output = execSync("yes 2>/dev/null | npx tsx src/main.ts");
console.log(output.toString());