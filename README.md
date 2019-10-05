# express-quick-start

Project template for starting a NodeJs server side application with NodeMon, ES6 modules (with babel), ESLint/Prettier and Docker.

## Initial setup

``` shell
cp .env.example .env #(optional) change the port number if needed
yarn
```

## Run Development server

``` shell
yarn run dev
```

## Run Production server

``` Shell
yarn start
```

## Run in Docker

``` Shell
yarn docker:start
```

Open <http://locahost:8080> on your browser.

## VS Code Editor Setup

- This repo is setup to work with VS Code Remote development plugin for [containers]. If you have [Remote Development plugin] setup in VS code you can open and work on the project inside the docker container.
- Install the [ESLint plugin]

[containers]: https://code.visualstudio.com/docs/remote/containers
[Remote Development plugin]: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack
[ESLint plugin]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

## Pushing without history

When you're ready to push, first set a new remote

``` shell
git remote set-url <new-origin>`
```

Checkout branch with no history, then commit and push

``` shell
git checkout --orphan <new-branch>
git commit -a -m 'Initial Commit'
git push <new-branch>:master
```
