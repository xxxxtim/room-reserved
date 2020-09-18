<template>
<div class="banner">
    <b-carousel id="carousel-1" v-model="slide" :interval="3000" controls indicators background="#ababab" img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
        <!-- v-for -->
        <b-carousel-slide class="h-100" v-for="(item, index) in imgUrl" :key="index" :img-src="item"></b-carousel-slide>
    </b-carousel>
</div>
</template>

<script>
import axios from "axios"; //引入axios

export default {
    props: {
        imgUrl: Array
    },
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
    created() {
        axios
            .get("https://challenge.thef2e.com/api/thef2e2019/stage6/rooms", {
                headers: {
                    Authorization: "Bearer IOdf0UIIYuWAaUqB84OcRb0NJYEBDWYUFygTLF2N8MV1WD5J6GK4HDHnGwUL"
                }
            })
            .then(response => (this.roomsStyles = response.data.items));
    }
};
</script>

<style lang="scss" scoped>
.banner {
    width: 60%;
    position: absolute;
    top: 120px;
    left: 20%;
    z-index: 1;
}

::v-deep img {
    height: 460px;
}
</style>
