import React from 'react';
import {StyleSheet, Text, View, Image, FlatList, TouchableOpacity} from 'react-native';


const Header = (props) => {
  return (
    <View style={styles.headerContainer}>
      <Image
        //style={styles.headerImage}
        style={styles.headerImage}
        source={require('../assets/cat1.jpg')}
      />
      <Text style={styles.headerText}>Homeless Cats</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 2
  },
  headerImage: {
    position:'absolute',
    width: '100%',
    height: 200,
  },
  headerText: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    position: "absolute",
    right: 25,
    top: 30,
    backgroundColor: 'rgba(249, 194, 255, 0.2)',
    width: '30%',
    textAlign: "center",
    elevation: 2,
    color:'brown'
  },

});

export default Header;
