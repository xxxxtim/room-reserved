<template>
<div class="main-container">
    <div class="logo">
        <Logo />
    </div>
    <div>
        <Carousel />
    </div>
    <div class="rooms">
        <RoomStyles />
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import RoomStyles from "@/components/RoomStyles.vue";
import Carousel from "@/components/Carousel.vue";
import Logo from "@/components/Logo.vue";
import store from "@/store";

export default {
    name: "Home",
    components: {
        // HelloWorld
        RoomStyles,
        Carousel,
        Logo
    },

    created() {
        // axios
        //   .get("https://challenge.thef2e.com/api/thef2e2019/stage6/rooms", {
        //     headers: {
        //       Authorization:
        //         "Bearer IOdf0UIIYuWAaUqB84OcRb0NJYEBDWYUFygTLF2N8MV1WD5J6GK4HDHnGwUL"
        //     }
        //   })
        //   .then(response => (this.roomsStyles = response.data.items));
        store.dispatch("getRoomsStyleAPI");
    },
    mounted() {
        // console.log(33333333);
    }
};
</script>

<style lang="scss" scoped>
.main-container {
    position: relative;
    // max-width: 1440px;
    // margin: 0 auto;
}
</style>
