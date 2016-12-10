#!/bin/bash

SOURCE_BRANCH="develop"

git clone $REPO compile
cd compile 
git checkout $SOURCE_BRANCH || git checkout --orphan $SOURCE_BRANCH

bundle install
bundle exec jekyll build

cp ./_site/* ../out/*