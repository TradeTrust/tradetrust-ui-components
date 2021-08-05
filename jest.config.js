module.exports = {
  coverageDirectory: "coverage",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testPathIgnorePatterns: ["/node_modules/", "/integration/"],
};
