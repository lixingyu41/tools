var _hideTip;
    var M = {
        /**
         * 获取BMI值
         * @param  {Number} height 身高/厘米
         * @param  {Number} weight 体重/千克
         * @return {Number} BMI值
         */
        getBMI: function getBMI(height, weight) {
            var height = height / 100;
            return (weight / (height * height)).toFixed(1);
        },
        /**
         * 获取标准体重
         * @param  {Number} height 身高/米
         * @param  {Number} 性别 {男：1, 女：2}
         * @return {Number} 标准体重值
         */
        getWeight: function getWeight(height, sex) {
            var res;
            if (sex == 1) {
                res = (height - 80) * 0.7;
            } else if (sex == 2) {
                res = (height - 70) * 0.6;
            }
            return res.toFixed(1);
        },
        /**
         * 获取基础代谢率
         * @param  {Number} height 身高/米
         * @param  {Number} weight 体重/千克
         * @param  {Number} 性别 {男：1, 女：2}
         * @param  {Number} age 年龄/岁
         * @return {Number} 标准体重值
         */
        getBMR: function getBMR(height, weight, sex, age) {
            var res;
            if (sex == 1) {
                res = 66 + 13.7 * weight + 5 * height - 6.8 * age;
            } else if (sex == 2) {
                res = 655 + 9.6 * weight + 1.8 * height - 4.7 * age;
            }
            return res.toFixed(0);
        },
        /**
         * 获取运动心率
         * @param  {Number} age 年龄/岁
         * @return {Array} 运动心率范围
         */
        getRate: function getRate(age) {
            var rate = [];
            rate[0] = ((220 - age - 60) * 0.6 + 60).toFixed(1);
            rate[1] = ((220 - age - 60) * 0.8 + 60).toFixed(1);
            return rate;
        },
        /**
         * 获取健康体重范围
         * @return {Number} 健康体重
         */
        getWeightRate: function getWeightRate(weight) {
            var w_rate = [],
                pencent = 0.1;
            w_rate[0] = (weight * (1 - pencent)).toFixed(1);
            w_rate[1] = (weight * (1 + pencent)).toFixed(1);
            return w_rate;
        }
    };