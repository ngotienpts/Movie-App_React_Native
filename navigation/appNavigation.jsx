import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import MovieScreen from "../screens/MovieScreen";
import PersonScreen from "../screens/PersonScreen";
import SearchScreen from "../screens/SearchScreen";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="Movie"
                    component={MovieScreen}
                />
                <Stack.Screen
                    name="Person"
                    component={PersonScreen}
                    options={{presentation:'modal'}}
                    
                />
                <Stack.Screen
                    name="Search"
                    component={SearchScreen}
                    
                    
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
