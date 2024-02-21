// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Welcome from "./pages/Welcome";
import Header from "./components/Reusable/Header";
import MyTrips from "./pages/MyTrips";

// import SignIn from "./pages/SignIn";
// import MyTrips from "./pages/MyTrips";

// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <Header />
      {/* <Welcome /> */}
      <MyTrips />
    </>
    /* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Sign in" component={SignIn} />
          <Stack.Screen name="My Trips" component={MyTrips} />
        </Stack.Navigator>
      </NavigationContainer> */
  );
}
