export default {

    setRoomsStyleAPI({ state }, response) {
        state.roomsStyles = response.data.items

    },
    setRoomDetails({ state }, response) {
        state.roomDetails = response.data.room
    },
    setBooking({ state }, response) {
        state.booking = response.data.booking

    },
    postSuccess({ state }, response) {
        state.statusOfPost = 'success'
    },
    postFail({ state }) {
        state.statusOfPost = 'failure'
    }



}