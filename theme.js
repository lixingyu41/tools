function themejs(){
    theme_get();
    theme_change();
}
function theme_get(){
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        theme_rec = 0;
        console.log("themeget dark");
    }
    else{
        theme_rec = 1;
        console.log("themeget day");
    }
}
function theme_change(){
    if(theme_rec==1){
        console.log("day mode");
        theme.style.backgroundColor= '#f2f2f2';
        theme.style.color = '#2f2f2f';
    }
    else if(theme_rec==0){
        console.log("night mode");
        theme.style.backgroundColor= '#2f2f2f';
        theme.style.color = '#f2f2f2';
    }
    else{
        console.log("theme rec error");
    }
}