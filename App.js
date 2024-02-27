import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "./components/Reusable/Header";
import MyTrips from "./pages/MyTrips";
import SignIn from "./pages/SignIn";
import Welcome from "./pages/Welcome";
import SingleTrip from "./components/Trip/SingleTrip";
import { UserProvider } from "./contexts/UserContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <UserProvider>
        <Header />
        <NavigationContainer>
          {/* <Header /> */}
          <Stack.Navigator>
            <Stack.Screen name="My Trips" component={MyTrips} />
            <Stack.Screen name="LOGIN" component={Welcome} />
            <Stack.Screen name="Sign in" component={SignIn} />
            <Stack.Screen name="Single Trip" component={SingleTrip} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    </>
  );
}
