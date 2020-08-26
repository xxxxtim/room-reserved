import axios from 'axios'

export default {
    // 所有房型粗略資料
    async getRoomsStyleAPI({ commit }) {
        const response = await axios
            .get("https://challenge.thef2e.com/api/thef2e2019/stage6/rooms", {
                headers: {
                    Authorization:
                        "Bearer IOdf0UIIYuWAaUqB84OcRb0NJYEBDWYUFygTLF2N8MV1WD5J6GK4HDHnGwUL"
                }
            })
        // console.log(response);
        commit('setRoomsStyleAPI', response)
    },
    // test
    async getAllRoomDetails({ commit }, cardId) {
        const response = await axios
            .get(`https://challenge.thef2e.com/api/thef2e2019/stage6/room/${cardId}`, {
                headers: {
                    Authorization:
                        "Bearer IOdf0UIIYuWAaUqB84OcRb0NJYEBDWYUFygTLF2N8MV1WD5J6GK4HDHnGwUL"
                }
            })
        commit('setRoomDetails', response)

    },





    // // singleRoom詳細資料
    // async getSingleRoomAPI({ commit }) {
    //     const response = await axios
    //         .get("https://challenge.thef2e.com/api/thef2e2019/stage6/room/3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu", {
    //             headers: {
    //                 Authorization:
    //                     "Bearer IOdf0UIIYuWAaUqB84OcRb0NJYEBDWYUFygTLF2N8MV1WD5J6GK4HDHnGwUL"
    //             }
    //         })
    //     commit('setRoomDetails', response)

    // },
    // // Deluxe Single Room詳細資料
    // async getDeluxeSingleRoomAPI({ commit }) {
    //     const response = await axios
    //         .get("https://challenge.thef2e.com/api/thef2e2019/stage6/room/g0mYhN6ignMz4VYW7eiWsXZN8DHolHzH8LuVmM6hq5h6BrrqrLMw4aJgHv7LZ3RQ", {
    //             headers: {
    //                 Authorization:
    //                     "Bearer IOdf0UIIYuWAaUqB84OcRb0NJYEBDWYUFygTLF2N8MV1WD5J6GK4HDHnGwUL"
    //             }
    //         })
    //     commit('setRoomDetails', response)
    // },
    // // Double Room 詳細資料
    // async getDoubleRoomAPI({ commit }) {
    //     const response = await axios
    //         .get("https://challenge.thef2e.com/api/thef2e2019/stage6/room/RA8NhExaXXZB7EODVALSDvFFQzj1JP0a4C1pwZ1acPaieRBwiWoCb0FE0KUbXaxg", {
    //             headers: {
    //                 Authorization:
    //                     "Bearer IOdf0UIIYuWAaUqB84OcRb0NJYEBDWYUFygTLF2N8MV1WD5J6GK4HDHnGwUL"
    //             }
    //         })
    //     commit('setRoomDetails', response)
    // },
    // // Deluxe Double Room
    // async getDeluxeDoubleRoomAPI({ commit }) {
    //     const response = await axios
    //         .get("https://challenge.thef2e.com/api/thef2e2019/stage6/room/kICyWhZ5XsfI4n1d4gBOsDjIyIxNozwgmxYKyZpzi5pjLcU2Nl4RhiGrn6zaPuTJ", {
    //             headers: {
    //                 Authorization:
    //                     "Bearer IOdf0UIIYuWAaUqB84OcRb0NJYEBDWYUFygTLF2N8MV1WD5J6GK4HDHnGwUL"
    //             }
    //         })
    //     commit('setRoomDetails', response)
    // },
    // // Twin Room
    // async getTwinRoomAPI({ commit }) {
    //     const response = await axios
    //         .get("https://challenge.thef2e.com/api/thef2e2019/stage6/room/VCxbQq1vLeUtxW781k9Dlq3mHBRNl5YP19Lhq8k5TbIr2BeH58gRpnNKGoEgkysz", {
    //             headers: {
    //                 Authorization:
    //                     "Bearer IOdf0UIIYuWAaUqB84OcRb0NJYEBDWYUFygTLF2N8MV1WD5J6GK4HDHnGwUL"
    //             }
    //         })
    //     commit('setRoomDetails', response)
    // },
    // // Deluxe Twin Room
    // async getTwinRoomAPI({ commit }) {
    //     const response = await axios
    //         .get("https://challenge.thef2e.com/api/thef2e2019/stage6/room/YovqNpFDaal598jbpd1A14gXwDE6gekTqJgxOAGcq78B8YnP7claymQVFy2GTwgb", {
    //             headers: {
    //                 Authorization:
    //                     "Bearer IOdf0UIIYuWAaUqB84OcRb0NJYEBDWYUFygTLF2N8MV1WD5J6GK4HDHnGwUL"
    //             }
    //         })
    //     commit('setRoomDetails', response)
    // },

}