import React from 'react';

import {
  View,
  Text
} from 'react-native';

import {
  Ionicons
} from '@expo/vector-icons';


// ========================================
// STYLE
// ========================================

import styles, {
  COLORS } from '../styles/ProjectStyles';


export default function HomeScreen() {

  return (

    <View
      style={[
        styles.screen,
        styles.centerContent
      ]}
    >


      <Ionicons

        name="phone-portrait-outline"

        size={90}

        color={COLORS.primary}

      />


      <Text style={styles.title}>

        React Navigation

      </Text>


      <Text style={styles.subtitle}>

        ตัวอย่างการใช้งาน

      </Text>


      <Text style={styles.highlight}>

        Tab + Stack Navigation

      </Text>


      <View style={styles.card}>


        <Text style={styles.cardTitle}>

          Concept

        </Text>


        <Text style={styles.cardText}>

          1. Bottom Tab เป็นเมนูหลัก

        </Text>


        <Text style={styles.cardText}>

          2. Navigation Tab มี Stack ซ้อนอยู่

        </Text>


        <Text style={styles.cardText}>

          3. Stack เปิดหน้า List → Detail

        </Text>


      </View>


    </View>

  );

}