<template>
<div>
    <!-- <p>{{commentIds}}</p> -->
    <Datepicker :inline="true" :format="dateFormat" :highlighted="highlight" />
</div>
</template>

<script>
import Datepicker from "vuejs-datepicker";

export default {
    components: {
        Datepicker
    },
    props: {
        commentIds: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            dateFormat: "yyyy-MM-dd",

            highlight: {
                // to: new Date(2016, 0, 5), // Highlight all dates up to specific date
                // from: new Date(2016, 0, 26), // Highlight all dates after specific date
                // days: [6, 0], // Highlight Saturday's and Sunday's
                // daysOfMonth: [15, 20, 31], // Highlight 15th, 20th and 31st of each month
                dates: [
                    // 指定日期 顯示已預約 (2020,10,16)=>表示為2020年 11/16
                    // new Date(2020, 10, 16),
                    // new Date(2020, 10, 17),
                    // new Date(2020, 10, 18)
                ],
                // 只要日期是4的倍數 就返白
                // customPredictor: function (date) {
                //     // highlights the date if it is a multiple of 4
                //     if (date.getDate() % 4 == 0) {
                //         return true;
                //     }
                // },
                includeDisabled: true // Highlight disabled dates
            }
        };
    },
    created() {
        // console.log(this.commentIds);
        // this.commentIds.map((item, index) => console.log(typeof item.date));
        // 預約日期10/16 10/17 10/18
        this.commentIds.map((item, index) =>
            this.highlight.dates.push(new Date(item.date))
        );

        console.table(this.highlight.dates);
    }
};
</script>

<style lang="scss" scoped>
</style>
