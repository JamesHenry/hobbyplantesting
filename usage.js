const cp = require("child_process");

for (let i = 0; i < 101; i++) {
  console.log(`Running test${i}`);
  cp.execSync(
    `NX_BRANCH=test${i} NX_CI_EXECUTION_ID=${i} npx nx run-many -t build`,
    { stdio: "inherit" }
  );
}
cp.execSync(`pkill -9 -f heartbeat`);
