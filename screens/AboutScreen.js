import React from 'react';

import {
  View,
  Text
} from 'react-native';

import {
  Ionicons
} from '@expo/vector-icons';


import styles, {
  COLORS
} from '../styles/ProjectStyles';


export default function AboutScreen() {

  return (

    <View
      style={[
        styles.screen,
        styles.centerContent
      ]}
    >


      <Ionicons

        name="school-outline"

        size={85}

        color={COLORS.primary}

      />


      <Text style={styles.title}>

        Learning App

      </Text>


      <Text style={styles.subtitle}>

        ตัวอย่างสำหรับเรียนรู้

      </Text>


      <Text style={styles.highlight}>

        React Native Navigation

      </Text>


      <View style={styles.card}>


        <Text style={styles.cardTitle}>

          Bottom Tab Navigation

        </Text>


        <Text style={styles.plus}>

          +

        </Text>


        <Text style={styles.cardTitle}>

          Stack Navigation

        </Text>


      </View>


    </View>

  );

}