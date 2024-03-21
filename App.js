/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/


import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{uri: './assets/Profile.jpg.jpg'}}
          style={styles.profilePicture}
        />
        <Text style={styles.studentName}>Lehlohonolo Lenesa</Text>
        <Text style={styles.studentNumber}>Student Number: 901016516</Text>
        <Text style={styles.semester}>Current Semester: 4</Text>
      </View>
      <View style={styles.gradesContainer}>
        <Text style={styles.sectionTitle}>Semester Grades:</Text>
        <View style={styles.gradeItem}>
          <Text>Database Systems: A</Text>
        </View>
        <View style={styles.gradeItem}>
          <Text>C++ Programming II: B+</Text>
        </View>
        <View style={styles.gradeItem}>
          <Text>Java Programming I: A-</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'skyblue ',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  studentName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  studentNumber: {
    fontSize: 16,
    marginBottom: 5,
  },
  semester: {
    fontSize: 16,
  },
  gradesContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  gradeItem: {
    marginBottom: 5,
  },
});

export default ProfileScreen;

