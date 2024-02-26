import axios from "axios";

export const getTrips = () => {
    return axios.get("https://tripappbe.onrender.com/trips")
        .then((response) => {
            return response.data.trips
        });
}

export const getTripById = (trip_id) => {
    return axios.get(
        `https://tripappbe.onrender.com/trips/${trip_id}`
    ).then((response) => {
        return response.data.trip
    })
}