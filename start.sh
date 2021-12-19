#!/bin/bash

export LANG=en_US.UTF-8
export LANGUAGE=en_US.UTF-8
export LC_ALL=en_US.UTF-8
npm install
bundle exec jekyll serve --watch --livereload --incremental --drafts --config=_config.yml,_config_dev.yml