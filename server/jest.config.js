module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  transformIgnorePatterns: ["/node_modules/", "/dist/"],
  setupFilesAfterEnv: ["./jest.setup.js"]
};
