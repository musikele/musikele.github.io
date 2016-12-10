#!/bin/bash

echo "start compiling..."

SOURCE_BRANCH="develop"

git clone $REPO compile
cd compile 
git checkout $SOURCE_BRANCH || git checkout --orphan $SOURCE_BRANCH

bundle install
bundle exec jekyll build

cp -r ./_site/ out/

echo "finished compiling!"