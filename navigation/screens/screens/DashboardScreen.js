import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import colors from '../theme/colors';
import typography from '../theme/typography';
import ProgressRing from '../components/ProgressRing';
import { SettingsContext } from '../contexts/SettingsContext';

export default function DashboardScreen() {
  const { faithMode } = useContext(SettingsContext);

  return (
    <ScrollView style={styles.container}>
      <Text style={typography.heading}>Good Morning, Jireh!</Text>

      <View style={styles.rings}>
        <ProgressRing label="Courses" percentage={65} />
        {faithMode && <ProgressRing label="Kingdom" percentage={40} />}
      </View>

      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.actionText}>Continue Course</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.actionText}>Daily Devotional</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.actionText}>Schedule Coaching</Text>
        </TouchableOpacity>
      </View>

      {/* Weekly Challenge Card & other widgets */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.lightGray, padding: 16 },
  rings: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 24 },
  quickActions: { marginTop: 32 },
  actionBtn: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
  },
  actionText: { color: colors.white, textAlign: 'center', fontFamily: 'OpenSans-Regular' },
});
