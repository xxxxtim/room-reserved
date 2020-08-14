<template>
  <div>
    <div>
      <div class="rooms-container" >
        <!-- v-for -->
        <div 
          v-if="index <= 2" 
          v-for="(item, index) in roomsStyles" 
          class="room-container"
        >
          <div class="img-container1" :style="{ backgroundImage: `url(${item.imageUrl})`}"></div>
          <p>{{ roomsStyles[index].name }}</p>
          <div class="room-context">
            <span class="price">NT.{{roomsStyles[index].normalDayPrice}}</span>
            <span>平日</span>
            <span class="normal-days">NT.{{roomsStyles[index].holidayPrice}}假日</span>
          </div>
        </div>
        <!-- card1 -->
        <!-- <div class="room-container">
          <div class="img-container1"></div>
          <p>{{roomsStyles[0].name}}</p>
          <div class="room-context">
            <span class="price">NT.{{roomsStyles[0].normalDayPrice}}</span>
            <span>平日</span>
            <span class="normal-days">NT.{{roomsStyles[0].holidayPrice}}假日</span>
          </div>
        </div> -->
        <!-- card2 -->
        <!-- <div class="room-container">
          <div class="img-container2"></div>
          <p>{{roomsStyles[1].name}}</p>
          <div class="room-context">
            <span class="price">NT.{{roomsStyles[1].normalDayPrice}}</span>
            <span>平日</span>
            <span class="normal-days">NT.{{roomsStyles[1].holidayPrice}}假日</span>
          </div>
        </div> -->
        <!-- card3 -->
        <!-- <div class="room-container">
          <div class="img-container3"></div>
          <p>{{roomsStyles[2].name}}</p>
          <div class="room-context">
            <span class="price">NT.{{roomsStyles[2].normalDayPrice}}</span>
            <span>平日</span>
            <span class="normal-days">NT.{{roomsStyles[2].holidayPrice}}假日</span>
          </div>
        </div> -->
      </div>
      <!-- card4 -->
      <div class="rooms-container">
        <div 
          v-if=" 2 < index " 
          v-for="(item, index) in roomsStyles" 
          class="room-container"
        >
          <div class="img-container1" :style="{ backgroundImage: `url(${item.imageUrl})`}"></div>
          <p>{{ roomsStyles[index].name }}</p>
          <div class="room-context">
            <span class="price">NT.{{roomsStyles[index].normalDayPrice}}</span>
            <span>平日</span>
            <span class="normal-days">NT.{{roomsStyles[index].holidayPrice}}假日</span>
          </div>
        </div>
        <!-- <div>
          <div>房型4照片</div>
          <p>房型名稱</p>
          <p>價位</p>
        </div>
        <div>
          <div>房型5照片</div>
          <p>房型名稱</p>
          <p>價位</p>
        </div>
        <div>
          <div>房型6照片</div>
          <p>房型名稱</p>
          <p>價位</p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"; //引入axios
export default {
  data() {
    return {
      test: [1,2],
      roomsStyles: [
        {
          id:
            "3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu",
          imageUrl:
            "https://images.unsplash.com/photo-1551776235-dde6d482980b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
          normalDayPrice: 1380,
          holidayPrice: 1500,
          name: "Single Room"
        },
        {
          id:
            "g0mYhN6ignMz4VYW7eiWsXZN8DHolHzH8LuVmM6hq5h6BrrqrLMw4aJgHv7LZ3RQ",
          imageUrl:
            "https://images.unsplash.com/photo-1564182379166-8fcfdda80151?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
          normalDayPrice: 1899,
          holidayPrice: 2000,
          name: "Deluxe Single Room"
        },
        {
          id:
            "RA8NhExaXXZB7EODVALSDvFFQzj1JP0a4C1pwZ1acPaieRBwiWoCb0FE0KUbXaxg",
          imageUrl:
            "https://images.unsplash.com/photo-1526913621366-a4583840d736?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
          normalDayPrice: 2460,
          holidayPrice: 2500,
          name: "Double Room"
        },
        {
          id:
            "kICyWhZ5XsfI4n1d4gBOsDjIyIxNozwgmxYKyZpzi5pjLcU2Nl4RhiGrn6zaPuTJ",
          imageUrl:
            "https://images.unsplash.com/photo-1519710889408-a67e1c7e0452?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
          normalDayPrice: 2888,
          holidayPrice: 3000,
          name: "Deluxe Double Room"
        },
        {
          id:
            "VCxbQq1vLeUtxW781k9Dlq3mHBRNl5YP19Lhq8k5TbIr2BeH58gRpnNKGoEgkysz",
          imageUrl:
            "https://images.unsplash.com/photo-1558976825-6b1b03a03719?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
          normalDayPrice: 3350,
          holidayPrice: 3500,
          name: "Twin Room"
        },
        {
          id:
            "YovqNpFDaal598jbpd1A14gXwDE6gekTqJgxOAGcq78B8YnP7claymQVFy2GTwgb",
          imageUrl:
            "https://images.unsplash.com/photo-1552902019-ebcd97aa9aa0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
          normalDayPrice: 3899,
          holidayPrice: 4000,
          name: "Deluxe Twin Room"
        }
      ]
    };
  },
  created() {
    axios
      .get("https://challenge.thef2e.com/api/thef2e2019/stage6/rooms", {
        headers: {
          Authorization:
            "Bearer IOdf0UIIYuWAaUqB84OcRb0NJYEBDWYUFygTLF2N8MV1WD5J6GK4HDHnGwUL"
        }
      })
      .then(response => (this.roomsStyles = response.data.items));
  }
};
</script>

<style lang="scss" scoped>
.rooms-container {
  display: flex;
  flex-direction: row;
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
  margin:11px;
  box-shadow: 2px 2px 9px 0 rgba(0,0,0,0.18);
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
</style>