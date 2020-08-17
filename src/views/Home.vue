<template>
  <div>
      <Carousel/>
      <RoomStyles />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import RoomStyles from "@/components/RoomStyles.vue";
import Carousel from "@/components/Carousel.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
    RoomStyles,
    Carousel
  }
};
</script>
// <style lang="scss" scoped>
// .room-styles img{
//   display:none
// }
// </style>
