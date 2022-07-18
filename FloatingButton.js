import React, {useReducer} from 'react';
import {
  TouchableOpacity,
  TouchableHighlight,
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  log,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const {width} = Dimensions.get('window');

const FAB_SIZE = 54;
const circleScale = (width / FAB_SIZE).toFixed(1);
const circleSize = circleScale * FAB_SIZE;
const dist = circleSize / 2 - FAB_SIZE;
const middleDist = dist / 1.41;

const ActionButton = ({icon, style, onPress}) => {
  return (
    <Animated.View style={[styles.actionBtn, style]}>
      <TouchableHighlight onPress={onPress} style={styles.actionBtn}>
        <Icon name={icon} size={34} color="white" />
      </TouchableHighlight>
    </Animated.View>
  );
};

const FloatingButton = () => {
  const [open, toggle] = useReducer(s => !s, false);

  const rotation = useDerivedValue(() => {
    return withTiming(open ? '0deg' : '135deg');
  }, [open]);

  const progress = useDerivedValue(() => {
    return open ? withSpring(1) : withSpring(0);
  });
  const translation = useDerivedValue(() => {
    return open ? withSpring(1, {stiffness: 80, damping: 8}) : withSpring(0);
  });

  const fabStyles = useAnimatedStyle(() => {
    const rotate = rotation.value;
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      ['#FF7E36', '#FF4A18'],
    );
    return {
      transform: [{rotate}],
      backgroundColor,
    };
  });

  const scalingStyles = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [0, circleScale]);

    return {
      transform: [{scale}],
    };
  });

  const translationStyles = (x, y, value) =>
    useAnimatedStyle(() => {
      const translate = interpolate(translation.value, [0, 1], [0, -value], {
        extrapolateLeft: Extrapolate.CLAMP,
      });
      const scale = interpolate(progress.value, [0, 1], [0, 1], {
        extrapolateLeft: Extrapolate.CLAMP,
      });
      if (x && y) {
        return {
          transform: [
            {translateX: translate},
            {translateY: translate},
            {scale},
          ],
        };
      } else if (x) {
        return {
          transform: [{translateX: translate}, {scale}],
        };
      } else {
        return {
          transform: [{translateY: translate}, {scale}],
        };
      }
    });

  return (
    <View style={styles.container}>
      <View style={styles.fabContainer}>
        <Animated.View style={[styles.expandingCircle, scalingStyles]} />
        <TouchableWithoutFeedback onPress={toggle}>
          <Animated.View style={[styles.fab, fabStyles]}>
            <Icon name="close" color="white" size={34} />
          </Animated.View>
        </TouchableWithoutFeedback>
        <ActionButton
          style={translationStyles(false, true, dist)}
          icon="gift-outline"
        />
        <ActionButton
          style={translationStyles(true, true, middleDist)}
          icon="ios-share"
        />
        <ActionButton
          style={translationStyles(true, false, dist)}
          icon="wallet-outline"
        />
      </View>
    </View>
  );
};

const CircleStyle = {
  width: FAB_SIZE,
  height: FAB_SIZE,
  borderRadius: FAB_SIZE,
  justifyContent: 'center',
  alignItems: 'center',
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    bottom: 50,
    right: 25,
  },
  fabContainer: {},
  fab: {
    tranform: [{rotate: '135deg'}],
    backgroundColor: '#FF7E36',
    ...CircleStyle,
  },
  expandingCircle: {
    ...CircleStyle,
    // transform: [{scale: 8}],
    backgroundColor: '#FF7E36',
    position: 'absolute',
    zIndex: -1,
  },
  actionBtn: {
    ...CircleStyle,
    backgroundColor: '#FF5A18',
    position: 'absolute',
    zIndex: -1,
    // transform: [{translateX: -100}],
  },
});
export default FloatingButton;
