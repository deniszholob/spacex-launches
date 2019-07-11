#!/bin/bash
# Website build script
# @author Denis Zholob (deniszholob.com)
#
# Run npm build
# ====================================== #

echo 'Build Script Started ...'
echo 'Running npm build script ...'
npm run build
ls -al "public"
echo 'Build script finished...'
