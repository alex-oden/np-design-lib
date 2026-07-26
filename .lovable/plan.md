## Goal

Ship `@alex-oden/ui@1.5.0` to npm, sync GitHub, and add automation so future library updates publish automatically when I bump the version.

## Steps

### 1. Automate publishing on version bump

Rewrite `.github/workflows/publish.yml` to trigger on tag push (`v*`) in addition to `workflow_dispatch`, so pushing a `v1.5.0` tag publishes automatically. Add a guard: `npm publish` uses `--tag latest` and skips if the version already exists on npm (`npm view ... version` check) to avoid failed reruns.

### 2. Add a "release" script

Add a `scripts.release` entry to `package.json` that runs `bun run build:lib` locally as a sanity step, and document (in README) the one-command flow for future updates:

```
# bump version in package.json, then:
git add -A && git commit -m "release: v<x.y.z>"
git tag v<x.y.z>
git push origin main --tags
```

Tag push → GitHub Actions builds + publishes to npm automatically. `update-dist.yml` keeps `dist/` committed on `main`.

### 3. Publish v1.5.0 now

Because I can't run git from here, the user runs (one time):

```
git add -A
git commit -m "release: v1.5.0 — ThemeBackground + docs + auto-publish"
git tag v1.5.0
git push origin main --tags
```

The updated workflow then publishes `@alex-oden/ui@1.5.0` to npmjs.com using the existing `NPM_TOKEN` secret. Verify with `npm view @alex-oden/ui version` → `1.5.0`.

### 4. Future updates (the "automatic" part you asked for)

From next time on, when you ask me to update the library, I will:
1. Make the code changes
2. Bump `version` in `package.json`
3. Update `CHANGELOG.md` + `README.md`
4. Rebuild `dist/`
5. Give you a single `git tag vX.Y.Z && git push --tags` command

The tag push publishes to npm without any manual "Run workflow" click.

## Out of scope

- Changing the npm package name or scope.
- Setting up an npm-side automation account (uses the existing `NPM_TOKEN`).
- Auto-bumping the version from commit messages (semantic-release) — heavier setup; can add later if you want fully hands-off releases.
