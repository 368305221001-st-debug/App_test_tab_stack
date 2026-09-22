import { StyleSheet } from 'react-native';


// ========================================
// COLOR ของทั้ง Project
// ========================================

export const COLORS = {

  primary: '#4F46E5',

  background: '#F8FAFC',

  white: '#FFFFFF',

  textPrimary: '#1E293B',

  textSecondary: '#64748B',

  textNormal: '#475569',

};


// ========================================
// STYLE กลาง
// ========================================

const styles = StyleSheet.create({


  // ======================================
  // SCREEN
  // ======================================

  screen: {

    flex: 1,

    backgroundColor: COLORS.background,

    padding: 20,

  },


  centerContent: {

    justifyContent: 'center',

    alignItems: 'center',

  },


  // ======================================
  // TEXT
  // ======================================

  title: {

    fontSize: 28,

    fontWeight: 'bold',

    color: COLORS.textPrimary,

    marginBottom: 8,

  },


  subtitle: {

    fontSize: 16,

    color: COLORS.textSecondary,

    marginTop: 5,

  },


  highlight: {

    fontSize: 20,

    fontWeight: 'bold',

    color: COLORS.primary,

    marginTop: 8,

  },


  // ======================================
  // CARD
  // ======================================

  card: {

    width: '100%',

    backgroundColor: COLORS.white,

    padding: 20,

    borderRadius: 15,

    marginTop: 25,

    elevation: 4,

  },


  cardTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    color: COLORS.textPrimary,

    marginBottom: 10,

  },


  cardText: {

    fontSize: 16,

    color: COLORS.textNormal,

    marginVertical: 6,

  },


  // ======================================
  // MENU LIST
  // ======================================

  menu: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: COLORS.white,

    padding: 18,

    borderRadius: 15,

    marginBottom: 15,

    elevation: 3,

  },


  menuText: {

    flex: 1,

    marginLeft: 15,

  },


  menuTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    color: COLORS.textPrimary,

  },


  menuDescription: {

    fontSize: 14,

    color: COLORS.textSecondary,

    marginTop: 4,

  },


  // ======================================
  // DETAIL
  // ======================================

  detailLabel: {

    fontSize: 16,

    fontWeight: 'bold',

    color: COLORS.primary,

    marginTop: 15,

    marginBottom: 5,

  },


  detailText: {

    fontSize: 16,

    lineHeight: 24,

    color: COLORS.textNormal,

  },


  exampleText: {

    fontSize: 17,

    fontWeight: 'bold',

    color: COLORS.textPrimary,

    marginVertical: 5,

  },


  note: {

    fontSize: 14,

    color: COLORS.textSecondary,

    marginTop: 25,

  },


  // ======================================
  // ABOUT
  // ======================================

  plus: {

    fontSize: 30,

    fontWeight: 'bold',

    color: COLORS.primary,

    marginVertical: 8,

  },


  // ======================================
  // TAB BAR
  // ======================================

  tabBar: {

    height: 65,

    paddingTop: 5,

    paddingBottom: 8,

  },

});


export default styles;