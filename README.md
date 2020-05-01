# Zero to hero in Webpack

### Dependencies:

```javascript
// package.json
   "devDependencies": {
        "@babel/cli": "^7.8.4",
        "@babel/core": "^7.5.5",
        "@babel/node": "^7.8.7",
        "@babel/preset-env": "^7.5.5",
        "babel-loader": "^8.0.6",
        "clean-webpack-plugin": "^3.0.0",
        "compression-webpack-plugin": "^3.1.0",
        "css-loader": "^3.1.0",
        "file-loader": "^4.1.0",
        "fork-ts-checker-webpack-plugin": "^1.5.0",
        "html-loader": "^0.5.5",
        "html-webpack-plugin": "^3.2.0",
        "http-server": "^0.11.1",
        "mini-css-extract-plugin": "^0.8.0",
        "postcss-loader": "^3.0.0",
        "prettier": "^2.0.5",
        "style-loader": "^0.23.1",
        "ts-loader": "^6.0.4",
        "typescript": "^3.5.3",
        "url-loader": "^2.1.0",
        "webpack": "^4.39.1",
        "webpack-bundle-analyzer": "^3.4.1",
        "webpack-cli": "^3.3.6",
        "webpack-dev-server": "^3.10.3",
        "webpack-merge": "^4.2.2",
        "webpack-node-externals": "^1.7.2",
        "workbox-webpack-plugin": "^4.3.1"
  }
```

### Commands:

```javascript
    // package.json
    {
        "webpack-dev-server": "webpack-dev-server",
        "webpack": "webpack",
        "debug": "node --inspect --inspect-brk ./node_modules/webpack/bin/webpack.js",
        "prod": "npm run webpack -- --env.mode production",
        "prod:babel": "npm run prod -- --env.presets babel",
        "prod:analyze": "npm run prod -- --env.presets analyze",
        "prod:compress": "npm run prod -- --env.presets compress",
        "dev": "npm run webpack-dev-server -- --env.mode development --open",
        "prod:debug": "npm run debug -- --env.mode production",
        "dev:debug": "npm run debug -- --env.mode development"
    }
```
