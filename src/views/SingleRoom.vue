<template>
<div class="main">
    <div class="banner-container">
        <!-- <p>{{getRoomDetails[0].imageUrl}}</p> -->
        <!-- props測試 -->
        <RoomCarousel v-if="isShowCarousel" :imgUrl="getRoomDetails[0].imageUrl" />
        <div @click="isShowCarousel=!isShowCarousel" :class="{ bannerDark: isShowCarousel }" class="banner-left" :style="{ backgroundImage: 'url(' + getRoomDetails[0].imageUrl[0] + ')' }" />
        <div :class="{ bannerDark: isShowCarousel }">
            <div @click="isShowCarousel=!isShowCarousel" class="banner-right" :style="{ backgroundImage: 'url(' + getRoomDetails[0].imageUrl[1] + ')'}" />
            <div @click="isShowCarousel=!isShowCarousel" class="banner-right" :style="{ backgroundImage: 'url(' + getRoomDetails[0].imageUrl[2] + ')'}" />
        </div>
    </div>
    <div class="msg-container">
        <div class="msg-left">
            <div class="context-left">
                <h1>{{getRoomDetails[0].name}}</h1>
                <div class="roomType">
                    <p>房客人數限制： {{getRoomDetails[0].descriptionShort.GuestMin}}~{{getRoomDetails[0].descriptionShort.GuestMax}} 人</p>
                    <p>床型：{{getRoomDetails[0].descriptionShort.Bed[0]}}</p>
                    <p>衛浴數量：{{getRoomDetails[0].descriptionShort['Private-Bath']}} 間</p>
                    <p>房間大小： {{getRoomDetails[0].descriptionShort.Footage}} 平方公尺</p>
                </div>
                <!-- <p>Single Room is only reserved for one guest. There is a bedroom with a single size bed and a private bathroom. Everything you need prepared for you: sheets and blankets, towels, soap and shampoo, hairdryer are provided. In the room there is AC and of course WiFi.</p> -->
                <p class="roomDescript">{{getRoomDetails[0].description}}</p>
                <span>\\\</span>
                <div class="time-container">
                    <div>
                        <p>check in</p>
                        <!-- <span>15:00 — 21:00</span> -->
                        <span class="time">{{getRoomDetails[0].checkInAndOut.checkInEarly}} — {{getRoomDetails[0].checkInAndOut.checkInLate}}</span>
                    </div>
                    <div class="checkoutWrapper">
                        <p>check out</p>
                        <span class="time">{{getRoomDetails[0].checkInAndOut.checkOut}}</span>
                    </div>
                </div>
                <!-- 這邊可以拆component -->
                <div class="prompt">
                    <div class="icons">
                        <div class="iconsWrapper">
                            <div :class="{ iconActive: !!getRoomDetails[0].amenities['Wi-Fi'] }">
                                <font-awesome-icon icon="wifi" />
                            </div>
                            <div :class="{ iconActive: !!getRoomDetails[0].amenities.Breakfast }">
                                <font-awesome-icon icon="utensils" />
                            </div>
                            <div :class="{ iconActive: !!getRoomDetails[0].amenities['Mini-Bar']}">
                                <font-awesome-icon icon="glass-martini-alt" />
                            </div>
                            <div :class="{ iconActive: !!getRoomDetails[0].amenities['Room-Service']}">
                                <font-awesome-icon icon="bell" />
                            </div>
                        </div>
                        <div>
                            <div :class="{ iconActive: !!getRoomDetails[0].amenities['Wi-Fi']}">
                                <span class="icon-text">wifi</span>
                            </div>
                            <div :class="{ iconActive: !!getRoomDetails[0].amenities.Breakfast }">
                                <span class="icon-text">早餐</span>
                            </div>
                            <div :class="{ iconActive: !!getRoomDetails[0].amenities['Mini-Bar']}">
                                <span class="icon-text">Mini Bar</span>
                            </div>
                            <div :class="{ iconActive: !!getRoomDetails[0].amenities['Room-Service']}">
                                <span class="icon-text">Room service</span>
                            </div>
                        </div>
                    </div>
                    <div class="icons">
                        <div class="iconsWrapper">
                            <div :class="{ iconActive: !!getRoomDetails[0].amenities.Television }">
                                <font-awesome-icon icon="tty" />
                            </div>
                            <div :class="{iconActive:!!getRoomDetails[0].amenities['Air-Conditioner']}">
                                <font-awesome-icon icon="fan" />
                            </div>
                            <div :class="{iconActive:!!getRoomDetails[0].amenities.Refrigerator}">
                                <font-awesome-icon icon="dice-six" />
                            </div>
                            <div :class="{iconActive:!!getRoomDetails[0].amenities.Sofa}">
                                <font-awesome-icon icon="couch" />
                            </div>
                        </div>
                        <div>
                            <div :class="{ iconActive: !!getRoomDetails[0].amenities.Television }">
                                <span class="icon-text">電話</span>
                            </div>
                            <div :class="{iconActive:!!getRoomDetails[0].amenities['Air-Conditioner']}">
                                <span class="icon-text">空調</span>
                            </div>
                            <div :class="{iconActive:!!getRoomDetails[0].amenities.Refrigerator}">
                                <span class="icon-text">冰箱</span>
                            </div>
                            <div :class="{iconActive:!!getRoomDetails[0].amenities.Sofa}">
                                <span class="icon-text">沙發</span>
                            </div>
                        </div>
                    </div>
                    <div class="icons">
                        <div class="iconsWrapper">
                            <div :class="{iconActive:!!getRoomDetails[0].amenities['Great-View']}">
                                <font-awesome-icon icon="mountain" />
                            </div>
                            <div :class="{iconActive:!!getRoomDetails[0].amenities['Smoke-Free']}">
                                <font-awesome-icon icon="smoking-ban" />
                            </div>
                            <div :class="{iconActive:!!getRoomDetails[0].amenities['Child-Friendly']}">
                                <font-awesome-icon icon="baby" />
                            </div>
                            <div :class="{iconActive:!!getRoomDetails[0].amenities['Pet-Friendly']}">
                                <font-awesome-icon icon="dog" />
                            </div>
                        </div>
                        <div>
                            <div :class="{iconActive:!!getRoomDetails[0].amenities['Great-View']}">
                                <span class="icon-text">漂亮的視野</span>
                            </div>
                            <div :class="{iconActive:!!getRoomDetails[0].amenities['Smoke-Free']}">
                                <span class="icon-text">禁止吸煙</span>
                            </div>
                            <div :class="{iconActive:!!getRoomDetails[0].amenities['Child-Friendly']}">
                                <span class="icon-text">適合兒童</span>
                            </div>
                            <div :class="{iconActive:!!getRoomDetails[0].amenities['Pet-Friendly']}">
                                <span class="icon-text">寵物攜帶</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="context-right"></div>
        </div>
        <div class="msg-middle">
            <p>NT.{{getRoomDetails[0].normalDayPrice}}</p>
            <p>平日(一~四)</p>
            <p>NT.{{getRoomDetails[0].holidayPrice}}</p>
            <p>假日(五~日)</p>
        </div>
        <div class="msg-right">
            <!-- <VueHotelDatepicker placeholder="請選擇預約日期" /> -->
            <!-- <Datepicker placeholder="顯示90天內預約狀態" :inline="true" :minimumView="'day'" :maximumView="'day'" disabled="true" /> -->
            <!-- 把訂房資訊props到日曆上 -->
            <ShowDate :commentIds="getBooking" />
            <button @click="isShowReservation=!isShowReservation" class="reservation">預約時段</button>
        </div>
    </div>
    <ReserveTable />
