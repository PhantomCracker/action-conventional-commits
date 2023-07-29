const {execSync} = require('child_process');

// execSync("rm -rf ./dist");
execSync("rm -rf node_modules");
execSync("rm yarn.lock");
execSync("yarn cache clean");
execSync("yarn set version latest");
execSync("yarn install");

const output = execSync("npx tsx src/main.ts");
console.log(output.toString());