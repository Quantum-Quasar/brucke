#!/usr/bin/env bash
set -euo pipefail

# Environment setup -- runs at the start of every iteration
# ---------------------------------------------------------
#
# Must be idempotent. Update this script instead of installing
# packages inline, so the environment stays reproducible across
# iterations. The loop activates the repo venv automatically.

# The worktree has no node_modules; dependencies are needed for the test
# suite and for any runtime check of documented behaviour.
bun install --frozen-lockfile
