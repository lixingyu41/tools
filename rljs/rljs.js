function convertCalorie() {
    let value = parseFloat(document.getElementById("input_value").value);
    let unit = document.getElementById("input_unit").value;

    if (isNaN(value)) {
        alert("请输入正确的数字！");
        return;
    }

    let kcal, cal, kj;

    switch (unit) {
        case "kcal":
            kcal = value;
            cal = value * 1000;
            kj = value * 4.184;
            break;
        case "cal":
            kcal = value / 1000;
            cal = value;
            kj = value * 0.004184;
            break;
        case "kj":
            kcal = value / 4.184;
            cal = value / 0.004184;
            kj = value;
            break;
    }

    document.getElementById("out_kcal").innerText = kcal.toFixed(3);
    document.getElementById("out_cal").innerText = cal.toFixed(3);
    document.getElementById("out_kj").innerText = kj.toFixed(3);
}
