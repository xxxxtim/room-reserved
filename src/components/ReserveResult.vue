<template>
<div v-if="isShowResult" class="resultContainer">
    <!-- 預約成功 -->
    <div>
        <h1>預約成功</h1>
        <div class="tickContainer">
            <font-awesome-icon icon="check-circle" class="tick" />
        </div>
        <div class="btnContainer">
            <button @click="toHome">回頁面</button>
        </div>
    </div>
    <!-- 預約失敗 -->
    <!-- <div>
        <h1>預約失敗</h1>
        <p>預約時間以被人預定</p>
        <div class="btnContainer">
            <button @click.prevent="reload">返回</button>
        </div>
    </div>-->
</div>
</template>

<script>
export default {
    data() {
        return {
            cancleStatus: false,
            isShowResult: true
        };
    },
    methods: {
        // emit2singleRoom() {
        //     this.cancleStatus = !this.cancleStatus;
        //     this.$emit("cancleStatus", this.cancleStatus);
        // }
        reload() {
            this.isShowResult = !this.isShowResult;
            this.$router.go(0);
        },
        toHome() {
            this.isShowResult = !this.isShowResult;
            this.$router.push({
                name: "Home"
            });
        }
    }
};
</script>

<style lang="scss" scoped>
h1 {
    font-family: NotoSansCJKtc-Medium;
    font-size: 24px;
    color: #000000;
    letter-spacing: 2.51px;
    text-align: left;
}

p {
    text-align: left;
}

.resultContainer {
    background: #ffffff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    width: 423px;
    height: 248px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: absolute;
    padding: 0px 43px;
    bottom: 45%;
    left: 40%;
}

// .tick {
//     color: #ade8c6;
//     font-size: 60px;

// }
.tickContainer {
    color: #ade8c6;
    font-size: 60px;
    text-align: center;
}

button {
    background: #484848;
    font-family: NotoSansCJKtc-Medium;
    font-size: 14px;
    color: #ffffff;
    letter-spacing: 1.46px;
    width: 85px;
    height: 37px;
    border: none;
}

.btnContainer {
    text-align: right;
}
</style>
