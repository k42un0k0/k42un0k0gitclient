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
