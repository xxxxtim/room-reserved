<template>
<div>
    <form>
        <h1>預約時段</h1>
        <div class="form-container">
            <div>
                <p>姓名</p>
                <p>電話</p>
                <p>預約起訖</p>
            </div>
            <div class="input-container">
                <input v-model="inputTable.name" type="text" placeholder="中/英文名" required />
                <input v-model="inputTable.tel" type="tel" placeholder="09xx" required pattern="^09\d{8}$" title="請輸入手機號碼(10位數)" />
                <div class="date-range">
                    <Datepicker @input="countPrice" v-model.lazy="startDate" name="startDate" format="yyyy-MM-dd" placeholder="入住日期" :highlighted="highlight" :disabled-dates="disabledDates" />
                    <!-- {{startDate}} -->
                    <span>~</span>
                    <Datepicker @input="countPrice" v-model.lazy="endDate" name="endDate" format="yyyy-MM-dd" placeholder="退房日期" :highlighted="highlight" :disabled-dates="disabledDates" />
                    <!-- {{endDate}} -->
                </div>
            </div>
        </div>
        <div class="total-night">
            <div>
                <p>平日時段</p>
                <p>假日時段</p>
            </div>
            <div>
                <p>{{inputTable.normalDays}}夜</p>
                <p>{{inputTable.weekDays}}夜</p>
            </div>
        </div>
        <div class="total-cost">
            <span>=</span>
            <!-- <span>NT.2580</span> -->
            <span>NT.{{inputTable.totalPrice}}</span>
        </div>
        <div class="button-container">
            <button @click="reload" class="cancle">取消</button>
            <button @click.prevent="postTable" class="confirm">確定預約</button>
        </div>
    </form>
</div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import store from "@/store";
export default {
    components: {
        Datepicker
    },
    props: {
        roomId: {
            type: String,
            required: true
        },
        commentIds: {
            type: Array,
            required: true
        },
        normalDayPrice: {
            type: Number,
            required: true
        },
        holidayPrice: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            inputTable: {
                name: "",
                tel: "",
                totalPrice: 0,
                normalDays: 0,
                weekDays: 0
            },
            startDate: "",
            endDate: "",
            dateFormat: "yyyy-MM-dd",
            booking: [],

            highlight: {
                dates: [],
                includeDisabled: true // Highlight disabled dates
            },
            disabledDates: {
                dates: []
            }
        };
    },
    created() {
        this.commentIds.map((item, index) => {
            this.highlight.dates.push(new Date(item.date));
            this.disabledDates.dates.push(new Date(item.date));
        });
    },

    computed: {},

    methods: {
        countPrice() {
            // getDate()=>轉換成幾號
            // getDay()=>轉壞成星期幾
            this.booking.length = 0;
            let countOfNormalDay = 0;
            let countOfHoliday = 0;
            let totalCost = 0;
            let from = new Date(this.startDate);

            let to = new Date(this.endDate);
            while (from < to) {
                let day = from.getDay();
                if (day === 5 || day === 6 || day === 0) {
                    countOfHoliday += 1;
                } else {
                    countOfNormalDay += 1;
                }
                from.setDate(from.getDate() + 1);

                // push reservedDate to booking array
                // step1 轉換時間格式
                // step2 push booking
                this.booking.push(this.formatDate(from));
            } //while
            totalCost =
                countOfNormalDay * this.normalDayPrice +
                countOfHoliday * this.holidayPrice;

            console.log(typeof this.startDate);
            console.log(this.endDate, to);
            console.table(this.booking);
            console.log(`平日=>${countOfNormalDay}晚`);
            console.log(`假日=>${countOfHoliday}晚`);
            console.log(`總價格=>${totalCost}`);

            this.inputTable.normalDays = countOfNormalDay;
            this.inputTable.weekDays = countOfHoliday;
            this.inputTable.totalPrice = totalCost;
            // }
        },

        formatDate(from) {
            let y = from.getFullYear();
            let m = from.getMonth() + 1;
            let d = from.getDate() - 1;
            m = m < 10 ? "0" + m : m;
            d = d < 10 ? "0" + d : d;
            console.log(y + "-" + m + "-" + d);
            return y + "-" + m + "-" + d;
        },
        postTable() {
            store.dispatch("postBooking", {
                roomId: this.roomId,
                name: this.inputTable.name,
                tel: this.inputTable.tel,
                booking: this.booking
            });
        },
        reload() {
            this.$router.go(0);
        }
    }
};
</script>

<style lang="scss" scoped>
form {
    width: 423px;
    height: 485px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    background: white;
    position: absolute;
    z-index: 2;
    top: 40%;
    left: 50%;
}

p {
    margin: 15px 0;
}

h1 {
    padding-left: 20px;
    font-size: 24px;
    text-align: left;
}

input {
    border: 1px solid #c9c9c9;
    border-radius: 5px;
}

.name {
    width: 243px;
    height: 32px;
}

.form-container {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    text-align: left;
}

.input-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    /* margin-left: 30px */
}

.date-range {
    display: flex;
    /* justify-content: center */
    align-items: center;
}

div.date-range input {
    width: 91px;

    /* height: 32px; */
}

div.date-range span {
    padding: 0 10px;
}

.total-night {
    background: #ededed;
    color: #6d7278;
}

.total-night {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
}

.total-cost {
    text-align: right;
    padding-right: 20px;
    font-size: 26px;
    color: #ff5c5c;
}

.button-container {
    display: flex;
    justify-content: space-between;
    padding: 30px 20px;
}

.cancle {
    width: 78px;
    height: 37px;
    color: #6d7278;
    background: #ededed;
    border: none;
}

.confirm {
    width: 107px;
    height: 37px;
    background: #484848;
    border: none;
    color: white;
}

::v-deep div.vdp-datepicker input {
    width: 95px;
    border: 1px solid #c9c9c9;
    border-radius: 5px;
}
</style>
