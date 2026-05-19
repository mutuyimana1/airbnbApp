// components/ui/GeneralList.tsx

import React from 'react';

import {
  View,
  StyleSheet,
  ViewStyle,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import SecondaryText from './SecondaryText';

interface GeneralListItem {
  title: string;
  icon: React.ReactNode | string;
}

interface GeneralListProps {
  data: GeneralListItem[];

  gap?: number;
  itemStyle?: ViewStyle;
}

export default function GeneralList({
  data,
  gap = 18,
  itemStyle,
}: GeneralListProps) {
  const renderIcon = (
    icon: React.ReactNode | string
  ) => {
    if (React.isValidElement(icon)) {
      return icon;
    }

    switch (icon) {
      case 'wifi':
        return (
          <Ionicons
            name="wifi-outline"
            size={22}
            color="#000"
          />
        );

      case 'car':
        return (
          <Ionicons
            name="car-outline"
            size={22}
            color="#000"
          />
        );

      case 'water':
        return (
          <Ionicons
            name="water-outline"
            size={22}
            color="#000"
          />
        );

      case 'snow':
        return (
          <Ionicons
            name="snow-outline"
            size={22}
            color="#000"
          />
        );

      case 'kitchen':
        return (
          <MaterialCommunityIcons
            name="silverware-fork-knife"
            size={22}
            color="#000"
          />
        );

      default:
        return (
          <Ionicons
            name="checkmark-outline"
            size={22}
            color="#000"
          />
        );
    }
  };

  return (
    <View>
      {data.map((item, index) => (
        <View
          key={index}
          style={[
            styles.row,
            {
              marginBottom:
                index === data.length - 1
                  ? 0
                  : gap,
            },
            itemStyle,
          ]}
        >
          {renderIcon(item.icon)}

          <SecondaryText
            title={item.title}
            size={17}
            color="#000"
            style={styles.title}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    marginLeft: 16,
    flex: 1,
  },
});