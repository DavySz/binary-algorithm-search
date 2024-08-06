import type { Config } from "jest";

const config: Config = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "<rootDir>/src/presenters/**/*.ts",
    "<rootDir>/src/data/**/*.ts",
    "!<rootDir>/src/**/**.protocol.ts",
    "!<rootDir>/src/**/index.ts",
  ],
  coverageProvider: "v8",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
};

export default config;
