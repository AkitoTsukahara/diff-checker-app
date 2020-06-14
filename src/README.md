# diff-screens
before,afterで画像の差分を比較してくれます

# 始め方
（node.jsがインストールされていて、npmが利用できる前提になっています。）

## 1.このツールをクローンまたはダウンロードしてください

## 2.diff-screensディレクトリで下記のコマンドを入力してください
```
$ npm install
```

## 3.before,afterディレクトリに比較したい画像を同名、同数で格納してください

## 4.以下のコマンドを実行してください
```
$ node diff-screen.js
```
実行に成功している場合、resultディレクトリに差分の検証結果が保存されます。
差分があった場合は、コンソールで対象の画像名が表示されます。


## 想定される利用シーン
スタイルシートなど環境のアップデート前後でレイアウトの崩れを検出する


### 比較する画像は`screen-collection`で集めると簡単にできます
https://github.com/AkitoTsukahara/screen-collection
