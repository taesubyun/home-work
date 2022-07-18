import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SimilarPage from '../product/SimilarPage';

const ProductScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View>
          <ImageBackground
            source={require('../assets/dummy.jpg')}
            style={{
              resizeMode: 'cover',
              width: '100%',
              height: 360,
            }}>
            <View
              style={{
                padding: 12,
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                  <Icon
                    style={{color: '#c4c4c4', paddingRight: 14}}
                    size={23}
                    name="share-outline"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon
                    style={{color: '#c4c4c4'}}
                    size={23}
                    name="ellipsis-horizontal"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
          {/* ////////////////////// */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 15,
              height: 75,
              paddingHorizontal: 7,
              borderBottomWidth: 1,
              borderBottomColor: '#c4c4c4',
            }}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Image
                  source={require('../assets/userImg.png')}
                  style={{width: 40, height: 40}}
                />
              </View>
              <View style={{paddingLeft: 8}}>
                <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                  판매합니다.
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: 'grey',
                    fontWeight: 'bold',
                    lineHeight: 22,
                  }}>
                  청라동
                </Text>
              </View>
            </View>
          </View>
          {/* ////////////////////// */}
          <View
            style={{
              flex: 1,
              marginHorizontal: 15,
              borderBottomWidth: 1,
              borderBottomColor: '#c4c4c4',
            }}>
            <View style={{paddingVertical: 13}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                스타벅스 쿨러 아이스박스 팝니다!!
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 3,
              }}>
              <Text
                onPress={() => alert('카테고리로 이동!!')}
                style={{textDecorationLine: 'underline', color: 'grey'}}>
                {' '}
                기타 중고용품
              </Text>
              <Text style={{color: 'grey', fontWeight: '300'}}>
                {' '}
                ・ 10분 전
              </Text>
            </View>
            <View style={{paddingTop: 12}}>
              <View>
                <Text style={{fontSize: 16}}>
                  스타벅스 쿨러 스타벅스 아이아박스 25000원 판매합니다. 몇 번
                  사용하지 않은 제품입니다. 깨끗합니다! 청라중학교 인근입니다.
                  스타벅스 쿨러 스타벅스 아이아박
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingTop: 44,
                  paddingBottom: 21,
                }}>
                <Text style={{fontWeight: '300', color: 'grey'}}>채팅 2</Text>
                <Text style={{fontWeight: '300', color: 'grey'}}> ・ </Text>
                <Text style={{fontWeight: '300', color: 'grey'}}>관심 5</Text>
                <Text style={{fontWeight: '300', color: 'grey'}}> ・ </Text>
                <Text style={{fontWeight: '300', color: 'grey'}}>조회 37</Text>
              </View>
            </View>
          </View>
          {/* ////////////////////// */}
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 15,
              paddingVertical: 20,
              borderBottomWidth: 1,
              borderBottomColor: '#c4c4c4',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontWeight: '600', fontSize: 17}}>
              이 게시글 신고하기
            </Text>
            <View>
              <TouchableOpacity>
                <Icon name="arrow-forward" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          {/* ////////////////////// */}
        </View>
        <View>
          <SimilarPage />
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          height: 96,
          padding: 13,
          borderTopWidth: 1,
          borderTopColor: '#c4c4c4',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <TouchableOpacity>
              <Icon name="heart-outline" size={24} color="grey" />
            </TouchableOpacity>
          </View>
          <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', lineHeight: 22}}>
              220,000원
            </Text>
            <Text style={{fontSize: 13, fontWeight: '500', color: 'grey'}}>
              가격 제안 불가
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
              width: 100,
              height: 43,
              backgroundColor: 'orange',
              borderRadius: 10,
            }}
            onPress={() => Alert.alert('채팅하기')}>
            <Text style={{color: 'white', fontWeight: '700', fontSize: 18}}>
              채팅하기
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductScreen;
