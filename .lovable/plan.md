## Fix invalid YAML in `.github/workflows/update-dist.yml`

GitHub reports "Invalid workflow file — yaml syntax on line 21". Root cause: the `if:` value begins with `!`, which YAML treats as a reserved tag indicator when unquoted. The expression must be wrapped in quotes.

### Change

In `.github/workflows/update-dist.yml`, line 21:

```yaml
if: ${{ !contains(github.event.head_commit.message, 'chore: update dist') }}
```

→

```yaml
if: "${{ !contains(github.event.head_commit.message, 'chore: update dist') }}"
```

No other changes. After the auto-sync pushes this to `main`, GitHub Actions will accept the workflow and the auto-build-dist job will run on the next push.