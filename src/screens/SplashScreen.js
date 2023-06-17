import React, {useEffect} from 'react';
import {View, Text, Button, StyleSheet, ActivityIndicator} from 'react-native';

const SplashScreen = ({navigation, route}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('NewsScreen');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>News App</Text>
      <ActivityIndicator size={'small'} color={'orange'} />
    </View>
  );
};
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'orange',
    marginBottom: 12,
  },
});
