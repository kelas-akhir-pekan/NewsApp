import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  RefreshControl,
} from 'react-native';

const NewsScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigateToDetail = value => {
    navigation.navigate('DetailNewsScreen', {
      detail: value,
    });
  };
  const getData = () => {
    fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.antaranews.com%2Frss%2Fterkini.xml',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(json => {
        // console.warn('DATA BERITA',json)
        if (json?.status == 'ok') {
          const newData = json?.items.map(value => {
            return {
              title: value?.title,
              description: value?.content,
              image: value?.enclosure?.link,
              date: value?.pubDate,
            };
          });
          console.warn('Data baru', newData);
          setData(newData);
          AsyncStorage.setItem('data', JSON.stringify(newData));
        }
      })
      .catch(error => {
        console.error(error);
      });
  };
  useEffect(() => {
    //Run code..
    getData();
    // AsyncStorage.getItem('string').then(value => {
    //   alert(value);
    // });

    AsyncStorage.getItem('data').then(value => {
      console.error('data local', typeof value);
      const dataLocal = JSON.parse(value);
      setData(dataLocal);
    });
  }, []);

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.textHeader}>Latest News</Text>
      </View>
      {/* new content */}
      {/* <Text
        style={{color: 'red'}}
        onPress={() => {
          alert('simpan data');
          AsyncStorage.setItem('string', 'ini adalah string');
        }}>
        Simpan data local
      </Text>
      <Text
        style={{color: 'red'}}
        onPress={() => {
          alert('hapus data');
          AsyncStorage.removeItem('string');
        }}>
        hapus data local
      </Text> */}
      <ScrollView
        contentContainerStyle={{paddingBottom: 12}}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getData} />
        }>
        {data.map((value, key) => {
          return (
            <View style={styles.contentWrapper} key={key}>
              <Image source={{uri: value.image}} style={styles.imageContent} />
              <View style={styles.textWrapper}>
                <Text style={styles.textContent} numberOfLines={2}>
                  {value.title}
                </Text>
                <Text style={styles.textDescContent} numberOfLines={1}>
                  {value.description}
                </Text>
                <Text
                  style={styles.textMoreContent}
                  onPress={() => navigateToDetail(value)}>
                  Selengkapnya
                </Text>
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
