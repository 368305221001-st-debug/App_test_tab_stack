import React from 'react';

import {   NavigationContainer  } from '@react-navigation/native';

import {  createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {   Ionicons} from '@expo/vector-icons';


// ========================================
// SCREEN
// ========================================

import HomeScreen   from './screens/HomeScreen';

import NavigationStack   from './navigation/NavigationStack';

import AboutScreen   from './screens/AboutScreen';


// ========================================
// STYLE
// ========================================

import styles, {   COLORS } from './styles/ProjectStyles';


// ========================================
// CREATE TAB
// ========================================

const Tab = createBottomTabNavigator();


// ========================================
// APP
// ========================================

export default function App() {

  return (

    <NavigationContainer>

      <Tab.Navigator

        initialRouteName="Home"

        screenOptions={({ route }) => ({

          headerTitleAlign: 'center',

          tabBarActiveTintColor:
            COLORS.primary,

          tabBarInactiveTintColor:
            COLORS.textSecondary,

          tabBarStyle:
            styles.tabBar,


          // =================================
          // ICON
          // =================================

          tabBarIcon: ({
            focused,
            color,
            size
          }) => {

            let iconName;


            if (route.name === 'Home') {

              iconName = focused
                ? 'home'
                : 'home-outline';

            }


            else if (
              route.name === 'Navigation'
            ) {

              iconName = focused
                ? 'navigate'
                : 'navigate-outline';

            }


            else if (
              route.name === 'About'
            ) {

              iconName = focused
                ? 'information-circle'
                : 'information-circle-outline';

            }


            return (

              <Ionicons

                name={iconName}

                size={size}

                color={color}

              />

            );

          },

        })}

      >


        <Tab.Screen

          name="Home"

          component={HomeScreen}

          options={{

            title: 'หน้าหลัก',

            tabBarLabel: 'Home',

          }}

        />


        <Tab.Screen

          name="Navigation"

          component={NavigationStack}

          options={{

            headerShown: false,

            tabBarLabel: 'Navigation',

          }}

        />


        <Tab.Screen

          name="About"

          component={AboutScreen}

          options={{

            title: 'เกี่ยวกับ',

            tabBarLabel: 'About',

          }}

        />


      </Tab.Navigator>


    </NavigationContainer>

  );

}