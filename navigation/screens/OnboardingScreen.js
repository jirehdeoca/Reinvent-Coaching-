import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Dimensions } from 'react-native';
import colors from '../theme/colors';
import typography from '../theme/typography';

const { width } = Dimensions.get('window');

export default function OnboardingScreen({ navigation }) {
  const cards = [
    { title: 'Transforming Leaders.', subtitle: 'Shaping Destinies.' },
    { title: 'Choose Your Role', subtitle: 'Member / Coach / Trainer' },
    { title: 'What Are You Into?', subtitle: 'Leadership, Faith, Ontology' },
  ];

  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      {cards.map((c, i) => (
        <View key={i} style={[styles.card, { width }]}>
          <Text style={typography.heading}>{c.title}</Text>
          <Text style={[typography.body, { marginTop: 16 }]}>{c.subtitle}</Text>
          <View style={{ marginTop: 32 }}>
            <Button
              title={i === cards.length - 1 ? 'Get Started' : 'Next'}
              color={colors.primary}
              onPress={() =>
                i === cards.length - 1
                  ? navigation.replace('Home')
                  : {}
              }
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  card: {
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
