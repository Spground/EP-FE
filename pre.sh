#!/bin/sh
echo "Checking if code meets lint rules."
npm run lint
echo "Running unit tests and coverage test."
npm run test -- --no-watch --no-progress --browsers=ChromeHeadlessCI --code-coverage
npm run build -- --prod --output-path ./dist/out
