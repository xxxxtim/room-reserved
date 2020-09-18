<template>
<div class="banner">
    <b-carousel id="carousel-1" v-model="slide" :interval="3000" controls indicators background="#ababab" img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
        <!-- v-for -->
        <b-carousel-slide class="h-100" v-for="(item, index) in getRoomsStyles" :key="index" :img-src="item.imageUrl"></b-carousel-slide>
    </b-carousel>
</div>
</template>

<script>
import axios from "axios"; //引入axios
import {
    mapGetters
} from "vuex";

export default {
    data() {
        return {
            slide: 0,
            sliding: null
        };
    },
    methods: {
        onSlideStart(slide) {
            this.sliding = true;
        },
        onSlideEnd(slide) {
            this.sliding = false;
        }
    },
    created() {},
    computed: {
        ...mapGetters(["getRoomsStyles"])
    }
};
</script>

<style lang="scss" scoped>
.banner {
    height: 660px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    // margin: 0 auto;
}

::v-deep img {
    height: 750px;
    width: 100%;
    object-fit: cover;
}
</style>