</div>
</template>

<script>
import RoomCarousel from "@/components/RoomCarousel.vue";
import ShowDate from "@/components/ShowDate.vue";
import ReserveTable from "@/components/ReserveTable.vue";
import Datepicker from "vuejs-datepicker";
import VueHotelDatepicker from "@northwalker/vue-hotel-datepicker";
import store from "@/store";
import {
    mapGetters
} from "vuex";

export default {
    components: {
        VueHotelDatepicker,
        RoomCarousel,
        Datepicker,
        ShowDate,
        ReserveTable
    },
    data() {
        return {
            isShowCarousel: false,
            isShowReservation: false
            // test: [1, 2, 3]
        };
    },
    created() {
        // console.log(typeof this.$route.query.cardId);
        store.dispatch("getAllRoomDetails", this.$route.query.cardId);
        console.log(this.getBooking);
    },
    computed: {
        ...mapGetters(["getRoomDetails", "getBooking"])
    }
};
</script>

<style lang="scss" scoped>
.banner-left {
    width: 844px;
    height: 596px;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    flex: 8 8 auto;
}

.banner-container {
    display: flex;
    flex-direction: row;
    position: relative;
}

.banner-right {
    width: 356px;
    height: 298px;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    flex: 8 1 auto;
}

.time-container {
    display: flex;
    flex-direction: row;
}

.prompt {
    background: #f0f0f0;
    display: flex;
    flex-direction: row;
    color: #6c757d;
    // width: 482px;
    height: 220px;
    justify-content: space-around;
    align-items: center;
    margin: 30px 0;
}

.icon-text {
    margin-left: 10px;
}

.icons {
    display: flex;
    flex-direction: row;
}

.msg-container {
    display: flex;
    flex-direction: row;
    padding: 65px;
}

.msg-left {
    width: 480px;
    flex: 3 1 auto;
    text-align: left;
}

.msg-middle {
    width: 130px;
    flex: 3 1 auto;
    text-align: right;
    padding: 0 50px;
}

.msg-right {
    width: 385px;
    flex: 1 1 auto;
    text-align: left;
}

.iconActive {
    color: black;
}

.iconsWrapper {
    text-align: center;
}

.roomDescript {
    font-family: NotoSansCJKtc-Light;
    letter-spacing: 1.25px;
    text-align: justify;
    line-height: 20px;
}

h1 {
    font-size: 2.5rem;
    font-family: NotoSansCJKtc-Medium;
    /* font-size: 36px; */
    // color: #000000;
    letter-spacing: 3.76px;
}

.roomType {
    font-family: NotoSansCJKtc-Light;
    letter-spacing: 1.46px;
    line-height: 31px;
}

.time {
    font-size: 21px;
    letter-spacing: 2.19px;
}

div.time-container p {
    margin: 0;
}

.checkoutWrapper {
    margin-left: 50px;
}

.msg-middle p:nth-child(1) {
    font-family: NotoSansCJKtc-Light;
    font-size: 30px;
    // color: #000000;
    letter-spacing: 3.13px;
    // text-align: right;
    line-height: 27px;
}

.msg-middle p:nth-child(2n) {
    color: #6c757d;
}

::v-deep .vhd-picker {
    width: 100%;
}

::v-deep .vhd-container {
    width: 100%;
    text-align: center;
}

.bannerDark {
    filter: brightness(0.5);
}

.reservation {
    color: white;
    background: #575757;
    width: 118px;
    height: 53px;
    border: none;
    margin-top: 26px;
}

// datepicker

::v-deep .vdp-datepicker__calendar {
    display: block;
    width: 100%;
}
</style>
