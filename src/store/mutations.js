export default {

    setRoomsStyleAPI({ state }, response) {
        console.log(state)
        state.roomsStyles = response.data.items

    },
    setRoomDetails({ state }, response) {
        state.roomDetails = response.data.room
    },
    // chooseRoom({ state }, index) {
    //     state.roomNumber = index

    // }



}