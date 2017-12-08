var express = require('express');
var bodyParser = require('body-parser');
var https = require( 'http' );
var ngrok = require('ngrok');

//Twitterの設定
var Twitter = require('twitter');
var client = new Twitter({
    consumer_key: 'YOUR_TWITTER_KEY',
    consumer_secret: 'YOUR_TWITTER_SECRET',
    access_token_key: 'YOUR_TWITTER_TOKEN_KEY',
    access_token_secret: 'YOUR_TWITTER_TOKEN_SECRET'
});

//GoogleHomeの設定
var googlehome = require('google-home-notifier');
const language = 'ja';
googlehome.device('Google-Home', language);

var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });


//ここでもらう
app.post('/', urlencodedParser, function(req, res){
    if (!req.body) return res.sendStatus(400);
    console.log(req.body);
    /**
     * トレンドの取得からHomeへ投げる
     */
    if(req.body.text == "twittertrend"){

        var speek_text = "この時間のトレンドは、";
        var trend_array = [];
        var params = {id:23424856};//日本のトレンドを取得 その他:https://qiita.com/amidara/items/8e3224c4960e19b7a33a
        client.get('trends/place', params, function(error, trends, response) {
            if (!error) {
                var obj_trend = trends[0]['trends'];
                obj_trend.forEach(function(obj){
                    var trend = obj['name'];
                    trend = trend.replace (/#/g, ""); //シャープを消す

                    trend_array.push(trend); //配列に追加
                });
            }

            //お話する文字列を作る //トレンドが多いため、10こで終わらせる
            if(trend_array.length >= 10){
                for (i = 0; i < 10; i++) speek_text += trend_array[i] + "、";
            }else{
                for (i = 0; i < trend_array.length; i++) speek_text += trend_array[i] + "、";
            }
            speek_text += "です" ;
            console.log(speek_text);

            //お話させる
            googlehome.notify(speek_text, function(res) {
                console.log(res);
              });
        });
        res.send('speek twitter trend now..'+ '\n');
    }
});

app.get('/', function(req, res){
    res.send("please post");
});


var server = app.listen(8081, function(){
        ngrok.connect(8081, function (err, url) {
        if(!err){
            console.log("Start Server");
            console.log('curl -X POST -d "text=Hello Google Home" ' + url );
        }else{
            console.log(err);
        }
    });
});