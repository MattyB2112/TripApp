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
      console.log("getting trip by ID");
      return response.data.trip;
    });
};

export const postTrip = (newTrip, signedInUser) => {
  const newTripObj = { newTrip, signedInUser };
  console.log(newTripObj);

  //not working yet
  return axios
    .post("https://tripappbe.onrender.com/trips/", newTripObj)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
