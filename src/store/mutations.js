export default {

    setRoomsStyleAPI({ state }, response) {
        console.log(state)
        state.roomsStyles = response.data.items

    }

}