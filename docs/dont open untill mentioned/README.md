# Working notes — read me first

> **Folder name is a warning, not a description.** These are live working
> documents, not reference material. Nothing here is finished, and several files
> contradict the shipped code. Read the [when to read this](#when-to-read-this)
> section before opening anything.

This folder is tracked in git so the work travels — it is the context that lets
you (or anyone else) pick the project up somewhere else and know what was in
flight.

---

## What is in here

| File | Size | Last touched | Purpose |
| --- | --- | --- | --- |
| `thinking-method.md` | 691 KB · 4,326 lines | 2026-10-01 | The largest document in the repo. The Thinking Method design and its worked examples. |
| `op suggestions.md` | 239 KB · 3,028 lines | 2026-10-03 | Proposals for improvements, most recent edit of anything here. |
| `CORRECTIONS.md` | 31 KB · 290 lines | 2026-10-01 | Every correction applied to [`docs/README.md`](../README.md), each with its `path:line` evidence. |
| `baba_trail_map_spec.md` | 24 KB · 360 lines | 2026-09-30 | Spec for the Baba-style Trail map. |
| `future plans.md` | 8 KB · 30 lines | 2026-10-01 | Short, high-level list. The cheapest file to read first. |

> Two directories at the repo root and in `old documentation/` held earlier
> copies of some of these (`baba_trail_map_spec.md`, `content-agent-prompt.md`,
> `german_learning_platform_design-final.md`). Those are removed as superseded.

---

## When to read this

- **Picking up the project?** Start with [`../../README.md`](../../README.md) for
  the shipped state, then `future plans.md`, then `thinking-method.md`.
- **Changing lesson content?** `thinking-method.md` and `op suggestions.md` carry
  the reasoning behind it. `docs/README.md` records what was actually built.
- **Debugging an audit failure?** `CORRECTIONS.md` explains how past
  documentation drift was found and fixed.
- **Agent (opencode / Claude Code / Codex)?** Do not open this folder unless the
  user asks for it. The folder name is a soft signal, not enforcement — see
  [Enforcement](#enforcement).

---

## Known issues in these files

- **This folder had its own `AUDIT_MANIFEST.md` (41 KB, last edited 2026-10-01);
  it was deleted as a stale duplicate.** The canonical audit manifest is the one
  at the repo root, [`AUDIT_MANIFEST.md`](../../AUDIT_MANIFEST.md) (18 KB, last
  edited 2026-10-11), which is what `README.md`, `docs/README.md` and
  `src/tests/docs-sync.test.ts` all point at. If you find a relative link to
  `./AUDIT_MANIFEST.md` inside this folder, it now resolves to the root copy
  only if written as `../../AUDIT_MANIFEST.md`.
- **The diagrams are not in git.** `thinking-method.md` links five images via
  relative paths (`thinking-method-images/diagram-000.png` … `diagram-004.png`).
  That directory is gitignored, so those five images will not resolve for anyone
  who clones the repo. Regenerate them from the source diagrams, or drop the
  links.
- **These files are not test-covered.** `src/tests/docs-sync.test.ts` guards the
  counts quoted in `README.md`, `AUDIT_MANIFEST.md`, `docs/README.md`, and
  `pitch/*.md`. Nothing checks the prose here, so it can drift from the code
  without warning. Treat every claim as needing verification against the source.

---

## Enforcement

Nothing stops an automated agent from reading this folder — a `.gitignore` entry
gates git, not the filesystem, and the tracked state of these files means they
are present in every clone. The only real protection is an instruction in the
agent's own config (`AGENTS.md` / `CLAUDE.md`), which is why the request to leave
this folder alone has to be stated in the prompt, not just implied by the name.

**Consequence:** if you need these documents to stay unread by default, move the
folder outside the repository working tree. It cannot be both tracked for
handoff and unreadable to a shell with read access to the clone.