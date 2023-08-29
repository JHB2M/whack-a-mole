import React, {Dispatch, SetStateAction, useEffect} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import Mole from './Mole';

const url = `../../assets/hole.png`;
const HoleCard = ({
  item,
  score,
  setScore,
}: {
  item: any;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
}) => {
  const progress = useSharedValue(0);
  const onPress = () => {
    setScore(prevScore => prevScore + 1);
  };

  

  
  return (
    <View style={styles.container}>
        <View style ={styles.imageContainer}>

      <Image style={styles.image} source={require(url)} />
      </View>
      {item.isMole ? (
        <Animated.View style={[styles.mole]}>
          <TouchableOpacity onPress={onPress} >
            <Mole />
          </TouchableOpacity>
        </Animated.View>
      ) : null}
    </View>
  );
};

export default HoleCard;

const styles = StyleSheet.create({
  container: {
    padding:20,
  },
  imageContainer:{
  },
  image: {
    resizeMode: 'center',
    width: 100,
    height: 100,
  },
  mole:{
  }
});
