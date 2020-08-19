<template>
  <div class="main">
    <div class="banner-container">
      <div class="banner-left" :style="{ backgroundImage: 'url(' + room[0].imageUrl[0] + ')'}" />
      <div>
        <div class="banner-right" :style="{ backgroundImage: 'url(' + room[0].imageUrl[1] + ')'}" />
        <div class="banner-right" :style="{ backgroundImage: 'url(' + room[0].imageUrl[2] + ')'}" />
      </div>
    </div>
    <div class="msg-container">
      <div class="msg-left">
        <div class="context-left">
          <h1>{{room[0].name}}</h1>
          <div>
            <p>房客人數限制： 1~1 人</p>
            <p>床型：單人床</p>
            <p>衛浴數量： 1 間</p>
            <p>房間大小： 18 平方公尺</p>
          </div>
          <p>Single Room is only reserved for one guest. There is a bedroom with a single size bed and a private bathroom. Everything you need prepared for you: sheets and blankets, towels, soap and shampoo, hairdryer are provided. In the room there is AC and of course WiFi.</p>
          <span>\\\</span>
          <div class="time-container">
            <div>
              <p>check in</p>
              <span>15:00 — 21:00</span>
            </div>
            <div>
              <p>check out</p>
              <span>10:00</span>
            </div>
          </div>
          <!-- 這邊可以拆component -->
          <div class="icons-container">
            <div class="icons">
              <div>
                <div>
                  <font-awesome-icon icon="wifi" />
                </div>
                <div>
                  <font-awesome-icon icon="utensils" />
                </div>
                <div>
                  <font-awesome-icon icon="glass-martini-alt" />
                </div>
                <div>
                  <font-awesome-icon icon="bell" />
                </div>
              </div>
              <div>
                <div>
                  <span class="icon-text">wifi</span>
                </div>
                <div>
                  <span class="icon-text">早餐</span>
                </div>
                <div>
                  <span class="icon-text">Mini Bar</span>
                </div>
                <div>
                  <span class="icon-text">Room service</span>
                </div>
              </div>
            </div>
            <div class="icons">
              <div>
                <div>
                  <font-awesome-icon icon="tty" />
                </div>
                <div>
                  <font-awesome-icon icon="fan" />
                </div>
                <div>
                  <font-awesome-icon icon="dice-six" />
                </div>
                <div>
                  <font-awesome-icon icon="couch" />
                </div>
              </div>
              <div>
                <div>
                  <span class="icon-text">電話</span>
                </div>
                <div>
                  <span class="icon-text">空調</span>
                </div>
                <div>
                  <span class="icon-text">冰箱</span>
                </div>
                <div>
                  <span class="icon-text">沙發</span>
                </div>
              </div>
            </div>
            <div class="icons">
              <div>
                <div>
                  <font-awesome-icon icon="mountain" />
                </div>
                <div>
                  <font-awesome-icon icon="smoking-ban" />
                </div>
                <div>
                  <font-awesome-icon icon="baby" />
                </div>
                <div>
                  <font-awesome-icon icon="dog" />
                </div>
              </div>
              <div>
                <div>
                  <span class="icon-text">漂亮的視野</span>
                </div>
                <div>
                  <span class="icon-text">禁止吸煙</span>
                </div>
                <div>
                  <span class="icon-text">適合兒童</span>
                </div>
                <div>
                  <span class="icon-text">寵物攜帶</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="context-right"></div>
      </div>
      <div class="msg-middle">
        <p>NT.1380</p>
        <p>平日(1-4)</p>
        <p>NT.1500</p>
        <p>假日（5-7）</p>
      </div>
      <div class="msg-right">日曆</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      room: [
        {
          id:
            "3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu",
          name: "Single Room",
          imageUrl: [
            "https://images.unsplash.com/photo-1551776235-dde6d482980b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
            "https://images.unsplash.com/photo-1526880792616-4217886b9dc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            "https://images.unsplash.com/photo-1515511856280-7b23f68d2996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80"
          ],
          normalDayPrice: 1380,
          holidayPrice: 1500,
          descriptionShort: {
            GuestMin: 1,
            GuestMax: 1,
            Bed: ["Single"],
            "Private-Bath": 1,
            Footage: 18
          },
          description:
            "Single Room is only reserved for one guest. There is a bedroom with a single size bed and a private bathroom. Everything you need prepared for you: sheets and blankets, towels, soap and shampoo, hairdryer are provided. In the room there is AC and of course WiFi.",
          checkInAndOut: {
            checkInEarly: "15:00",
            checkInLate: "19:00",
            checkOut: "10:00"
          },
          amenities: {
            "Wi-Fi": true,
            Breakfast: true,
            "Mini-Bar": false,
            "Room-Service": false,
            Television: true,
            "Air-Conditioner": true,
            Refrigerator: true,
            Sofa: false,
            "Great-View": false,
            "Smoke-Free": true,
            "Child-Friendly": false,
            "Pet-Friendly": true
          }
        }
      ]
    };
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
}
.banner-container {
  display: flex;
  flex-direction: row;
}
.banner-right {
  width: 356px;
  height: 298px;
  background-size: cover;
  background-position: center;
  cursor: pointer;
}
.time-container {
  display: flex;
  flex-direction: row;
}
.icons-container {
  background: #f0f0f0;
  display: flex;
  flex-direction: row;
  color: #6c757d;
  width: 482px;
  height: 220px;
  justify-content: space-around;
  align-items: center;
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
}
.msg-left {
  width: 480px;
  flex: 3 1 auto;
}
.msg-middle {
  width: 130px;
  flex: 1 1 auto;
}
.msg-right {
  width: 385px;
  flex: 1 1 auto;
}
</style>