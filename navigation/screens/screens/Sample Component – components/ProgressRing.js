import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import colors from '../theme/colors';

export default function ProgressRing({ percentage, label }) {
  return (
    <View style={styles.wrapper}>
      <AnimatedCircularProgress
        size={100}
        width={8}
        fill={percentage}
        tintColor={colors.accent}
        backgroundColor={colors.lightGray}>
        {() => <Text style={styles.text}>{percentage}%</Text>}
      </AnimatedCircularProgress>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { alignItems: 'center' },
  text: { fontFamily: 'Montserrat-Bold', fontSize: 18, color: colors.charcoal },
  label: { marginTop: 8, fontFamily: 'OpenSans-Regular', color: colors.charcoal },
});
