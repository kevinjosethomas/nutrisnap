import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { GlobalContext } from '../context/GlobalState';

export default function PastScanScreen() {
  const { pastScans, calorieTarget } = useContext(GlobalContext);

  const DAILY_CARBS = 300;
  const DAILY_CALORIES = 2000;
  const DAILY_FAT = 60;
  const DAILY_FIBER = 27;
  const DAILY_PROTEIN = 60;
  const DAILY_SODIUM = 2300;
  const DAILY_SUGAR = 30;
  const DAILY_SALT = 2000;

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.name}</Text>
      <Text>{item.description}</Text>
      {renderProgressBar('Calories', item.nutrition.energy[0], calorieTarget, 'kcal')}
      {renderProgressBar('Protein', item.nutrition.proteins[0], DAILY_PROTEIN, 'g')}
      {renderProgressBar('Fat', item.nutrition.fat[0], DAILY_FAT, 'g')}
      {renderProgressBar('Sodium', item.nutrition.sodium[0], DAILY_SODIUM, 'mg')}
      {renderProgressBar('Sugar', item.nutrition.sugars[0], DAILY_SUGAR, 'g')}
      {/* Add more nutrients as needed */}
    </View>
  );
  
  const renderProgressBar = (label, value, total, unit) => {
    const percentage = Math.min(100, (value / total) * 100).toFixed(0);
    return (
      <View style={{ marginTop: 10 }}>
        <Text>{label}: {value} {unit} ({percentage}%)</Text>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { width: `${percentage}%` }]} />
        </View>
      </View>
    );
  };
  

  const renderSeparator = () => <View style={styles.separator} />;

  const renderEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No past scans available.</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={pastScans}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={renderSeparator}
        ListEmptyComponent={renderEmptyComponent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  progressBarBackground: {
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 5,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: 'green',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginTop: 10,
    marginBottom: 10,
  },
  emptyContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  emptyText: {
    fontStyle: 'italic',
  },
});
