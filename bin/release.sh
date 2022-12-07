#!/usr/bin/env bash

set -e -o pipefail

echo -e "\033[0;33m You are about to release the latest from master, do you wish to continue? (Y/N) \033[0m"
# shellcheck disable=SC2162
read answer

if [ "$answer" != "${answer#[Yy]}" ] ;then
    echo -e "\033[0;32m Woot woot! Let's get releasing! \033[0m"

    echo -e "\033[0;33m Checking out latest master \033[0m"
    git checkout main
    git pull origin main

    curr_tag=$(git describe --abbrev=0 --tags)

    echo -e "\033[0;33m The latest tag was: $curr_tag \033[0m"

    only_num=$(echo "$curr_tag" | cut -d "v" -f 2)

    next_tag="v$((only_num + 1))"

    echo -e "\033[0;33m The next tag will be: $next_tag \033[0m"

    echo -e "\033[0;33m Creating release for latest commit \033[0m"

    gh release create $next_tag --generate-notes --latest

    echo -e "\033[0;32m Successfully created new release! Have a great day! \033[0m"
else
    echo -e "\033[0;32m Exiting ... Have a great day! \033[0m"
fi