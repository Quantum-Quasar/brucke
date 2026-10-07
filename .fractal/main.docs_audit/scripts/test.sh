#!/usr/bin/env bash
set -euo pipefail

# Run the node's test suite; exit 0 on success, non-zero on failure
# -----------------------------------------------------------------

# The suite under src/tests/ is part of the source of truth: a documented
# behaviour is only "verified" when the test that covers it passes.
bun run test
