import React from 'react';
import { StatusBar, StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfo } from '../../../components/restaurant-info/restaurant-info';

export const RestaurantsScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar />
        </View>
        <View style={styles.list}>
          <RestaurantInfo />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue',
  },
});
