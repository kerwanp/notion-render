module.exports = {
  '**/*.{ts,tsx,jsx,js}': (files) => [
    `yarn nx affected:lint --fix --parallel --lintFilePatterns="${files.join(
      ','
    )}"`,
  ],
};
