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
    //填完就执行数据存储
    if(data_check){
        datasave();
    }
    location.reload ();
}
//数据读取
function dataget(){
    //性别
    user_gender_get=document.getElementById("user_gender").value;
    console.log(user_gender_get);
    //生日
    user_date_get=document.getElementById("user_date").value;
    console.log(user_date_get);
    //身高
    user_tall_get=document.getElementById("user_tall").value;
    console.log(user_tall_get);
    //体重
    user_weight_get=document.getElementById("user_weight").value;
    console.log(user_weight_get);
}
//数据存储
function datasave(){
    localStorage.setItem('ltool_user_gender',user_gender_get);
    localStorage.setItem('ltool_user_date',user_date_get);
    localStorage.setItem('ltool_user_tall',user_tall_get);
    localStorage.setItem('ltool_user_weight',user_weight_get);
    localStorage.setItem('ltool_user_check',1);
}
//全量检查是否填写完整
function blank_check(){
    if(user_gender_get==''||user_date_get==''||user_tall_get==''||user_weight_get==''){
        alert('信息填写不完整');
        data_check=0;
    }
    else{
        data_check=1;
    }
}
//加载网页是读取本地储存，如有则赋给表格默认值
function when_load(){
    data_check=localStorage.getItem('ltool_user_check');
    if(data_check){
        document.getElementById("user_weight").value=localStorage.getItem('ltool_user_weight');
        document.getElementById("user_tall").value=localStorage.getItem('ltool_user_tall')
        document.getElementById("user_date").value=localStorage.getItem('ltool_user_date')
        document.getElementById("user_gender").value=localStorage.getItem('ltool_user_gender')
    }
    age_zhou();
    age_xu();
    bmi();
    water();
    bodyfat();
    heartrate();
    bmr();
    cal();
}