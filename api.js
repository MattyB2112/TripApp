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

export const postTravel = (trip_id, newTravel) => {
  return axios
    .post(`https://tripappbe.onrender.com/trips/${trip_id}/travel`, newTravel)
    .then((travelData) => {
      return travelData;
    });
};
