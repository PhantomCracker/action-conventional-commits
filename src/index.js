const {execSync} = require('child_process');

execSync("rm -rf ./dist");
execSync("yarn install --loglevel=error");

const output = execSync("yes 2>/dev/null | npx tsx src/main.ts");
console.log(output.toString());