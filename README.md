# Alpha app

## What is it?

Part of my master's degree final project, the objective is to create a PoC of data exfiltration using a smart tv and a IoT camera. 

This app is the one that should be installed in the smart tv, it is responsible for encoding a message and print it in an image. The idea is to make the message non visible to the human eye (Or at least hard to catch).

## How to launch the dev environment

In order to launch the environment you need Yarn, React Native and a virtual machine or android device connected to the computer. First install the application with:
```bash
yarn android
```

Make sure to have this running in order for the app to start properly:
```
yarn start
```

## About generating an APK

Follow the react native documentation in order to generate a debug or release APK, since this is a PoC I don't really think this is something I will need.
