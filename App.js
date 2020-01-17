import React from 'react';
import {StyleSheet, Text, View, Image, FlatList, TouchableOpacity, StatusBar} from 'react-native';
import List from './components/List';
import Header from './components/Header.js'

const mediaArray = [
  {
    'key': '0',
    'title': 'Leo',
    'description': 'Nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    'thumbnails': {
      w160: 'http://placekitten.com/160/161',
    },
    'filename': 'http://placekitten.com/2048/1920',
  },
  {
    'key': '1',
    'title': 'Bunny',
    'description': 'Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
    'thumbnails': {
      w160: 'http://placekitten.com/160/162',
    },
    'filename': 'http://placekitten.com/2041/1922',
  },
  {
    'key': '2',
    'title': 'Alex',
    'description': 'Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
    'thumbnails': {
      w160: 'http://placekitten.com/160/163',
    },
    'filename': 'http://placekitten.com/2039/1920',
  },
];

const App = () => {
  return (
    <View style={styles.appContainer}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <Header />
      <List mediaArray={mediaArray}/>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'rgb(138, 199, 91)'
  },
});

export default App;

// <View style={styles.container}>
//   <Text>Open up App.js to start working on your app!</Text>
// </View>

// <View style={{marginTop: 19}}>
//   <FlatList
//     data={mediaArray}
//     renderItem={({item}) => {
//       return (
//         <TouchableOpacity>
//           <View style={styles.container}>
//             <Image
//               style={styles.image}
//               source={{uri: item.thumbnails.w160}}
//             />
//             <View style={styles.details}>
//               <Text style={styles.title}>{item.title}</Text>
//               <Text style={styles.description}>{item.description}</Text>
//             </View>
//           </View>
//         </TouchableOpacity>
//       );
//     }}
//   />
// </View>

// const styles = StyleSheet.create({
//   container: {
//     // backgroundColor: '#fff',
//     marginTop: 5,
//     paddingTop: 10,
//     flex: 1,
//     flexDirection: 'row',
//     backgroundColor: '#f9c2ff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   details: {
//     width: '45%',
//     flex: 1,
//     flexDirection: 'column',
//     padding: 10,
//   },
//   image: {
//     width: '20%',
//     height: 200,
//     flex: 1,
//     flexDirection: 'row',
//     margin: 10,
//   },
//   title: {
//     fontWeight: 'bold',
//   },
//   description: {
//     fontSize: 11,
//   },
// });
