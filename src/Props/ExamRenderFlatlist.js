import {Text, View, StyleSheet, FlatList} from 'react-native';
import React, {Component} from 'react';
import Alto_icon from '../images/Alto_icon.png';
import Pillar_icon from '../images/Pillar_icon.png';
import Genshin_icon from '../images/Genshin_icon.png';
import Among_icon from '../images/Among_icon.png';
import CardGameItem from './CardGameItem';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ExamRenderFlatList extends Component {
  listGame = [
    {
      id: 0,
      title: "Alto's Odyssey",
      icon: Alto_icon,
      subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
      backgroundColor: '#824671CC',
    },
    {
      id: 1,
      title: 'The Pillar',
      icon: Pillar_icon,
      subTitle: 'Dozens of challenging puzzles to solve!',
      backgroundColor: '#ab784fCC',
    },
    {
      id: 2,
      title: 'Genshin Impact',
      icon: Genshin_icon,
      subTitle:
        'Step into Teyvat, a vast world teeming with life and flowing with elemental energy',
      backgroundColor: '#3e3024CC',
    },
    {
      id: 3,
      title: 'Among Us',
      icon: Among_icon,
      subTitle: 'Beware of the importer',
      backgroundColor: '#ffde29CC',
    },
  ];

  renderGameItem = ({item: game, index}) => (
    <CardGameItem
      key={index}
      backgroundColor={game.backgroundColor}
      title={game.title}
      icon={game.icon}
      subTitle={game.subTitle}
    />
    // <View style={{backgroundColor: 'red', height: 100}} />
  );

  render() {
    return (
      <View style={styles.container}>
        <Text>ExamRenderFlatList</Text>
        <Icon name="rocket" size={30} color="#900" />
        <FlatList
          style={{flexGrow: 0}}
          data={this.listGame}
          renderItem={this.renderGameItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
});
