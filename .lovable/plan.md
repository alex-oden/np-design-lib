## Goal

Zero-terminal releases. When I ask "update the library", I edit code + bump `package.json`, and a GitHub Actions workflow you trigger from the browser tags the commit and publishes to npm — no local git, no Codespaces.

## How it will work

Add a new workflow `.github/workflows/release.yml` with a `workflow_dispatch` trigger (a "Run workflow" button on GitHub → Actions). It:

1. Reads `version` from `package.json` on the current `main`.
2. Fails early if a matching `vX.Y.Z` tag already exists (prevents accidental re-release).
3. Runs `bun install`, `bun run build:lib`, force-adds `dist/`, commits `chore: release vX.Y.Z` if there are changes.
4. Creates and pushes the `vX.Y.Z` tag.
5. Tag push automatically fires the existing `.github/workflows/publish.yml`, which publishes `@alex-oden/ui@X.Y.Z` to npm via `NPM_TOKEN`.

Also tighten the existing publish workflow so it fails loudly (instead of silently skipping) if `NPM_TOKEN` is missing, and update `README.md` "Releasing" section to describe the new one-click flow.

## Your flow from now on

1. You ask me to update the library.
2. I make the code changes + bump `package.json` version + update `CHANGELOG.md`.
3. You open GitHub → Actions → **Release** → **Run workflow** → pick `main` → Run. Done. npm gets the new version within ~2 minutes.

No terminal, no local clone, no Codespaces.

## Files to change

- `.github/workflows/release.yml` — new, manual trigger, tags + pushes.
- `.github/workflows/publish.yml` — small hardening: explicit `NPM_TOKEN` presence check.
- `README.md` — replace the "Releasing" section with the click-to-release instructions.

## Prerequisite (one-time, already done in your repo)

- `NPM_TOKEN` secret exists in the GitHub repo settings. ✅ (used by current publish workflow)
- The release workflow needs `contents: write` permission — included in the workflow file, no repo-setting change needed.

## Out of scope

- Auto-bumping the version from commit messages (semantic-release). Heavier setup; can add later.
- Publishing prereleases / `next` dist-tag. Current flow always publishes `latest`.
