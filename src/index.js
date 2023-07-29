const { exec, execSync } = require("child_process");

exec("rm -rf ./dist", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
});
execSync("yarn install && yarn add tsx --dev");
exec("yes 2>/dev/null | npx tsx PhantomCracker/action-conventional-commits@master/src/main.ts", (error, stdout, stderr) => {
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
