<template>
<div>
    <div class="shadowTop" />
    <div class="shadowLeft" />
    <div @click="toHomePage" class="brandContainer">
        <p>WhiteSpace</p>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        toHomePage() {
            console.log("apple");
            this.$router.push({
                name: "Home"
            });
        }
    }
};
</script>

<style lang="scss" scoped>
p {
    font-family: NotoSansCJKtc-Medium;
    font-size: 18px;
    color: #000000;
    letter-spacing: 1.88px;
    line-height: 44px;
}

.brandContainer {
    width: 150px;
    height: 45px;
    border: 1px solid #000000;
    position: absolute;
    top: 42px;
    left: 65px;
    z-index: 3;
    cursor: pointer;
}

.shadowTop {
    z-index: 3;
    width: 150px;
    height: 10px;
    position: absolute;
    z-index: 1;
    top: 33px;
    left: 50px;
    background-image: repeating-linear-gradient(45deg,
            transparent,
            transparent 3%,
            black 2%,
            black 4%);
}

.shadowLeft {
    width: 13px;
    height: 40px;
    position: absolute;
    z-index: 1;
    top: 43px;
    left: 51px;
    background-image: repeating-linear-gradient(45deg,
            transparent,
            transparent 8%,
            black 4%,
            black 11%);
}
</style>
