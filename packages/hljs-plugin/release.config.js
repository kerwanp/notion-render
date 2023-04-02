const name = 'hljs-plugin';
const srcRoot = `packages/${name}`;

module.exports = {
  pkgRoot: `dist/${srcRoot}`,
  tagFormat: name + '-v${version}',
  commitPaths: [`${srcRoot}/*`],
  branches: [
    { name: 'main' },
    { name: 'dev', channel: 'latest', prerelease: 'rc' },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ['@semantic-release/changelog'],
    '@semantic-release/npm',
    [
      '@semantic-release/exec',
      {
        prepareCmd:
          `node tools/scripts/update-version.js ${srcRoot}/package.json` +
          ' ${nextRelease.version}',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: [`${srcRoot}/package.json`, `${srcRoot}/CHANGELOG.md`],
        message:
          `release(version): Release ${name} ` +
          '${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};