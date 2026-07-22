Current state:
- GitHub `main` is at commit `08a6765 Fixed header corners & build` and package.json shows version `1.3.3` — so the published npm version is already reflected on GitHub.
- The Lovable workspace is one commit ahead of `main` on the active edit branch (`fcfdda9 Work in progress`). This commit has not reached GitHub yet.
- The GitHub repository only has the tag `v1.0.1`; there is no `v1.3.3` tag.

Plan to fully sync GitHub with the latest version:
1. Merge the active Lovable edit branch (`fcfdda9`) into `main` so GitHub receives the latest changes (inverse button, sharp hero header, build fix, etc.).
2. Verify the merged `package.json` still reads `1.3.3` and the `dist/` folder is committed and up to date.
3. Push the updated `main` to the GitHub remote (`alex-oden/np-design-lib`).
4. Create and push the `v1.3.3` tag on the new `main` commit.
5. Confirm via GitHub UI / API that `main` now matches the latest commit and the `v1.3.3` tag is present.

Note: I cannot run `git push` or `git tag` from this sandbox, so steps 3–4 need to be triggered from the Lovable editor or run locally in a GitHub Codespace / terminal.