function formatTime(secounds) {
    if (secounds < 60) {
        return secounds + ' sek.';
    } else if (secounds < 3600) {
        var minutes = Math.floor(secounds / 60);
        var sec = secounds % 60;
        return minutes + ' min.' + sec + ' sek.'
    } else(secounds > 3600)
    var hour = Math.floor(secounds / 3600);
    return hour + ' hours ' + minutes + ' min. ' + sec + ' sek.'


}
exports.formatTime = formatTime;