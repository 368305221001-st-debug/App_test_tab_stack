import React from 'react';

import {
  View,
  Text,
  Pressable
} from 'react-native';

import {   Ionicons  } from '@expo/vector-icons';


import styles, {   COLORS  } from '../styles/ProjectStyles';


export default function NavigationListScreen({
  navigation
}) {


  // ========================================
  // เปิด Detail
  // ========================================

  const openDetail = (type) => {

    navigation.navigate(

      'NavigationDetail',

      {
        type: type
      }

    );

  };


  return (

    <View style={styles.screen}>


      <Text style={styles.title}>

        ประเภทของ Navigation

      </Text>


      <Text style={styles.subtitle}>

        เลือกหัวข้อเพื่อดูรายละเอียด

      </Text>



      {/* =================================
          STACK 1
      ================================= */}

      <Pressable

        style={styles.menu}

        onPress={() =>
          openDetail(
            'Stack Navigation'
          )
        }

      >


        <Ionicons

          name="layers-outline"

          size={35}

          color={COLORS.primary}

        />


        <View style={styles.menuText}>


          <Text style={styles.menuTitle}>

            Stack Navigation

          </Text>


          <Text
            style={
              styles.menuDescription
            }
          >

            เปิดหน้าต่อกันเป็นลำดับ

          </Text>


        </View>


        <Ionicons

          name="chevron-forward"

          size={24}

          color={
            COLORS.textSecondary
          }

        />


      </Pressable>  



      {/* =================================
          TAB stack 2
      ================================= */}

      <Pressable

        style={styles.menu}

        onPress={() =>
          openDetail(
            'Tab Navigation'
          )
        }

      >


        <Ionicons

          name="apps-outline"

          size={35}

          color={COLORS.primary}

        />


        <View style={styles.menuText}>


          <Text style={styles.menuTitle}>

            Tab Navigation

          </Text>


          <Text
            style={
              styles.menuDescription
            }
          >

            สลับหน้าด้วย Tab

          </Text>


        </View>


        <Ionicons

          name="chevron-forward"

          size={24}

          color={
            COLORS.textSecondary
          }

        />


      </Pressable>  



      {/* =================================
          DRAWER  stack3
      ================================= */}

      <Pressable

        style={styles.menu}

        onPress={() =>
          openDetail(
            'Drawer Navigation'
          )
        }

      >


        <Ionicons

          name="menu-outline"

          size={35}

          color={COLORS.primary}

        />


        <View style={styles.menuText}>


          <Text style={styles.menuTitle}>

            Drawer Navigation

          </Text>


          <Text
            style={
              styles.menuDescription
            }
          >

            เมนูเลื่อนจากด้านข้าง

          </Text>


        </View>


        <Ionicons

          name="chevron-forward"

          size={24}

          color={
            COLORS.textSecondary
          }

        />


      </Pressable> 


    </View>

  );

}