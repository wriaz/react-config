const scanner = require("sonarqube-scanner");
scanner(
  {
    serverUrl: "http://localhost:9000",
    token: "squ_e72abf9bb11d2da7f2e3d09b2f303fec64ddd1a1", // generated from sonarqube account
    options: {
      "sonar.sources": "./src",
      "sonar.exclusions": "**/*.test.tsx",
      "sonar.tests": "./src",
      "sonar.eslint.reportPaths": "eslint-report.json",
      "sonar.test.inclusions": "**/*.test.tsx,**/*.test.ts",
      "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
      "sonar.testExecutionReportPaths": "test-report.xml",
    },
  },
  () => process.exit()
);
