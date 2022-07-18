import React, {Component, useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {data} from '../data/data';
import FloatingButton from '../FloatingButton';
import {
  View,
  Image,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  ScrollView,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  const [liked, setLiked] = useState(false);
  const [chated, setChated] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({item, index}) => {
    console.log('랜더 아이템 목록입니다', item);
    return (
      <View>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.contentBox}
            onPress={() => navigation.navigate('제품')}>
            <View>
              <Image
                source={{uri: item.img}}
                style={{
                  width: 120,
                  height: 110,
                  borderRadius: 100 / 10,
                }}
              />
            </View>
            <View style={{paddingLeft: 15, flexShrink: 1}}>
              <Text
                style={{
                  fontSize: 19,
                  lineHeight: 23,
                  flexShrink: 1,
                }}>
                {item.title}
              </Text>
              <Text style={{color: 'grey', lineHeight: 25}}>{item.time}</Text>
              <Text style={{fontSize: 18, fontWeight: '700', lineHeight: 35}}>
                {item.price}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Pressable
                  onPress={() => setLiked(liked + 1)}
                  style={{flexDirection: 'row'}}>
                  <Icon
                    name={liked ? 'heart' : 'heart-outline'}
                    size={19}
                    color={liked ? '#c4c4c4' : 'black'}
                  />
                  <Text>{liked}</Text>
                </Pressable>
                <Pressable
                  onPress={() => setChated(chated + 1)}
                  style={{flexDirection: 'row', paddingLeft: 13}}>
                  <Icon
                    name={chated ? 'chatbubble' : 'chatbubble-outline'}
                    size={17}
                    color={chated ? '#c4c4c4' : 'black'}
                  />
                  <Text>{chated}</Text>
                </Pressable>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.headerContainer}>
            {modalVisible && <View style={styles.overlay} />}
            <Modal
              transparent={true}
              visible={modalVisible}
              animationType="fade">
              <View style={styles.modalView}>
                <TouchableOpacity style={styles.touchable}>
                  <Text style={styles.modalText}>여의도동</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable}>
                  <Text style={styles.modalText}>부평동</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touchable}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <Text style={styles.modalText}>내 동네 설정하기</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{width: 500, height: 600, top: 60}}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              />
            </Modal>
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.sideContainer}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.text}>청라 2동</Text>
                <Icon name="chevron-down" size={20} />
              </TouchableOpacity>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                  <Icon
                    style={styles.icon}
                    name="ios-search-outline"
                    size={25}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon style={styles.icon} name="options" size={25} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon
                    style={styles.icon}
                    name="ios-notifications-outline"
                    size={25}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id}
        />
      </ScrollView>
      <FloatingButton />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#c4c4c4',
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  picker: {
    width: 150,
    height: 45,
    borderColor: 'red',
    borderWidth: 1,
  },

  content: {
    flex: 1,
  },

  contentBox: {
    flexDirection: 'row',
    height: 135,
    borderBottomColor: '#c4c4c4',
    borderBottomWidth: 1,
    // marginHorizontal: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },

  footer: {
    height: 55,
    borderTopWidth: 1,
    borderTopColor: '#c4c4c4',
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  sideContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    width: 80,
    fontSize: 20,
    fontWeight: '700',
  },
  icon: {
    marginLeft: 10,
  },
  modalView: {
    width: '50%',

    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    top: 77,
    left: -10,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.32,
    shadowRadius: 4.1,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,

    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    textAlign: 'left',
  },
  overlay: {
    position: 'absolute',
    top: -50,
    left: -15,
    width: 400,
    height: 1000,
    opacity: 0.3,
    zIndex: 10,
  },
  touchable: {
    marginTop: 9,
  },
});
export default HomeScreen;
