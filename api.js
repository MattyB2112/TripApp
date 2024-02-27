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

export const postTravel = (
    // trip_id,
    // startDate,
    // leaveTime,
    // arriveDate,
    // arriveTime,
    // travelType,
    // info
    trip_id,
    newTravel
) => {
    // const travelToAdd = {
    //     startdate: startDate,
    //     leavetime: leaveTime,
    //     arrivedata: arriveDate,
    //     arrivetime: arriveTime,
    //     type: travelType,
    //     info: info,
    // };
    // console.log(travelToAdd, "<---- travel to ADD")
    // console.log(trip_id, "<--- trip id api");
    console.log(trip_id, "before post")
    console.log(newTravel, "before post")
    return axios
        .post(`https://tripappbe.onrender.com/trips/${trip_id}/travel`, newTravel)
        .then((travelData) => {
            console.log("GREEN LIGHT");
            //console.log(travelData.data, "<---- TRAVEL DATA API");
            //return travelData.data;
            return travelData
        })
        .catch((error) => {
            console.log("hello");
            console.log(error);
        });
};

