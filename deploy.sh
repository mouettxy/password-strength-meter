#!/usr/bin/env sh

set -e
yarn build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:newfox79/password-strength-meter.git master:gh-pages

cd -