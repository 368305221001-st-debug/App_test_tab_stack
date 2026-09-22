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


export default function NavigationDetailScreen({
  route
}) {


  // ========================================
  // รับค่า parameter
  // ========================================

  const type =
    route.params?.type ||
    'Stack Navigation';

    // กำหนดค่า type = ค่าที่รับค่ามาจาก หน้า UI list
  // ========================================
  // DATA
  // ========================================

  const navigationData = {


    'Stack Navigation': {  // data ก้อนที่ 1 stack nabigation
  
      icon:
        'layers-outline',

      title:
        'Stack Navigation',

      description:
        'ใช้สำหรับเปิดหน้าจอเป็นลำดับ เหมือนการวางหน้าใหม่ซ้อนบนหน้าเดิม',

      example:
        'Home → Product → Product Detail',

      usage:
        'สามารถกด Back เพื่อย้อนกลับหน้าก่อนหน้าได้',

    },  


    'Tab Navigation': { // data ก้อนที่ 1 stack nabigation

      icon:
        'apps-outline',

      title:
        'Tab Navigation',

      description:
        'ใช้สำหรับสลับระหว่างหน้าหลักของแอป โดยมักแสดง Tab อยู่ด้านล่าง',

      example:
        'Home | Image | Video | Profile',

      usage:
        'เหมาะกับหน้าหลักที่ผู้ใช้ต้องสลับไปมา',

    },


    'Drawer Navigation': {  // data ก้อนที่ 1 stack nabigation

      icon:
        'menu-outline',

      title:
        'Drawer Navigation',

      description:
        'ใช้เมนูที่เลื่อนออกมาจากด้านข้างของหน้าจอ',

      example:
        'Menu → Home / Setting / Profile',

      usage:
        'เหมาะกับแอปที่มีเมนูหลายหัวข้อ',

    },

  };


  // ========================================
  // เลือกข้อมูล
  // ========================================

  const detail =      navigationData[type];  
  // กำหนดให้ detail อ่านค่าจาก navigationData  ก้อนที่ type


  return (

    <View
      style={[
        styles.screen,
        styles.centerContent
      ]}
    >


      <Ionicons  
        name={detail.icon}

        size={90}

        color={COLORS.primary}

      />


      <Text style={styles.title}>

        {detail.title}

      </Text>


      <View style={styles.card}>


        <Text
          style={
            styles.detailLabel
          }
        >

          หลักการ

        </Text>


        <Text
          style={
            styles.detailText
          }
        >

          {detail.description}

        </Text>



        <Text
          style={
            styles.detailLabel
          }
        >

          ตัวอย่าง

        </Text>


        <Text
          style={
            styles.exampleText
          }
        >

          {detail.example}

        </Text>



        <Text
          style={
            styles.detailLabel
          }
        >

          การใช้งาน

        </Text>


        <Text
          style={
            styles.detailText
          }
        >

          {detail.usage}

        </Text>


      </View>


      <Text style={styles.note}>

        กด ← ด้านบนเพื่อกลับไปหน้ารายการ

      </Text>


    </View>

  );

}