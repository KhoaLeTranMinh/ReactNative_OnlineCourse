import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {Component} from 'react';
import axios from 'axios';
import BackgroundView from './components/BackgroundView';
import AntIcon from 'react-native-vector-icons/AntDesign';

export default class DemoCallAPI extends Component {
  // componentDidMount() {
  //   fetch('http://svcy3.myclass.vn/api/Product')
  //     .then(response => response.json())
  //     .then(data => console.log('result', data))
  //     .catch(err => console.log(err));
  // }

  state = {
    listProduct: [],
    listCategory: [],
  };

  renderListCategory = () => {
    return this.state.listCategory.map(item => {
      return (
        <Text
          style={styles.categoryText}
          key={item.id}
          onPress={() => this.onPressCategory(item.id)}>
          {item.category}
        </Text>
      );
    });
  };

  renderItem = ({item}) => {
    return (
      <View style={styles.productItemContainer}>
        <AntIcon name="hearto" size={30} style={styles.productIcon} />
        <Image source={{uri: item.image}} style={styles.productImage} />
        <Text style={styles.productNameText}>{item.name}</Text>
        <Text style={styles.productPriceText}>$ {item.price}</Text>
      </View>
    );
  };

  onPressCategory = categoryId => {
    axios({
      url: `http://svcy3.myclass.vn/api/Product/getProductByCategory?categoryId=${categoryId}`,
      method: 'GET',
    })
      .then(response => this.setState({listProduct: response.data.content}))
      .catch(error => console.log(error));
  };

  // componentDidMount() {
  //   const getListProduct = axios({
  //     url: 'http://svcy3.myclass.vn/api/Product',
  //     method: 'GET',
  //   });
  //   const getListCategory = axios({
  //     url: 'http://svcy3.myclass.vn/api/Product/getAllCategory',
  //     method: 'GET',
  //   });

  //   Promise.all([getListProduct, getListCategory])
  //     .then(response => {
  //       const [responseListProduct, responseListCategory] = response;
  //       this.setState({
  //         listProduct: responseListProduct.data.content,
  //         listCategory: responseListCategory.data.content,
  //       });
  //     })
  //     .catch(err => console.log(err));
  // }

  fetchAPI = async () => {
    console.log('fetchAPI');
    const getListProduct = () =>
      axios({
        url: 'http://svcy3.myclass.vn/api/Product',
        method: 'GET',
      });
    const getListCategory = () =>
      axios({
        url: 'http://svcy3.myclass.vn/api/Product/getAllCategory',
        method: 'GET',
      });

    // const {
    //   data: {content: listCategory},
    // } = await axios({
    //   url: 'http://svcy3.myclass.vn/api/Product/getAllCategory',
    //   method: 'GET',
    // });
    // const {
    //   data: {content: listProduct},
    // } = await axios({
    //   url: 'http://svcy3.myclass.vn/api/Product',
    //   method: 'GET',
    // });
    // this.setState({listCategory, listProduct});
    try {
      const [responseListProduct, responseListCategory] = await Promise.all([
        getListProduct(),
        getListCategory(),
      ]);

      this.setState({
        listProduct: responseListProduct.data.content,
        listCategory: responseListCategory.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchAPI();
  }

  render() {
    return (
      <BackgroundView>
        <SafeAreaView>
          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <AntIcon name="close" size={30} color="#fff" />
              <AntIcon name="filter" size={30} color="#fff" />
            </View>
            <ScrollView
              style={{marginBottom: 20}}
              horizontal
              showsHorizontalScrollIndicator={false}>
              {this.renderListCategory()}
            </ScrollView>
            <FlatList
              contentContainerStyle={{paddingBottom: 220}}
              data={this.state.listProduct}
              renderItem={this.renderItem}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </SafeAreaView>
      </BackgroundView>
    );
  }
}

const styles = StyleSheet.create({
  container: {paddingHorizontal: 20},
  headerContainer: {
    height: 50,
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  categoryText: {
    color: '#fff',
    textTransform: 'capitalize',
    fontSize: 22,
    marginRight: 30,
    fontWeight: '800',
  },
  productItemContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 20,
    height: 280,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  productIcon: {alignSelf: 'flex-end'},
  productImage: {height: 100, width: 200},
  productNameText: {
    fontSize: 22,
    fontWeight: '800',
  },
  productPriceText: {
    fontWeight: '600',
  },
});
