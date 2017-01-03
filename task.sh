#!/bin/bash

COMMAND=$1

case $COMMAND in
    copy:vendor )
        DEST="web/scripts/vendor"
        mkdir -p $DEST

        cp node_modules/requirejs/require.js $DEST
        cp node_modules/CreateJS/builds/createjs-2015.11.26.combined.js $DEST
        cp dist/canvas-umd.js $DEST
    ;;
esac