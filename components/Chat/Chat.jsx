import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
// import theSocket from "../../socket";
import io from "socket.io-client";
import React, { useState, useContext, useEffect, useCallback } from "react";
import { UserContext } from "../../contexts/UserContext";
import { getMessages } from "../../api";

export default function Chat({ chosenTrip, setModifyTrip }) {
  const [messages, setMessages] = useState([]);
  const [messageBody, setMessageBody] = useState("");
  const [socket, setSocket] = useState(null);
  const { signedInUser, setSignedInUser } = useContext(UserContext);
  const [messagesChanged, setMessagesChanged] = useState(false);
  const theSocket = io("http://localhost:9090");

  useEffect(() => {
    getMessages(chosenTrip._id).then((data) => {
      const theMessages = data.data.messages;
      const tripMessages = [];
      theMessages.map((message) => {
        if (message.tripId === chosenTrip._id) {
          tripMessages.push(message);
        }
      });
      setMessages(tripMessages);
      setMessagesChanged(false);
    });
  }, [messagesChanged]);

  useEffect(() => {
    theSocket.emit("joinTrip", chosenTrip._id);
    theSocket.on("chatMessage", (message) => {
      console.log("received message: ", message);
    });
    return () => {
      theSocket.disconnect();
    };
  }, [messagesChanged]);

  const sendMessage = () => {
    if (theSocket && messageBody !== "") {
      const messageObj = {
        messageSender: signedInUser.username,
        tripId: chosenTrip._id,
        messageContent: messageBody,
      };
      theSocket.emit("chatMessage", messageObj);

      setMessageBody("");
      setMessagesChanged(true);
    }
  };

  return (
    <View styles={styles.container}>
      {messages.map((message) => {
        return (
          <View key={message._id}>
            <Text>
              {message.messageSender}
              {" at "}
              {message.messageDate.slice(11, 16)}
            </Text>
            <Text>{message.messageContent}</Text>
          </View>
        );
      })}

      <View style={styles.boxAndButton}>
        <TextInput
          style={{
            height: 40,
            borderWidth: 2,
            backgroundColor: "white",
            justifyContent: "center",
            padding: 5,
            bottom: 0,
          }}
          autoCorrect={false}
          value={messageBody}
          onChangeText={(messageBody) => {
            setMessageBody(messageBody);
          }}
        />
        <Button
          style={{ width: 400 }}
          title="Send"
          onPress={() => sendMessage()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatHeading: {
    fontSize: 20,
    textAlign: "center",
  },
  sentBy: {
    padding: 3,
  },
  messageBody: {
    backgroundColor: "white",
    borderRadius: 4,
    padding: 5,
    fontSize: 15,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 5,
  },
  boxAndButon: {
    verticalAlign: "bottom",
    marginTop: 100,
  },
});
