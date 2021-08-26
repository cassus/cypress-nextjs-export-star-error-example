Example based on https://github.com/cypress-io/cypress/tree/develop/npm/react/examples/nextjs-webpack-5

```
yarn
yarn next dev
```

- there is no error at  http://localhost:3000/


```
$ yarn test
```

```
yarn test
yarn run v1.22.10
$ yarn cypress run-ct --config video=false
$ /Users/cassus/Dev/cypress-nextjs-export-star-error-example/node_modules/.bin/cypress run-ct --config video=false
info  - Using webpack 5. Reason: future.webpack5 option enabled https://nextjs.org/docs/messages/webpack5
ℹ ｢wds｣: Project is running at http://localhost:60824/webpack-dev-server/
ℹ ｢wds｣: webpack output is served from /__cypress/src
ℹ ｢wds｣: Content not from webpack is served from /Users/cassus/Dev/cypress-nextjs-export-star-error-example

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    8.3.0                                                                              │
  │ Browser:    Electron 91 (headless)                                                             │
  │ Specs:      1 found (Search.spec.jsx)                                                          │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  Search.spec.jsx                                                                 (1 of 1)

Dev-server compilation failed. We can not run tests if dev-server can not compile and emit assets, please make sure that all syntax errors resolved before running cypress. 

 Syntax error: Using `export * from '...'` in a page is disallowed. Please use `export { default } from '...'` instead.
Read more: https://nextjs.org/docs/messages/export-all-in-page
Error: Dev-server compilation failed. We can not run tests if dev-server can not compile and emit assets, please make sure that all syntax errors resolved before running cypress. 

 Syntax error: Using `export * from '...'` in a page is disallowed. Please use `export { default } from '...'` instead.
Read more: https://nextjs.org/docs/messages/export-all-in-page
    at EventEmitter.<anonymous> (/Users/cassus/Library/Caches/Cypress/8.3.0/Cypress.app/Contents/Resources/app/packages/server/lib/modes/run-ct.js:8:7)
    at EventEmitter.emit (events.js:327:22)
    at EventEmitter.<anonymous> (/Users/cassus/Library/Caches/Cypress/8.3.0/Cypress.app/Contents/Resources/app/packages/server/lib/plugins/dev-server.js:16:17)
    at EventEmitter.emit (events.js:315:20)
    at ChildProcess.<anonymous> (/Users/cassus/Library/Caches/Cypress/8.3.0/Cypress.app/Contents/Resources/app/packages/server/lib/plugins/util.js:19:22)
    at ChildProcess.emit (events.js:315:20)
    at emit (internal/child_process.js:903:12)
    at processTicksAndRejections (internal/process/task_queues.js:81:21)

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
