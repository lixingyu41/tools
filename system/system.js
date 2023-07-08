window.onload=function(){
    when_load();
    lxy_theme_js();
}
// 信息获取
function buttonget(){
    //读取填写信息
    dataget();
    //检查填完没
    blank_check();
}
//数据读取
function dataget(){
    //原进制
    user_system_get=document.getElementById("user_system").value;
    //原数据
    user_data_get=document.getElementById("user_data").value;
}
//全量检查是否填写完整
function blank_check(){
    if(user_system_get==''||user_data_get==''){
        alert('信息填写不完整');
    }
    else{
        localStorage.setItem('ltool_system_get',user_system_get);
        localStorage.setItem('ltool_data_get',user_data_get);
        location.reload ();
    }
}
//加载网页是读取本地储存，如有则赋给表格默认值
function when_load(){
    data_out = localStorage.getItem('ltool_data_get');
    system_out = localStorage.getItem('ltool_system_get');
    if(data_out==''||system_out==''){
        console.log("没有填过的记录");
    }
    else{
        document.getElementById("user_data").value=localStorage.getItem('ltool_data_get');
        document.getElementById("user_system").value=localStorage.getItem('ltool_system_get');
        calculate();
    }
}
function calculate(){
    console.log("begin calculate");
    var base2 = parseInt(data_out, system_out).toString(2);
    var base4 = parseInt(data_out, system_out).toString(4);
    var base8 = parseInt(data_out, system_out).toString(8);
    var base10 = parseInt(data_out, system_out).toString(10);
    var base16 = parseInt(data_out, system_out).toString(16);
    var base32 = parseInt(data_out, system_out).toString(32);
    // var base64 = parseInt(data_out, system_out).toString(64);
    document.getElementById("two_o").innerHTML = base2;
    document.getElementById("four_o").innerHTML = base4;
    document.getElementById("eight_o").innerHTML = base8;
    document.getElementById("ten_o").innerHTML = base10;
    document.getElementById("sisteen_o").innerHTML = base16;
    document.getElementById("tt_o").innerHTML = base32;
    // document.getElementById("sf_o").innerHTML = base64;
}