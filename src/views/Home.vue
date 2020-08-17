<template>
  <div>
    <!-- <Carousel /> -->
    <!-- <RoomStyles /> -->
    <Logo />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import RoomStyles from "@/components/RoomStyles.vue";
import Carousel from "@/components/Carousel.vue";
import Logo from "@/components/Logo.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
    RoomStyles,
    Carousel,
    Logo
  }
};
</script>
// <style lang="scss" scoped>
// .room-styles img{
//   display:none
// }
//
</style>
