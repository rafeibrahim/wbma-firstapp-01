APIhooks:

const getUserMedia = async (token) => {
  console.log('im here', token);
  const json = await fetchGET('media/user', '', token);
  const result = await Promise.all(json.map(async (item) => {
    return await fetchGET('media', item.file_id);
  }));
  return result;
};


List:
const getMedia = async () => {
    try {
      let data = [];
      if (props.mode === 'all') {
        data = await getAllMedia();
      } else {
        const token = await AsyncStorage.getItem('userToken');
        data = await getUserMedia(token);
      }
      setMedia(data.reverse());
      setLoading(false);
    } catch (e) {
      console.log(e.message);
    }
  };


Home:
 <List navigation={navigation} mode={'all'}></List>

List.js:
/* eslint-disable max-len */
import React, {useContext, useEffect, useState} from 'react';
import {
  List as BaseList, Spinner, View,
} from 'native-base';
import ListItem from './ListItem';
import {MediaContext} from '../contexts/MediaContext';
import {getAllMedia, getUserMedia} from '../hooks/APIHooks';
import PropTypes from 'prop-types';
import {AsyncStorage} from 'react-native';
import {NavigationEvents} from 'react-navigation';

const List = (props) => {
  const [media, setMedia] = useContext(MediaContext);
  const [loading, setLoading] = useState(true);

  const getMedia = async (mode) => {
    try {
      let data = [];
      if (mode === 'all') {
        data = await getAllMedia();
      } else {
        const token = await AsyncStorage.getItem('userToken');
        data = await getUserMedia(token);
      }
      setMedia(data.reverse());
      setLoading(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getMedia(props.mode);
  }, []);

  return (
    <View>
      {loading ? (
        <Spinner/>
      ) : (
        <BaseList
          dataArray={media}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <ListItem
            navigation={props.navigation}
            singleMedia={item}
            mode={props.mode}
            getMedia={getMedia}
          />}
        />
      )}
      <NavigationEvents
        onDidBlur={() => {
          if (props.mode !== 'all') {
            getMedia('all');
          }
        }}
      />
    </View>
  );
};

List.propTypes = {
  navigation: PropTypes.object,
  mode: PropTypes.string,
};

export default List;




Listitem:
{props.mode === 'myfiles' &&
        <>
          <Button full warning>
            <Icon name='create'/>
          </Button>
          <Button
            full
            danger
            onPress={async () => {
              const token = await AsyncStorage.getItem('userToken');
              const del = await fetchDELETE('media', props.singleMedia.file_id,
                token);
              console.log('delete', del);
              if(del.message){
                props.getMedia();
              }
            }}
          >
            <Icon name='trash'/>
          </Button>
        </>
        }

