## Diagnosis

The Release run failed with `exit code 127` (command not found) at the `bun run typecheck` step. Reason: `package.json` defines `"typecheck": "tsgo -p tsconfig.lib.json"`, but `tsgo` is a Lovable-sandbox-only binary and is not in `devDependencies`. On GitHub's runner there's nothing to execute, so bun exits 127.

## Fix

Change the `typecheck` script in `package.json` to use the real, installed TypeScript compiler:

```
"typecheck": "tsc -p tsconfig.lib.json --noEmit"
```

`typescript@^5.8.3` is already a devDependency, so `bun install` on the runner provides `tsc`. This keeps typecheck working both locally in Lovable and in the Release workflow, with no CI change required.

Ignore the "Node.js 20 is deprecated" annotation — that's a warning from `actions/checkout@v4`, not the cause of the failure. No action needed now.

## After the fix

Re-run **Actions → Release → Run workflow** on `main`. Expected: typecheck passes, `dist/` rebuild commit lands, `v1.5.0` tag is pushed, the Publish workflow ships `@alex-oden/ui@1.5.0` to npm.

## Files to change

- `package.json` — swap `tsgo` for `tsc --noEmit` in the `typecheck` script.

## Out of scope

- Removing typecheck from CI entirely.
- Bumping actions to Node 24 runners (warning-only).
