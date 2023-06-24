import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

const DetailNewsScreen = ({navigation,route}) => {
const detail = route.params.detail
console.warn(detail)
  const goBack =()=>{
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      {/* Header */}
       <View style={styles.header}>
          <Text style={styles.textHeader} onPress={goBack}>Kembali</Text>
       </View>

       {/* Image news */}
       <ScrollView>
       <Image  source={{uri:detail.image}} style={styles.image}/>
       <View style={{padding:12}}>
          <Text style={styles.title}>{detail.title}</Text>
          <Text style={styles.date}>{detail.date}</Text>
          <Text style={styles.description}>{detail.description}</Text>
         

       </View>
       </ScrollView>
    </View>
  );
};
export default DetailNewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 50,
    width: '100%',
    backgroundColor: 'orange',
    justifyContent: 'center',
    paddingHorizontal:12
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  image:{
    height:200,
    width:'100%',
    backgroundColor:'#e0e0e0'
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
    color:'black'
  },
 date:{
    color:'gray',
  },
  description:{
    color:'black',
    marginTop:12
  }
});
