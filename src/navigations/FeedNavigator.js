import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import ListingsScreen from './../screens/ListingsScreen';
import ListingDetailsScreen from './../screens/ListingDetailsScreen';
import ListingDetailsScreen2 from './../screens/ListingDetailsScreen2';
const Stack = createStackNavigator()

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ 
    headerShown: true,
    presentation: 'modal'
  }}>
    <Stack.Screen 
      name="Listings" 
      component={ListingsScreen} 
      options={{
        headerTitle: 'Check in'
      }}
    />
    <Stack.Screen 
    name="ListingDetails" 
    component={ListingDetailsScreen} 
    options={{headerShown: false}}/>
    <Stack.Screen 
        name="ListingDetails2" 
        component={ListingDetailsScreen2} 
        options={{headerShown: false}}/>

  </Stack.Navigator>
)

export default FeedNavigator