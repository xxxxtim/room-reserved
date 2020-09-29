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
        RoomStyles,
        Carousel,
        Logo
    },

    created() {
        // store.dispatch("getRoomsStyleAPI");
    },
    mounted() {}
};
</script>

<style lang="scss" scoped>
.main-container {
    position: relative;
}
</style>
