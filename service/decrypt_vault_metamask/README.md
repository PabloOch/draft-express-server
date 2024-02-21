# Vault Decryptor

A web UI for decrypting MetaMask local storage.

[Visit live page here](https://metamask.github.io/vault-decryptor/)

## Pre-requisites:

To run the vault decryptor locally, ensure both Beefy and Browserify are installed:

`npm install -g browserify`

`npm install -g beefy`

## To run:

`yarn start`

## To build:

`yarn build`

Then just include `bundle.js` in an HTML file.

# The core of this project is following code
`const passworder = require('@metamask/browser-passworder')`
`passworder.decrypt(password, JSON.stringify(vault))`
