<template>
<div>
    <div class="rooms-wrapper">
        <div class="rooms-container">
            <div @click="toRoomDetails(item)" v-for="(item, index) in getRoomsStyles" :key="index" class="room-container">
                <div class="img-container1" :style="{ backgroundImage: `url(${item.imageUrl})`}"></div>
                <p>{{ getRoomsStyles[index].name }}</p>
                <div class="room-context">
                    <span class="price">NT.{{getRoomsStyles[index].normalDayPrice}}</span>
                    <span>平日</span>
                    <span class="normal-days">NT.{{getRoomsStyles[index].holidayPrice}}假日</span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios"; //引入axios
// import store from "@/store";
import {
    mapGetters,
    mapMutations
} from "vuex";

export default {
    data() {
        return {
            chooseCard: 0
        };
    },
    created() {
        // console.log(this.getRoomsStyles);
    },
    computed: {
        ...mapGetters(["getRoomsStyles"])
    },
    methods: {
        toRoomDetails(item) {
            console.log(item.id);
            this.$router.push({
                // name: "RoomDetails",
                path: "/2",
                query: {
                    cardId: item.id
                }
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.rooms-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1024px;
}

.room-container {
    cursor: pointer;

    &:hover {
        .img-container1 {
            height: 240px;
        }

        .room-context {
            display: block;
        }
    }
}

.img-container1 {
    width: 300px;
    height: 280px;
    background-image: url(https://images.unsplash.com/photo-1551776235-dde6d482980b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80);
    background-size: cover;
    background-position: center;
    margin: 11px;
    box-shadow: 2px 2px 9px 0 rgba(0, 0, 0, 0.18);
}

.img-container2 {
    width: 300px;
    height: 280px;
    background-image: url(https://images.unsplash.com/photo-1564182379166-8fcfdda80151?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80https://images.unsplash.com/photo-1564182379166-8fcfdda80151?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80);
    background-size: cover;
    background-position: center;
}

.img-container3 {
    width: 300px;
    height: 280px;
    background-image: url(https://images.unsplash.com/photo-1526913621366-a4583840d736?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
    background-size: cover;
    background-position: center;
}

img {
    width: 100%;
}

.price {
    font-size: 24px;
    color: black;
}

span {
    color: #6d7278;
}

.normal-days {
    margin-left: 25px;
}

.room-context {
    display: none;
}

.rooms-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 165px;
}

p {
    padding-left: 10px;
}
</style>
