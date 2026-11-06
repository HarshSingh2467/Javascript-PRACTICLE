#!/bin/sh
# Usage: ./run.sh <assignment> <question>   e.g. ./run.sh 2 1
A=$(printf "%02d" "$1"); Q=$(printf "%02d" "$2")
DIR="Assignment-$A/Question-$Q"
if [ -f "$DIR/Main.html" ]; then
  if command -v xdg-open >/dev/null 2>&1; then xdg-open "$DIR/Main.html"; else open "$DIR/Main.html"; fi
else
  (cd "$DIR" && node script.js)
fi
