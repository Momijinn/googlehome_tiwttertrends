googlehome_twittertreand
====
googlehomeにTwitterのトレンドを喋らせるプログラム

## Description
GoogleHomeとiftttとRaspberryPiを利用して"ねぇGoogle Twitterのトレンド"と話しかけると現在時間におけるTwitterのトレンドを読み上げるプログラム

## Demo
[![](https://img.youtube.com/vi/zNowTRtQ-tI/0.jpg)](https://www.youtube.com/watch?v=zNowTRtQ-tI)

## Requirement
* RaspberryPi
* Node.js

    * -必要なモジュール-
    * node-express
    * body-parser
    * ngrok
    * google-home-notifier
    * Twitter

* ifttt
* GoogleHome
* Twitter API

## Usage
![image](https://i0.wp.com/www.autumn-color.com/wp-content/uploads/2017/12/flowgooglehme.png?zoom=1.399999976158142&resize=680%2C323)


## Install
1. TwitterのAPIを取得後TOKENなどを追加
```javascript
var client = new Twitter({
    consumer_key: 'YOUR_TWITTER_KEY',
    consumer_secret: 'YOUR_TWITTER_SECRET',
    access_token_key: 'YOUR_TWITTER_TOKEN_KEY',
    access_token_secret: 'YOUR_TWITTER_TOKEN_SECRET'
});
```

2. 必要なNodeモジュールのインストール

3. iftttでGoogleHomeとRaspberryPiを結びつける

詳細は下記のURL参照

[URL](https://www.autumn-color.com/?p=1260)

## Licence
This software is released under the MIT License, see LICENSE.

[![mark.png](https://github.com/k-tamura/cocha-icons/raw/master/mark.png)](https://github.com/k-tamura/cocha-icons)

## Author
[Twitter](https://twitter.com/momijinn_aka)

[Blog](http://www.autumn-color.com/)