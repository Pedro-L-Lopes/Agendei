import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import icon from "../../constants/icon";

import Home from "../home/Home";
import Calendar from "../calendar/Calendar";
import Profile from "../profile/Profile";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerTitleAlign: "center",
            tabBarShowLabel: false,
            headerTitle: () => {
              return (
                <Image source={icon.logo} style={{ width: 125, height: 29 }} />
              );
            },
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={icon.home}
                  style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={Calendar}
          options={{
            headerTitleAlign: "center",
            tabBarShowLabel: false,
            headerTitle: () => {
              return (
                <Image source={icon.logo} style={{ width: 125, height: 29 }} />
              );
            },
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={icon.calendar}
                  style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerTitleAlign: "center",
            tabBarShowLabel: false,
            headerTitle: () => {
              return (
                <Image source={icon.logo} style={{ width: 125, height: 29 }} />
              );
            },
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={icon.profile}
                  style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
