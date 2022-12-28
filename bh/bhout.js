//数据拉取
user_weight_get=localStorage.getItem('ltool_user_weight');
user_tall_get=localStorage.getItem('ltool_user_tall')
user_date_get=localStorage.getItem('ltool_user_date')
user_gender_get=localStorage.getItem('ltool_user_gender')
//数据处理
today = new Date();
    now_year = today.getFullYear();
    now_month = today.getMonth() + 1 ;
    now_day = today.getDate();
    console.log(now_year);
    console.log(now_month);
    console.log(now_day);
userdate = new Date(user_date_get);
    user_year = userdate.getFullYear();
    user_month = userdate.getMonth() + 1 ;
    user_day = userdate.getDate();
    // console.log(user_year);
    // console.log(user_month);
    // console.log(user_day);
if(user_gender_get=="boy"){
    user_gender_num = 1;
}
else if(user_gender_get=="girl"){
    user_gender_num = 0;
}
//计算年龄
//周岁
function age_zhou(){
    if(now_month > user_month){
        user_age_zhou = now_year - user_year;
    }
    else if(now_month == user_month){
        if(now_day > user_day){
            user_age_zhou = now_year - user_year;
        }
    }
    else{
        user_age_zhou = now_year - user_year - 1;
    }
    console.log(user_age_zhou);
    document.getElementById("user_age_zhou").innerHTML = user_age_zhou;
}
//虚岁
function age_xu(){
    user_age_xu = now_year - user_year + 1;
    console.log(user_age_xu);
    document.getElementById("user_age_xu").innerHTML = user_age_xu;
}
//BMI
function bmi(){
    user_bmi = user_weight_get / ( ( user_tall_get / 100 ) * ( user_tall_get / 100 ) )
    console.log(user_bmi);
    document.getElementById("user_bmi").innerHTML = user_bmi;
    if(user_bmi<18.5){
        user_bmi_sug = ("体重过低");
    }
    else if(user_bmi>=18.5&&user_bmi<24){
        user_bmi_sug = ("正常范围");
    }
    else if(user_bmi>=24&&user_bmi<28){
        user_bmi_sug = ("肥胖前期");
    }
    else if(user_bmi>=28&&user_bmi<30){
        user_bmi_sug = ("I度肥胖");
    }
    else if(user_bmi>=30&&user_bmi<40){
        user_bmi_sug = ("II度肥胖");
    }
    else if(user_bmi>=40){
        user_bmi_sug = ("III度肥胖");
    }
    document.getElementById("user_bmi_sug").innerHTML = user_bmi_sug;
}
//饮水量
function water(){
    user_water = user_weight_get * 35;
    document.getElementById("user_water").innerHTML = user_water;
}
//体脂估算
function bodyfat(){
    user_bodyfat = (1.2 * user_bmi) + (0.23 * user_age_zhou) - 5.4 - (10.8 * user_gender_num);
    document.getElementById("user_bodyfat").innerHTML = user_bodyfat;
}
//心率区间
function heartrate(){
    user_heartrate_fast = 205.8 - (0.685 * user_age_zhou );
    document.getElementById("user_heartrate_fast").innerHTML = user_heartrate_fast;
}
//代谢
function bmr(){
    if(user_gender_num){
        user_bmr = 66 + (13.7 * user_weight_get) + (5 * user_tall_get) - (6.8 * user_age_zhou);
    }
    else if(!user_gender_num){
        user_bmr = 655 + (9.6 * user_weight_get) + (1.8 * user_tall_get) - (4.7 * user_age_zhou);
    }
    document.getElementById("user_bmr").innerHTML = user_bmr;
}
//卡路里
function cal(){
    user_cal = user_weight_get * 33;
    document.getElementById("user_cal").innerHTML = user_cal;
}