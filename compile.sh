#!/bin/bash

echo "start compiling..."

echo "Server date: $(date)" 

SOURCE_BRANCH="develop"
REPO=https://github.com/musikele/musikele.github.io.git

git clone $REPO compile
cd compile 
git checkout $SOURCE_BRANCH || git checkout --orphan $SOURCE_BRANCH

bundle install
bundle exec jekyll build
cd _site/
cp -r ./* ../../out/
cd ..
echo "finished compiling!"