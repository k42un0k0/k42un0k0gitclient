# k42un0k0gitclient

## やりたいこと

- electron
- github graph api
- relay

## メモ

- electron-builder
  - はpackage.jsonのmainを見てるっぽい
- electron-forge, electron-packager
  - はなんかあほほど時間かかる
- tsconfig.jsonはディレクトリごとに作れる
  - reactのほうはルートを見るので変えられない
- preloadを使えばreactのほうからいろいろできる

## spectron

- C:\Users\k42un\Documents\workspace\projects\K42un0k0GitClient\node_modules\spectron\lib\chrome-driver.js
  - の中で`got`を使っているがjsonが取れてないので`axios`に変えた
- electron-chromedriver
  - の中でなぜかchromedriverがダウンロードできてないので、コマンドを変える
- capability
  - webdriverを起動してもcapavilityがどうとか言われる
  - electron-chromedriverが必要なのかも？

## Contribute

### Run Debug Mode

Run `yarn dev` command.

and run `Debug Main Process` in VSCode's Debug Panel.

Then, react-script and electron will start, and you can see inspect in vscode.

## npm scripts

- `dev`
  - デバッグ用のコマンド、[デバッグモードでの起動](#Run-Debug-Mode)を参照。
- `start`
  - とりあえず動かす

後は察してください
