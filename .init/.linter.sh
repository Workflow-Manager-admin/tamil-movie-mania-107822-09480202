#!/bin/bash
cd /home/kavia/workspace/code-generation/tamil-movie-mania-107822-09480202/game_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

