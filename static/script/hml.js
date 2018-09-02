/*
 * @Author:wlf(at)zhishan-iot.tk
 */


/*
 * @Description:share to Google+
 */
function shareToGooglePlus() {
    var _url = encodeURIComponent(window.location.href);
    window.open("https://plus.google.com/share?"+"url="+_url);
}

/*
 * @Description:share to Facebook
 */
function shareToFacebook() {
    var _url = encodeURIComponent(window.location.href)
    window.open("https://www.facebook.com/sharer/sharer.php?u="+_url+"&amp;src=sdkpreparse");
}

/*
 * @Description:share to QQ
 */
function shareToQq() {
    var _host = document.location.host;
    var _summary = encodeURIComponent("HML is an open-source project that provides various lite and easy-use firmware libraries & BSPs for some widely used MCUs, such as the 8051 series and the STC89 series, or their development boards.");
    var _title = document.title.toString();
    var _pic = encodeURI("http://"+ _host +"/image/0007.jpg");
    var _url = document.location.toString();

    /* generate share URL to Qq */
    var sharUrl = "http://connect.qq.com/widget/shareqq/index.html?"+"pics="+_pic +"&summary="+_summary+ "&title="+_title+ "&url="+_url;
    window.open(sharUrl);
}

/*
 * @Description:share to Facebook
 */
function shareToTwitter() {
    var _url = document.location.toString();
    /* generate share URL to Twitter */
    var sharUrl = "https://twitter.com/intent/tweet?"+"url="+_url;
    window.open(sharUrl);
}

