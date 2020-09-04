export default {
    getRoomsStyles({ state }) {
        return state.roomsStyles;
    },
    getRoomDetails({ state }) {
        return state.roomDetails;
    },
    getBooking({ state }) {
        return state.booking;
    },
    getStatusOfPost({ state }) {
        console.log('state', state.statusOfPost)
        // state.statusOfPost = true;
        return state.statusOfPost;
    }
}