import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
} from 'react-native-reanimated';

const Mole = () => {
  const progress = useSharedValue(0);

  React.useEffect(() => {
    progress.value = withRepeat(withTiming(-80, {duration: 700}), 2, true);
  }, []);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: progress.value}],
    };
  });

  return (
    <Animated.View style={[styles.container, rStyle]}>
        <Image
          style={[styles.mole]}
          source={require('../../../assets/mole.png')}
        />
    </Animated.View>
  );
};

export default Mole;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',

    bottom: -35,
  },
  mole: {
    width: 100,
    resizeMode: 'contain',
    height: 100,
  },
});
