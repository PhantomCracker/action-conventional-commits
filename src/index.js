// const {execSync} = require('child_process');
//
// // execSync("rm -rf ./dist");
// execSync("rm -rf node_modules");
// execSync("rm yarn.lock");
// execSync("yarn cache clean");
// execSync("yarn set version latest");
// execSync("yarn install");
//
// const output = execSync("npx tsx src/main.ts");
// console.log(output.toString());


const { exec, execSync } = require("child_process");

exec("rm -rf ./dist", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
});
execSync("yarn install && npm install --save-dev tsx");
exec("yes 2>/dev/null | npx tsx src/main.ts", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});

// const output = execSync("yes 2>/dev/null | npx tsx src/main.ts");
// console.log(output.toString());
