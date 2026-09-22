import React from 'react';

import {
  createNativeStackNavigator
} from '@react-navigation/native-stack';


import NavigationListScreen
  from '../screens/NavigationListScreen';

import NavigationDetailScreen
  from '../screens/NavigationDetailScreen';


const Stack =   createNativeStackNavigator();


export default function NavigationStack() {

  return (

    <Stack.Navigator>


      <Stack.Screen

        name="NavigationList"

        component={
          NavigationListScreen
        }

        options={{

          title:
            'ประเภท Navigation',

        }}

      />


      <Stack.Screen

        name="NavigationDetail"

        component={
          NavigationDetailScreen
        }

        options={({ route }) => ({

          title:
            route.params?.type ||
            'รายละเอียด',

        })}

      />


    </Stack.Navigator>

  );

}