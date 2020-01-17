import React from 'react';
import {StyleSheet, Text, View, Image, FlatList, TouchableOpacity} from 'react-native';


const Header = (props) => {
  return (
    <View >
      <Image
        //style={styles.headerImage}
        syle={{width: '100%', height: 200}}
        source={{uri: 'http://placekitten.com/160/163'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: 200,
  },

});

export default Header;
