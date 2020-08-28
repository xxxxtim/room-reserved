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
                <input type="text" value="name" />
                <input type="text" value="tel" />
                <div class="date-range">
                    <input type="text" value="start" />
                    <span>~</span>
                    <input type="text" value="end" />
                </div>
            </div>
        </div>
        <div class="total-night">
            <div>
                <p>平日時段</p>
                <p>每日時段</p>
            </div>
            <div>
                <p>1夜</p>
                <p>1夜</p>
            </div>
        </div>
        <div class="total-cost">
            <span>=</span>
            <span>NT.2580</span>
        </div>
        <div class="button-container">
            <button class="cancle">取消</button>
            <button class="confirm">確定預約</button>
        </div>
    </form>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
form {
    width: 423px;
    height: 485px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
}

p {
    margin: 15px 0;
}

h1 {
    padding-left: 20px;
    font-size: 24px;
    text-align: left;
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
</style>
