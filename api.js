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
  trip_id,
  startDate,
  leaveTime,
  arriveDate,
  arriveTime,
  travelType,
  info
) => {
  const travelToAdd = {
    startdate: startDate,
    leavetime: leaveTime,
    arrivedata: arriveDate,
    arrivetime: arriveTime,
    type: travelType,
    info: info,
  };
  console.log(travelToAdd, "<---- travel to ADD");
  console.log(trip_id, "<--- trip id api");
  return axios
    .post(`https://tripappbe.onrender.com/trips/${trip_id}/travel`, travelToAdd)
    .then((travelData) => {
      console.log("GREEN LIGHT");
      console.log(travelData, "<---- TRAVEL DATA API");
      return travelData.data;
    })
    .catch((error) => {
      console.log("hello");
      console.log(error);
    });
};
