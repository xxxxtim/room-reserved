export default {

    setRoomsStyleAPI({ state }, response) {
        console.log(response)
        state.roomsStyles = response.data.items

    }

}