<template>
  <div class="wrapper">
    <!-- logo-container -->
    <div>
      <div class="logo-container">white space</div>
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
$color: white;

.logo-container {
  width: $logo-length;
  height: $logo-length;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 31px;
  //   color: white;
  font-family: NotoSansCJKtc-Medium;
  background: rgba(255, 255, 255, 0.3);
  border: 2px solid #ffffff;
  text-align: center;
}
.logo-context {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.left-container {
  font-size: 25px;
  margin: 0 35px;
}
.right-container {
  border-left: 2px black solid;
  font-size: 24px;
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
}
</style>