# React Native Tab + Stack Navigation Starter

โปรเจกต์ต้นแบบสำหรับรายวิชา **Mobile App Development / React Native**

โปรเจกต์นี้ใช้สำหรับเรียนรู้แนวคิด

- Bottom Tab Navigation
- Stack Navigation
- Nested Navigation
- การแยก `1 Screen = 1 File`
- การใช้ Style กลางร่วมกัน
- การ Build Android APK ด้วย Expo EAS บน Cloud

---

## 1. โครงสร้างโปรเจกต์

```text
App_tab_stack
│
├── App.js
├── app.json
├── eas.json
├── index.js
├── package.json
├── package-lock.json
│
├── navigation/
│   └── NavigationStack.js
│
├── screens/
│   ├── HomeScreen.js
│   ├── NavigationListScreen.js
│   ├── NavigationDetailScreen.js
│   └── AboutScreen.js
│
├── styles/
│   └── ProjectStyles.js
│
└── assets/
```

แนวคิดสำคัญ

```text
App.js
  │
  └── Bottom Tab Navigator
        │
        ├── Home
        │    └── HomeScreen.js
        │
        ├── Navigation
        │    └── NavigationStack.js
        │          │
        │          ├── NavigationListScreen.js
        │          └── NavigationDetailScreen.js
        │
        └── About
             └── AboutScreen.js
```

---

# 2. วิธีเริ่มใช้งานโปรเจกต์

## STEP 1 — สร้าง Repository ของตนเอง

1. Login GitHub
2. เปิด Repository ต้นแบบของอาจารย์
3. กด **Use this template**
4. เลือก **Create a new repository**
5. ตั้งชื่อ Repository ตามรูปแบบที่อาจารย์กำหนด เช่น

```text
RN-TabStack-รหัสนักศึกษา
```

ตัวอย่าง

```text
RN-TabStack-665412345001
```

> ไม่ควรแก้ไขหรือทำงานโดยตรงใน Repository ของอาจารย์

---

## STEP 2 — เปิด GitHub Codespaces

ใน Repository ของตนเอง

```text
Code
  ↓
Codespaces
  ↓
Create codespace on main
```

รอจน Codespace เปิดขึ้นมาใน Browser

---

# 3. ด่านที่ 1 — START

เปิด Terminal ใน Codespaces แล้วติดตั้ง Package ตาม `package-lock.json`

```bash
npm ci
```

> ใช้ `npm ci` แทน `npm install` เพื่อให้ Package ตรงกับชุดที่อาจารย์ทดสอบแล้ว

ห้ามลบไฟล์

```text
package-lock.json
```

และไม่ควรติดตั้ง Package เพิ่มเองใน Lab นี้

---

# 4. ด่านที่ 2 — CHECK

## 4.1 ทดสอบผ่าน Web

รัน

```bash
npm run web
```

ตรวจสอบว่า

- หน้า Home เปิดได้
- กด Tab `Navigation` ได้
- เห็นรายการ Stack / Tab / Drawer
- กดแต่ละรายการแล้วเข้า Detail ได้
- กด Back กลับได้
- หน้า About เปิดได้

เมื่อทดสอบเสร็จ กด

```text
Ctrl + C
```

เพื่อหยุด Server

---

## 4.2 ตรวจ Android Bundle

รัน

```bash
npx expo export --platform android
```

ถ้าสำเร็จ ควรเห็น

```text
Exported: dist
```

ถือว่าผ่านด่าน CHECK

---

## 4.3 ตรวจ Project

หากอาจารย์กำหนด ให้รัน

```bash
npx expo-doctor@latest
```

ควรไม่มี Error สำคัญก่อน Build

---

# 5. ด่านที่ 3 — CLOUD BUILD

## 5.1 Login Expo / EAS

```bash
npx eas-cli@latest login --no-browser
```

กรอก

```text
Email or username
Password
```

ตรวจสอบบัญชีด้วย

```bash
npx eas-cli@latest whoami
```

---

## 5.2 ตั้งค่า EAS

หาก Project ยังไม่เคยตั้งค่า EAS ให้รัน

```bash
npx eas-cli@latest build:configure
```

เลือก

```text
Android
```

โปรเจกต์จะมีไฟล์

```text
eas.json
```

---

## 5.3 ตรวจ `eas.json`

สำหรับการสร้าง APK ควรมี Profile ลักษณะนี้

