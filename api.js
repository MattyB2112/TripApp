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
  return axios
    .delete(
      `https://tripappbe.onrender.com/trips/${trip_id}/travel/${travel_id}`
    )
    .then((response) => {
      return response;
    });
};

export const deleteStay = (trip_id, stay_id) => {
  return axios
    .delete(`https://tripappbe.onrender.com/trips/${trip_id}/stay/${stay_id}`)
    .then((response) => {
      return response;
    });
};

export const deleteActivity = (trip_id, activity_id) => {
  return axios
    .delete(
      `https://tripappbe.onrender.com/trips/${trip_id}/activities/${activity_id}`
    )
    .then((response) => {
      return response;
    });
};

export const deleteMember = (trip_id, member_username) => {
  return axios
    .delete(`https://tripappbe.onrender.com/trips/${trip_id}/members`, {
      data: member_username,
    })
    .then((response) => {
      return response;
    });
};

export const postTrip = (newTrip) => {
  return axios
    .post("https://tripappbe.onrender.com/trips", newTrip)
    .then((response) => {
      return response.data;
    });
};

export const postUser = (userToAdd) => {
  return axios
    .post("https://tripappbe.onrender.com/users", userToAdd)
    .then((response) => {
      return response.data;
    });
};

export const getUser = (username) => {
  return axios
    .get(`https://tripappbe.onrender.com/users/${username}`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};

export const patchTravel = (trip_id, travel_id, patchedTravel) => {
  return axios
    .patch(`https://tripappbe.onrender.com/trips/${trip_id}/travel/${travel_id}`, patchedTravel)
    .then((response) => {
      console.log(response)
      return response
    })
}

export const patchStay = (trip_id, stay_id, patchedStay) => {
  return axios
    .patch(`https://tripappbe.onrender.com/trips/${trip_id}/stay/${stay_id}`, patchedStay)
    .then((response) => {
      console.log(response)
      return response
    })
}

export const patchActivity = (trip_id, activity_id, patchedActivity) => {
  return axios
    .patch(`https://tripappbe.onrender.com/trips/${trip_id}/activities/${activity_id}`, patchedActivity)
    .then((response) => {
      console.log(response)
      return response
    })
}