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

```bash
curl -fsSL <https://deb.nodesource.com/setup_16.x> | sudo -E bash -
sudo apt-get install -y nodejs
```

### INSTALL

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

### WARNING

once you finish installing, yarn install would have removed a edit to baklavajs! if you are using vscode, simply undo this change, otherwise check this file

node_modules/@baklavajs/core/dist/baklavajs-core/src/node.d.ts

and make sure there is the following code : 

```js
/** Type of the node */
abstract type: string;
/** Customizable display name of the node. */
abstract name: string;
/** Customizable group name of the node. */
abstract group: string; // <--- this is the part that gets removed
```

Once the server is Running, go into your browser and go to localhost:3000