```json
{
  "build": {
    "preview": {
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      }
    },
    "production": {}
  }
}
```

จุดสำคัญคือ

```json
"buildType": "apk"
```

---

## 5.4 Build APK

รัน

```bash
npx eas-cli@latest build -p android --profile preview
```

รอจน EAS Build แสดงสถานะ

```text
Queued
   ↓
In progress
   ↓
Finished
```

เมื่อ Build สำเร็จ จะมี Link สำหรับดาวน์โหลดไฟล์ `.apk`

---

# 6. ด่านที่ 4 — REAL APP

ดาวน์โหลดไฟล์ APK

```text
xxxxx.apk
```

แล้วติดตั้งบน

- โทรศัพท์ Android จริง หรือ
- Android Emulator เช่น LDPlayer

จากนั้นตรวจสอบว่า

- เปิด App ได้
- Bottom Tab ทำงาน
- Stack Navigation ทำงาน
- List → Detail ทำงาน
- Back ทำงาน

---

# 7. สิ่งที่นักศึกษาต้องแก้ใน Lab

นักศึกษาสามารถปรับได้ เช่น

- ชื่อ App
- ชื่อและรหัสนักศึกษา
- ข้อความหน้า Home
- ข้อความหน้า About
- สี Theme ใน `ProjectStyles.js`
- ข้อมูลในหน้า Detail

ตัวอย่าง

```text
HomeScreen.js
AboutScreen.js
ProjectStyles.js
NavigationDetailScreen.js
```

---

# 8. สิ่งที่ไม่ควรแก้ใน Lab นี้

เพื่อป้องกันปัญหา Dependency

ไม่ควรแก้

```text
Expo SDK Version
React Version
React Native Version
Navigation Package Version
package-lock.json
```

และไม่ควรใช้

```bash
npm install package-อื่น
```

โดยไม่ได้รับคำแนะนำจากผู้สอน

---

# 9. คำสั่งหลักที่ควรจำ

```bash
npm ci
```

```bash
npm run web
```

```bash
npx expo export --platform android
```

```bash
npx expo-doctor@latest
```

```bash
npx eas-cli@latest login --no-browser
```

```bash
npx eas-cli@latest whoami
```

```bash
npx eas-cli@latest build:configure
```

```bash
npx eas-cli@latest build -p android --profile preview
```

---

# 10. แนวคิด 4 ด่าน

```text
1. START
Template → Codespace → npm ci

        ↓

2. CHECK
Web Test
+
Android Export

        ↓

3. CLOUD BUILD
Expo / EAS
→ Build APK

        ↓

4. REAL APP
Download APK
→ Install Android
```

---

# 11. งานที่ต้องส่ง

ให้นักศึกษาส่งผ่าน Classroom ตามที่ผู้สอนกำหนด

1. GitHub Repository URL ของตนเอง
2. ภาพหน้าจอ EAS Build ที่สถานะ `Finished`
3. ภาพ App ที่ติดตั้งและเปิดใช้งานบน Android
4. หากกำหนดเพิ่มเติม ให้แนบไฟล์ APK หรือ Link สำหรับดาวน์โหลด

---

# Troubleshooting เบื้องต้น

## `npm ci` ไม่ผ่าน

ตรวจสอบว่า Repository มี

```text
package.json
package-lock.json
```

ครบทั้งสองไฟล์

---

## Web เปิดไม่ได้

ลอง

```bash
npm run web
```

แล้วอ่าน Error ที่ Terminal ก่อนแก้ Code

---

## Android Export ไม่ผ่าน

รัน

```bash
npx expo export --platform android
```

แล้วตรวจชื่อไฟล์และบรรทัด Error

---

## EAS Login เปิด localhost แล้วเข้าไม่ได้

ใน Codespaces ให้ใช้

```bash
npx eas-cli@latest login --no-browser
```

---

## จำง่าย ๆ

> **Screen = แสดงอะไร**  
> **Navigation = ไปไหน**  
> **Style = หน้าตาอย่างไร**  
> **EAS = Build App จริง**

---

**เป้าหมายของ Lab:**  
ให้นักศึกษาสามารถนำ React Native Project ที่ทำงานแล้ว ไป Build เป็น APK และติดตั้งใช้งานจริงบน Android ได้
<img width="960" height="215" alt="image" src="https://github.com/user-attachments/assets/cb7dc782-2e0b-43f0-a2f6-3963a0a57f44" />
