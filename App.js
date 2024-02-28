import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "./components/Reusable/Header";
import SignIn from "./pages/SignIn";
import MyTrips from "./pages/MyTrips";
import SingleTrip from "./components/Trip/SingleTrip";
import { UserProvider } from "./contexts/UserContext"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <UserProvider>
        <Header />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Sign in" component={SignIn} />
            <Stack.Screen name="My Trips" component={MyTrips} />
            <Stack.Screen name="Single Trip" component={SingleTrip} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    </>
  );
}
