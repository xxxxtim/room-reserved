<template>
<div class="apple">
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
    /* margin-bottom: -45px; */
    cursor: pointer;
}

.apple {
    :hover {
        transform: scale(1.5);
    }
}
</style>
