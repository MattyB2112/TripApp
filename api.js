import axios from "axios";

export const getTrips = () => {
    return axios.get("https://tripappbe.onrender.com/trips").then((response) => {
        return response.data.trips;
    });
};

export const getTripById = (trip_id) => {
    return axios
        .get(`https://tripappbe.onrender.com/trips/${trip_id}`)
        .then((response) => {
            return response.data.trip;
        });
};

export const deleteTrip = (trip_id) => {
    return axios
        .delete(`https://tripappbe.onrender.com/trips/${trip_id}`)
        .then((response) => { });
};


export const deleteTravel = (trip_id, travel_id) => {
    return axios.delete(
        `https://tripappbe.onrender.com/trips/${trip_id}/travel/${travel_id}`)
        .then((response) => {
            return response
        })
}

export const deleteStay = (trip_id, stay_id) => {
    return axios.delete(
        `https://tripappbe.onrender.com/trips/${trip_id}/stay/${stay_id}`
    ).then((response) => {
        return response
    })
}

export const deleteActivity = (trip_id, activity_id) => {
    return axios.delete(`https://tripappbe.onrender.com/trips/${trip_id}/activities/${activity_id}`)
        .then((response) => {
            return response
        })
}

export const deleteMember = (trip_id, member_username) => {
    return axios.delete(`https://tripappbe.onrender.com/trips/${trip_id}/members`, { data: member_username })
        .then((response) => {
            return response
        })
}