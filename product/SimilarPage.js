import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

export default function SimilarPage() {
  const [items, setItems] = React.useState([
    {
      title: '꽃 판매합니다',
      price: '780,000원',
      src: 'https://cdn.pixabay.com/photo/2021/02/20/03/02/abstract-6032128__340.jpg',
    },
    {
      title: '오래 쓴 지갑!!',
      price: '🧡 나눔',
      src: 'https://cdn.pixabay.com/photo/2018/07/19/07/17/wallet-3548021__340.jpg',
    },
    {
      title: '아이패드 12.9 2021 ',
      price: '20,000원',
      src: 'https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049__340.jpg',
    },
    {
      title: 'AMETHYST',
      price: '15,000원',
      src: 'https://images.pexels.com/photos/11294856/pexels-photo-11294856.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    },
    {
      title: '카메라 판매합니다!!!',
      price: '100,000원',
      src: 'https://images.pexels.com/photos/10592693/pexels-photo-10592693.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    },
    {
      title: '맥북, 아이패드 미니 판매!!!!!!',
      price: '60,000원',
      src: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'NEPHRITIS',
      price: '44,000원',
      src: 'https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'BELIZE HOLE',
      price: '14,000원',
      src: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'WISTERIA',
      price: '22,000원',
      src: 'https://images.pexels.com/photos/1474234/pexels-photo-1474234.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'WIDJF',
      price: '32,000원',
      src: 'https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ]);

  return (
    <FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({item}) => (
        <View>
          <View>
            <Image
              source={{uri: item.src}}
              style={{
                width: 170,
                height: 150,
                borderRadius: 100 / 10,
              }}
            />
          </View>
          <View style={{marginTop: 5, width: 150}}>
            <Text
              style={styles.itemTitle}
              numberOfLines={1}
              ellipsizeMode="tail">
              {item.title}
            </Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
    marginTop: 10,
    paddingLeft: 10,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    borderWidth: 5,
    padding: 10,
    height: 150,
  },
  itemTitle: {
    fontSize: 15,
  },
  itemPrice: {
    fontSize: 13,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
