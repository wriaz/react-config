const scanner = require("sonarqube-scanner");
scanner(
  {
    serverUrl: "http://localhost:9000",
    token: "sqp_bc58e0b9561c339fb607d514f27b5324bc99d348", // generated from sonarqube account
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
