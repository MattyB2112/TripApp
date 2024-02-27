import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Button,
} from "react-native";
import Modal from "react-native-modal";
import SingleTrip from "./SingleTrip";

import { UserContext } from "../../contexts/UserContext";
import { getTrips, deleteTrip } from "../../api";

export default function TripList({ navigation }) {
  const [trips, setTrips] = useState([]);
  const { signedInUser, setSignedInUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [tripsChanged, setTripsChanged] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalName, setModalName] = useState("");
  const [modalDelete, setModalDelete] = useState("");

  useEffect(() => {
    getTrips().then((data) => {
      const signedInUserTrips = [];

      data.forEach((trip) => {
        trip.members.forEach((member) => {
          if (member.username === signedInUser.username) {
            signedInUserTrips.push(trip);
          }
        });
      });
      setTrips(signedInUserTrips);
      setIsLoading(false);
      setTripsChanged(false);
    });
  }, [tripsChanged]);

  function chooseTrip(id) {
    console.log("pressed button");
    const trip = trips.filter((trip) => {
      return trip._id === id;
    });
    navigation.navigate("Single Trip", { trip_id: id });
  }

  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  const doubleFunc = (name, id) => {
    handleModal();
    setModalName(name);
    setModalDelete(id);
  };

  function handleDelete(id) {
    deleteTrip(id).then(() => {
      setTripsChanged(true);
      handleModal();
    });
  }

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {/* <ScrollView> */}
        {trips.map((trip) => {
          return (
            <View key={trip._id} style={styles.tripItemContainer}>
              <Pressable onPress={() => chooseTrip(trip._id)}>
                <Text style={[styles.item, styles.titleText]}>{trip.name}</Text>
              </Pressable>
              <Pressable
                style={styles.deleteButton}
                onPress={() => doubleFunc(trip.name, trip._id)}
              >
                <Text style={[styles.item, styles.titleText]}>Delete</Text>
              </Pressable>
              <Modal
                size="sm"
                backdropOpacity={0.3}
                transparent={true}
                isVisible={isModalVisible}
              >
                <View
                  style={{
                    backgroundColor: "#D7CCB2",
                    height: 200,
                    padding: 5,
                    textAlign: "center",
                  }}
                >
                  <Text style={styles.modalHeader}>{"Warning!\n"}</Text>
                  <Text styles={styles.modalInfo}>
                    {`\nThis action cannot be undone. Are you sure you want to delete "${modalName}" and all the information within it?\n\n\n`}
                  </Text>
                  <View style={styles.modalButtonContainer}>
                    <Pressable
                      style={styles.cancelDelete}
                      onPress={handleModal}
                    >
                      <Text style={styles.cancelText}>🚫 Cancel</Text>
                    </Pressable>
                    <Pressable
                      style={styles.confirmDelete}
                      onPress={() => handleDelete(modalDelete)}
                    >
                      <Text style={styles.confirmText}>✔️ Delete trip</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
            </View>
          );
        })}
        {/* </ScrollView> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 20,
    backgroundColor: "#D7CCB2",
  },
  item: {
    padding: 15,
    fontSize: 15,
    marginTop: 5,
    borderColor: "#423219",
    borderWidth: 2,
    borderRadius: 5,
  },
  deleteButton: {
    justifyContent: "right",
  },
  text: {
    color: "black",
    textAlign: "center",
    fontSize: 40,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  tripItemContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    padding: 10,
  },
  modalHeader: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "red",
  },
  modalButtonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  cancelDelete: {
    backgroundColor: "red",
    padding: 5,
  },
  confirmDelete: {
    backgroundColor: "green",
    padding: 5,
  },
  confirmText: {
    fontSize: 25,
  },
  cancelText: {
    fontSize: 25,
  },
});
