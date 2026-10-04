# Task: Build a TUI for Brücke + Model Comparison

## Context
In `/home/shaurya/gemini-tmp/german-app-thinking-method` there is an existing German language-learning app called **Brücke** (a Next.js/Bun web app). I want a **TUI (terminal UI) implementation** of it, created in a separate directory (e.g. `GermanAppTuiDirectory` / `geman-app-tui`).

## Step 1 — Have all three models do the same task concurrently
Run these three free models on the SAME task, in parallel:
1. **Fledge Alpha Free** (opencode)
2. **Space Bunny Free** (opencode)
3. **Muse Spark 1.3**

Give each of them this exact task prompt:

> Implement a TUI (terminal user interface) version of the Brücke German language-learning app. Work ONLY inside the `GermanAppTuiDirectory` (`/home/shaurya/gemini-tmp/geman-app-tui`). Do NOT modify, read-for-edit, or commit anything in `german-app-thinking-method`. You may READ the original project to understand features and philosophy, but all new code goes in the TUI directory. Write the code, but do NOT git commit anything.

Each model should work in its own subdirectory/branch of the TUI directory so their outputs don't clash (e.g. `geman-app-tui/fledge/`, `geman-app-tui/space-bunny/`, `geman-app-tui/muse-spark/`).

## Step 2 — Read the docs and understand the philosophy FIRST
Before judging anything, read and understand the app's philosophy and architecture by reading at least these documents (read more if you find them relevant):
- `README.md` (project overview, philosophy)
- `ambition.md` (the vision)
- `AUDIT_MANIFEST.md` (architectural specs, data schemas)
- `docs/german_learning_platform_design-final.md` (design spec)
- `docs/THINKING_METHOD_UPGRADE.md` and `docs/grammar-gap-placement.md` (learning methodology)
- `docs/AGENT_PRECAUTIONS.md` (rules for agents)
- `TRAIL.md` and `word_connections.md`
- `wiki/_index.md` and relevant `wiki/` pages
- `CLAUDE.md` (tooling conventions — Bun, etc.)

After reading, form your own opinion on what a good TUI implementation of this app should look like (features preserved, learning philosophy preserved, usability in a terminal, tech choices consistent with the repo's conventions).

## Step 3 — Compare all three models' work
For EACH model, examine:
- Their thinking/reasoning process (what they understood, what decisions they made)
- The code they wrote (correctness, completeness, structure, idiomaticity, whether it runs, whether it preserves the app's philosophy/features)
- Whether they respected the constraints (only touched the TUI directory, no commits)

Compare all three together head-to-head and pick ONE winner.

## Step 4 — Act on the verdict
- Tell me which AI is better and WHY (specific reasoning tied to the docs and the code).
- Commit the winning model's code (git commit, with a message crediting the winning model).
- Delete the losing models' code.
- Do NOT delete or modify anything in `german-app-thinking-method` itself.
