import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

const NewsScreen = () => {
  const [data, setData] = useState([
    {
      title: 'Harbolnas 2023',
      description:
        'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum vlorem ipsum vvlorem ipsum lorem ipsum vlorem ipsum lorem ipsum lorem ipsum lorem ipsum vvlorem ipsum vvlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum vlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      image:
        'https://imagekit.io/blog/content/images/2019/12/image-optimization.jpg',
    },
    {
      title: 'Argentina vs Indonesia 2023',
      description: 'lorem ipsum',
      image:
        'https://imagekit.io/blog/content/images/2019/12/image-optimization.jpg',
    },
    {
      title: 'Messi gak jadi datang ke Indonesia',
      description: 'lorem ipsum',
      image:
        'https://imagekit.io/blog/content/images/2019/12/image-optimization.jpg',
    },
  ]);
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.textHeader}>Latest News</Text>
      </View>
      {/* new content */}
      <ScrollView contentContainerStyle={{paddingBottom: 12}}>
        {data.map((value, key) => {
          return (
            <View style={styles.contentWrapper} key={key}>
              <Image source={{uri: value.image}} style={styles.imageContent} />
              <View style={styles.textWrapper}>
                <Text style={styles.textContent}>{value.title}</Text>
                <Text style={styles.textDescContent} numberOfLines={1}>
                  {value.description}
                </Text>
                <Text style={styles.textMoreContent}>Selengkapnya</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
export default NewsScreen;

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
    alignItems: 'center',
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  contentWrapper: {
    height: 280,
    flex: 1,
    marginHorizontal: 12,
    marginTop: 12,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 2,
    overflow: 'hidden',
  },
  imageContent: {
    height: 190,
    width: '100%',
  },
  textContent: {
    color: 'black',
    fontWeight: 'bold',
  },
  textDescContent: {
    color: 'black',
  },
  textMoreContent: {
    color: 'orange',
    textDecorationLine: 'underline',
  },
  textWrapper: {
    padding: 12,
  },
});
