export default {

    setRoomsStyleAPI({ state }, response) {
        console.log(state)
        state.roomsStyles = response.data.items

    },
    setRoomDetails({ state }, response) {
        state.roomDetails = response.data.room
    },
    setBooking({ state }, response) {
        console.log(response.data)
        state.booking = response.data.booking

    },
    postSuccess({ state }, response) {
        // console.log('response', response.data)
        state.statusOfPost = 'success'
    },
    postFail({ state }) {
        state.statusOfPost = 'failure'
    }



}