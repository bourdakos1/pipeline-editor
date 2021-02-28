/*
 * Copyright 2018-2021 Elyra Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: [
    // Collect coverage for all typescript files.
    "**/*.{ts,tsx}",
    // Ignore files in the src directory. Mainly, `index.ts` which should only
    // be exports.
    "!**/src/*",
    // Ignore any typescript declaration files.
    "!**/*.d.ts",
    // ignore tests and snapshot tests.
    "!**/*.test.{ts,tsx}",
  ],
  coverageReporters: ["lcov", "text"],
  projects: ["<rootDir>/packages/*"],
};
