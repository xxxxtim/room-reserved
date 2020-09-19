<template>
<div class="wrapper">
    <!-- logo-container -->
    <div>
        <div class="logo-container">
            <div class="logo-shadowTop" />
            <div class="logo-shadowLeft" />white space
        </div>
    </div>
    <div class="logo-context">
        <div class="left-container">
            <font-awesome-icon class="left-icon" :icon="['fab', 'instagram']" />
            <font-awesome-icon class="left-icon" :icon="['fab', 'facebook-square']" />
        </div>
        <div class="right-container">
            <div>
                <font-awesome-icon class="link" icon="phone-square-alt" />
                <span>02-17264937</span>
            </div>
            <div>
                <font-awesome-icon class="link" icon="envelope" />
                <span>whitespace@whitespace.com.tw</span>
            </div>
            <div>
                <font-awesome-icon class="link" icon="home" />
                <span>台北市羅斯福路十段30號</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$logo-length: 148px;
$color: #ffffff;

.logo-container {
    position: relative;
    width: $logo-length;
    height: $logo-length;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 31px;
    color: $color;
    font-family: NotoSansCJKtc-Medium;
    background: rgba(255, 255, 255, 0.3);
    border: 2px solid #ffffff;
    text-align: center;
}

.logo-context {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 30px;
    color: $color;
}

.logo-shadowTop {
    width: 150px;
    height: 10px;
    position: absolute;
    z-index: 1;
    top: -12px;
    left: -19px;
    right: 0;
    background-image: repeating-linear-gradient(45deg,
            transparent,
            transparent 3%,
            white 2%,
            white 4%);
}

.logo-shadowLeft {
    width: 13px;
    height: 125px;
    position: absolute;
    z-index: 1;
    top: -3px;
    left: -17px;
    background-image: repeating-linear-gradient(45deg,
            transparent,
            transparent 3%,
            white 5%,
            white 2%);
}

.left-container {
    font-size: 25px;
    margin: 0 35px;
}

.right-container {
    border-left: 2px $color;
    font-size: 24px;
    text-align: left;
    border-left: 2px white solid;
}

.link {
    margin: 0px 25px;
    cursor: pointer;
}

.left-icon {
    margin: 0 5px;
    cursor: pointer;
}

.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    margin: 0 auto;
    padding: 12% 0;
}
</style>
