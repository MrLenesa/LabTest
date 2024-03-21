import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{uri: 'https://via.placeholder.com/150'}}
          style={styles.profilePicture}
        />
        <Text style={styles.studentName}>John Doe</Text>
        <Text style={styles.studentNumber}>Student Number: 123456789</Text>
        <Text style={styles.semester}>Current Semester: 3</Text>
      </View>
      <View style={styles.gradesContainer}>
        <Text style={styles.sectionTitle}>Semester Grades:</Text>
        <View style={styles.gradeItem}>
          <Text>Subject 1: A</Text>
        </View>
        <View style={styles.gradeItem}>
          <Text>Subject 2: B+</Text>
        </View>
        <View style={styles.gradeItem}>
          <Text>Subject 3: A-</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
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
