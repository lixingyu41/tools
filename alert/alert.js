window.onload = function(){
    themejs();
    timeget();
    display();
    dataload();
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
    display();
    window.setTimeout("timeget();", 1000);
}
function display(){
    document.getElementById("time").innerHTML = hms;
}
function dataget(){
    time_set_get=document.getElementById("time_get").value;
    console.log(time_set_get);
    localStorage.setItem('ltool_timeset',time_set_get);
}
function dataload(){
    if(localStorage.getItem('ltool_timeset')){
        document.getElementById("time_get").value=localStorage.getItem('ltool_timeset');
    }
}