#!/bin/bash

export LANG=en_US.UTF-8
export LANGUAGE=en_US.UTF-8
export LC_ALL=en_US.UTF-8
rm -rf _site/
npm install
bundle exec jekyll serve  --incremental --drafts --config=_config.yml,_config_dev.yml