<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <RoomStyles />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import RoomStyles from "@/components/RoomStyles.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
    RoomStyles
  }
};
</script>
