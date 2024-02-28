import axios from "axios";

export const getTrips = () => {
    return axios.get("https://tripappbe.onrender.com/trips").then((response) => {
        return response.data.trips;
    });
};

export const getUsers = () => {
    return axios.get("https://tripappbe.onrender.com/users").then((response) => {
        return response.data.users;
    });
};

export const getTripById = (trip_id) => {
    return axios
        .get(`https://tripappbe.onrender.com/trips/${trip_id}`)
        .then((response) => {
            return response.data.trip;
        });
};

export const postTravel = (trip_id, newTravel) => {
    return axios
        .post(`https://tripappbe.onrender.com/trips/${trip_id}/travel`, newTravel)
        .then((travelData) => {
            return travelData;
        });
};

export const postStay = (trip_id, newStay) => {
    return axios
        .post(`https://tripappbe.onrender.com/trips/${trip_id}/stay`, newStay)
        .then((stayData) => {
            return stayData;
        });
};

export const postActivity = (trip_id, newActivity) => {
    return axios
        .post(
            `https://tripappbe.onrender.com/trips/${trip_id}/activities`,
            newActivity
        )
        .then((activityData) => {
            return activityData;
        });
};

export const postMember = (trip_id, newMember) => {
    console.log(trip_id, "<==== trip ID");
    console.log(newMember, "<==== new MEMBER");
    return axios
        .post(`https://tripappbe.onrender.com/trips/${trip_id}/members`, { userId: newMember })
        .then((memberData) => {
            console.log(memberData, "<--- MEMBER DATA");
            return memberData;
        });
};
