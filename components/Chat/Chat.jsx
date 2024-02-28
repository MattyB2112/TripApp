import { View, TextInput, Text, StyleSheet } from "react-native";
import io from "socket.io-client";
import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default class Chat extends React.Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = { messageContent: "" };
  }

  componentDidMount = () => {
    this.socket = io("http://localhost:9090");
  };

  submitChatMessage() {
    this.socket.emit("chatMessage", {
      messageSender: this.context.signedInUser.username,
      tripId: "65ddcf8d42208a1f73d7e3bf",
      messageContent: this.state.messageContent,
    });
    console.log(this.state.messageContent);
    this.setState({ messageContent: "" });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.chatHeading}>Chat</Text>
        <View style={styles.textInputBox}>
          <TextInput
            style={{
              height: 40,
              borderWidth: 2,
              backgroundColor: "white",
              justifyContent: "center",
              padding: 5,
              borderRadius: 4,
            }}
            autoCorrect={false}
            onSubmitEditing={() => this.submitChatMessage()}
            value={this.state.messageContent}
            onChangeText={(messageContent) => {
              this.setState({ messageContent });
            }}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  chatHeading: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 15,
    paddingBottom: 15,
    textShadowColor: "#B2A59B",
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 4,
  },
});
