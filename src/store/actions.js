import axios from 'axios'

export default {
    async getRoomsStyleAPI({ commit }) {
        // console.log(1111111)
        const response = await axios
            .get("https://challenge.thef2e.com/api/thef2e2019/stage6/rooms", {
                headers: {
                    Authorization:
                        "Bearer IOdf0UIIYuWAaUqB84OcRb0NJYEBDWYUFygTLF2N8MV1WD5J6GK4HDHnGwUL"
                }
            })
        console.log(response);
        // .then(response => (context.state.roomsStyles = response.data.items));
        // .then(() => commit('roomOfStyles', response))
        //   .then((response) => console.log(response))
        // response => (context.state.roomsStyles = response.data.items));

        commit('setRoomsStyleAPI', response)
    }
}