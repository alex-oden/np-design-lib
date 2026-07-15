
## Goal

Move `@alex-oden/ui` from GitHub Packages to public npmjs.com registry, bump to `1.2.0`, and align all version references across the repo.

## Changes

### 1. `package.json`
- `version`: `1.1.0` → `1.2.0`
- Replace `publishConfig` with:
  ```json
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org"
  }
  ```

### 2. `bunfig.toml`
- Inspect — if it contains a scope registry pointing to `npm.pkg.github.com`, remove that block. Keep the `minimumReleaseAge` install guard untouched.
- No `.npmrc` exists in the repo (already gone).

### 3. `.github/workflows/publish.yml`
Rewrite:
```yaml
name: Publish package
on:
  workflow_dispatch:
permissions:
  contents: read
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          registry-url: https://registry.npmjs.org
      - run: npm install --no-audit --no-fund --ignore-scripts
      - run: npm run build:lib
      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```
User must add `NPM_TOKEN` secret in GitHub → Settings → Secrets and variables → Actions (npmjs.com → Access Tokens → Automation token).

### 4. `.npmignore`
Already correct (allow-list: `dist/`, `package.json`, `README.md`, `CHANGELOG.md`, `LICENSE`). No change.

### 5. Version-sync sweep
Search & update every occurrence of `1.0.0` / `1.0.1` / `1.1.0` and any `github:...#v...` install snippet to `1.2.0` / `npm i @alex-oden/ui` in:
- `README.md` (install commands, examples)
- `CHANGELOG.md` — prepend `## 1.2.0 — Published to npmjs.com` entry
- `docs/neospower-report.md` (if referenced)
- Any other doc/route text mentioning the version or GitHub install path

Install snippet in README becomes:
```bash
npm i @alex-oden/ui
# or: bun add @alex-oden/ui / pnpm add @alex-oden/ui
```

## What I cannot do from Lovable
- **Run `npm publish`.** The sandbox has no `NPM_TOKEN` and no npmjs write auth. Publication runs via the GitHub Actions workflow above, which the user triggers with **Actions → Publish package → Run workflow** after adding the `NPM_TOKEN` secret.
- **Verify `npm view @alex-oden/ui`** — the package won't exist on npmjs.com until the workflow succeeds. I'll instruct the user to run `npm view @alex-oden/ui version` locally afterward; it must return `1.2.0`.

## Deliverable
A single build-mode pass that edits the 3-4 files above, then a short handoff message with the two manual steps (add `NPM_TOKEN`, run workflow) and the verification command.
