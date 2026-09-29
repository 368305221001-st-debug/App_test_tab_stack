import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ==========================================
// 1. ข้อมูลสัตว์ Big 7 แห่งทับลาน
// ==========================================
const BIG_7_DATA = [
  {
    id: '1',
    name: 'เสือโคร่ง (Tiger)',
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=500',
    desc: 'ดัชนีชี้วัดความสมบูรณ์ของป่าทับลาน เป็นผู้ล่าสูงสุดบนยอดห่วงโซ่อาหาร มีการลาดตระเวนเข้มงวดเพื่อคุ้มครองถิ่นอาศัย',
  },
  {
    id: '2',
    name: 'ช้างป่า (Elephant)',
    image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=500',
    desc: 'สัตว์เลี้ยงลูกด้วยนมขนาดใหญ่ที่สุดในทับลาน มักใช้วงจรเคลื่อนย้ายระหว่างป่าทับลานและเขาใหญ่',
  },
  {
    id: '3',
    name: 'กระทิง (Gaur)',
    image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=500',
    desc: 'สัตว์เคี้ยวเอื้องขนาดใหญ่ มักพบรวมฝูงหากินตามทุ่งหญ้าและชายป่าทับลาน',
  },
  {
    id: '4',
    name: 'วัวแดง (Banteng)',
    image: 'https://images.unsplash.com/photo-1541414779316-956a57545104?w=500',
    desc: 'สัตว์ป่าหายากที่มีลำตัวสีแดงเปรียบเสมือนวัวบ้าน แต่มีลำตัวและวงขาขาวเป็นเอกลักษณ์เฉพาะ',
  },
  {
    id: '5',
    name: 'เสือดาว / เสือดำ (Leopard)',
    image: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=500',
    desc: 'นักล่าผู้คล่องแคล่ว สามารถปีนต้นไม้ได้อย่างชำนาญ พบกระจายตัวในพื้นที่ป่าลึกของทับลาน',
  },
  {
    id: '6',
    name: 'หมีควาย (Asiatic Black Bear)',
    image: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?w=500',
    desc: 'หมีขนาดใหญ่ มีรูปตัว V สีขาวที่หน้าอก ชอบกินผลไม้และน้ำผึ้งเป็นอาหาร',
  },
  {
    id: '7',
    name: 'เลียงผา (Mainland Serow)',
    image: 'https://images.unsplash.com/photo-1574063413132-355dbfd83e08?w=500',
    desc: 'สัตว์ป่าสงวนตามหน้าผาสูงชัน มีความเชี่ยวชาญในการปีนป่ายเขาหินปูนในพื้นที่ทับลาน',
  },
];

// ==========================================
// 2. หน้าหลัก (Home Screen) - แสดงเมนู Big 7
// ==========================================
function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.mainTitle}>🌳 Big 7 สัตว์ป่าทับลาน</Text>
      <Text style={styles.subTitle}>อุทยานแห่งชาติทับลาน มรดกทางธรรมชาติ</Text>

      {BIG_7_DATA.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.card}
          onPress={() => navigation.navigate('Detail', { animal: item })}
        >
          <Image source={{ uri: item.image }} style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardDesc} numberOfLines={2}>
              {item.desc}
            </Text>
            <Text style={styles.readMore}>กดเพื่อดูข้อมูลเพิ่มเติม ➔</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

// ==========================================
// 3. หน้าแสดงรายละเอียด (Detail Screen)
// ==========================================
function DetailScreen({ route }) {
  const { animal } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: animal.image }} style={styles.detailImage} />
      <View style={styles.detailCard}>
        <Text style={styles.detailTitle}>{animal.name}</Text>
        <Text style={styles.detailText}>{animal.desc}</Text>
      </View>
    </ScrollView>
  );
}

// ==========================================
// 4. ระบบ Navigation
// ==========================================
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#1e3a8a' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'อุทยานแห่งชาติทับลาน' }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={({ route }) => ({ title: route.params.animal.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ==========================================
// 5. การตกแต่ง Style
// ==========================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    padding: 15,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    textAlign: 'center',
    marginTop: 10,
  },
  subTitle: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 3,
    flexDirection: 'row',
  },
  cardImage: {
    width: 110,
    height: 110,
  },
  cardContent: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  cardDesc: {
    fontSize: 12,
    color: '#475569',
    marginTop: 4,
  },
  readMore: {
    fontSize: 11,
    color: '#2563eb',
    fontWeight: 'bold',
    marginTop: 6,
  },
  detailImage: {
    width: '100%',
    height: 260,
    borderRadius: 12,
  },
  detailCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginTop: 15,
    elevation: 2,
  },
  detailTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 15,
    lineHeight: 24,
    color: '#334155',
  },
});
