import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { GlobalContext } from '../context/GlobalState';

import One from "../assets/emoji/1.png";
import Two from "../assets/emoji/2.png";
import Three from "../assets/emoji/3.png";
import Four from "../assets/emoji/4.png";
import Five from "../assets/emoji/5.png";

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

  const renderItem = ({ item }) => {
    let image;
    if (item.rating > 4) {
      image = Five;
    } else if (item.rating > 3) {
      image = Four;
    } else if (item.rating > 2) {
      image = Three;
    } else if (item.rating > 1) {
      image = Two;
    } else {
      image = One;
    }

    return (
      <View style={styles.itemContainer}>
        <Image source={image} style={styles.emoji} />
        <Text style={styles.itemTitle}>{item.name}</Text>
        {renderProgressBar('Calories', item.nutrition.energy[0], calorieTarget ?? DAILY_CALORIES, 'kcal')}
        {renderProgressBar('Protein', item.nutrition.proteins[0], DAILY_PROTEIN, 'g')}
        {renderProgressBar('Fat', item.nutrition.fat[0], DAILY_FAT, 'g')}
        {renderProgressBar('Sodium', item.nutrition.sodium[0], DAILY_SODIUM, 'mg')}
        {renderProgressBar('Sugar', item.nutrition.sugars[0], DAILY_SUGAR, 'g')}
      </View>
    );
  };

  const renderProgressBar = (label, value, total, unit) => {
    const percentage = Math.min(100, (value / total) * 100).toFixed(0);
    return (
      <View style={{ marginTop: 10, paddingHorizontal: 10 }}>
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
        width: '100%',
        flex: 1,
        padding: 20
      },
  itemContainer: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
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
  progressBarBackground: {
    height: 20,
    backgroundColor: '#ddd',
    borderRadius: 10,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#4cbc80',
    borderRadius: 10,
  },
  emoji: {
    position: 'absolute',
    top: -25,
    right: 25,
    width: 75,
    height: 75,
  },
  
  
});

