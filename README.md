# GRDI (Graphical ROS Development Interface)

This project currently is under HEAVY development,

Uses baklava.js to create a "flow-programming" environment for designing ROS systems

## CURRENT GOAL

Goal is to make a design interface for robots using ROS, allowing users to quickly mock up the workflow and processes required to have thair robot work.

## Run the DEMO

thanks to the simplicity of web development, the application can be run with the following commands

### Prerequisites

    nodejs v16
    yarn

#### Using Ubuntu

below is the install commands to get node v16

```bash
curl -fsSL <https://deb.nodesource.com/setup_16.x> | sudo -E bash -
sudo apt-get install -y nodejs
```

### Install

```bash
#Clone the Repo
git clone https://github.com/BiggiePete/GRDI.git

# Change DIR
cd ./GRDI/

#Install and Run
yarn install
#read WARNING below
yarn dev
```

A window will appear, and the application will be running!

## Build from Source

follow the install and run instructions from above, but instead of

```bash
yarn dev
```

use

```bash
yarn Build
```

The final built app will be in the /build directory where you can use the setup to install as an application
