#!/bin/bash
clear

help(){
    RED=`tput setaf 1`
    GREEN=`tput setaf 2`
    YELLOW=`tput setaf 3`
    WHITE=`tput setaf 7`
    echo "Help"
    echo "${GREEN}init:       ${YELLOW}Remove old data and configure environment. (Execute this will remove all existing drone and gogs data)"
    echo "${WHITE}"
}

install(){
  echo "*** Install"
  react-native bundle --dev false --platform android --entry-file index.android.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug
  cd android
  gradle uninstallAll
  gradle installDebug
  cd ../
}

run(){
  cd android
  gradle uninstallAll
  cd ../
  react-native run-android
}

menu(){
  adb shell input keyevent 82
}

# Execute the tasks
for TASK in "$@"
do
 $TASK
done

# If nothing, run default
if [ "$1" = "" ]; then
  help
fi
