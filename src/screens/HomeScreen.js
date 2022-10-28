import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
const fakeData = [
  {
    id: 1,
    image:
      'https://images1.content-hci.com/commimg/myhotcourses/blog/post/myhc_94121.jpg',
    name: 'image1',
  },
  {
    id: 2,
    image:
      'https://images1.content-hci.com/commimg/myhotcourses/blog/post/myhc_94121.jpg',
    name: 'image2',
  },
  {
    id: 3,
    image:
      'https://images1.content-hci.com/commimg/myhotcourses/blog/post/myhc_94121.jpg',
    name: 'image3',
  },
];
const windowWith = Dimensions.get('window').width;
const imageWith = windowWith / 2 - 16;
const imageHeight = 200;
const HomeScreen = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getData();
  }, []);
  const renderItem = ({item}) => (
    <View style={styles.itemStyle}>
      <View>
        <Image source={{uri: item?.avatar}} style={styles.imageStyle} />
      </View>

      <View style={styles.name}>
        <Text style={styles.titleName}>
          {item?.first_name} {item?.last_name}
        </Text>
        <Text style={styles.titleJob} numberOfLines={1}>
          {item?.employment?.title}
        </Text>
      </View>
    </View>
  );
  const getData = async () => {
    try {
      const res = await fetch(
        'https://random-data-api.com/api/users/random_user?size=10',
      );
      const json = await res.json();
      console.log('=========json===============>', json);
      setData(json);
    } catch (e) {
      console.log(e);
    }
  };
  const random_data = () => {
    const random = data[Math.floor(Math.random() * data.lenght)];
    console.log('========random============>', random);
    setData(random);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.headers} onPress={random_data}>
        <Text style={styles.title}>Fetch Random</Text>
      </TouchableOpacity>
      <View style={styles.center}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          numColumns={2}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headers: {
    marginTop: 20,
    backgroundColor: 'red',
    height: 44,
    width: 150,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00fa9a',
    justifyContent: 'space-between',
  },
  itemStyle: {
    width: imageWith,
    height: imageHeight,
    marginBottom: 4,
    marginHorizontal: 8,
    marginVertical: 8,
    borderRadius: 10,
  },
  imageStyle: {
    width: imageWith,
    height: 150,
    backgroundColor: 'white',
  },
  name: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 8,
  },
  titleName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  titleJob: {
    fontSize: 14,
    color: 'black',
  },
});
export default HomeScreen;
