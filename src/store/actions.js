import axios from 'axios'

export default {

    // 重複網址拉出來
    // header
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
        commit('setRoomDetails', response);
        commit('setBooking', response);

    },


    async postBooking({ commit }, { roomId, name, tel, booking }) {
        // console.log(roomId, name, tel, booking)
        try {
            const res = await axios.post(`https://challenge.thef2e.com/api/thef2e2019/stage6/room/${roomId}`,
                {
                    name: name,
                    tel: tel,
                    date: booking
                },
                {
                    headers: {
                        Authorization:
                            "Bearer IOdf0UIIYuWAaUqB84OcRb0NJYEBDWYUFygTLF2N8MV1WD5J6GK4HDHnGwUL"
                    }
                })
            commit('postSuccess', res);
            console.log('bannan');
            console.log(res.data);

        }
        catch (err) {
            commit('postFail', err)
            console.log('orange')
        }
        // .then((res) => {

        //     // console.log(res.data);
        //     commit('postSuccess', res);
        // }
        // )
        // .catch((error) => {
        //     commit('postFail', error)
        //     // console.log('yachen666')
        //     console.log(error)
        // }
        // )
    }




}