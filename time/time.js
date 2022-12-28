window.onload = function(){
    themejs();
    timeget();
}
function timeget(){
    var today = new Date();
    today_year = today.getFullYear();
    today_month = today.getMonth() + 1 ;
    today_day = today.getDate();
    today_hour = today.getHours();
    today_min = today.getMinutes();
    today_sec = today.getSeconds();
    if (today_hour == 0) {
        hours = "00:";
        } else if (today_hour < 10) {
        hours = "0" + today_hour+":";
        } else {
        hours = today_hour + ":";
        }
        if (today_min < 10) {
        minutes = "0"+today_min+":";
        } else {
        minutes = today_min+":";
        }
        if (today_sec < 10) {
            seconds = "0" + today_sec;
        } else {
            seconds = today_sec;
        }
    hms = hours+minutes+seconds;
    // console.log(hms);
    document.getElementById("time").innerHTML = hms;
    window.setTimeout("timeget();", 1000);
}
function buttonget(){
    // console.log("button get");
    // console.log(theme_rec);
    if(theme_rec == 1){
        theme_rec = 0;
    }
    else if(theme_rec == 0){
        theme_rec =1;
    }
    else{
        theme_rec = 0;
        console.log("theme_rec have no value");
    }
}