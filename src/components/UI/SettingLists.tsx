// components/ui/SettingsList.tsx

import React, { ReactNode, useState } from 'react';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  ViewStyle,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import PrimaryText from './PrimaryText';
import SecondaryText from './SecondaryText';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(
    true
  );
}

interface SettingsItem {
  title: string;

  icon?: ReactNode;

  iconType?:
    | 'Ionicons'
    | 'Feather'
    | 'MaterialCommunityIcons';

  content?: string;

  onPress?: () => void;
}

interface SettingsListProps {
  data: SettingsItem[];

  showArrow?: boolean;

  containerStyle?: ViewStyle;
}

export default function SettingsList({
  data,
  showArrow = true,
  containerStyle,
}: SettingsListProps) {
  const [activeIndex, setActiveIndex] =
    useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    LayoutAnimation.configureNext(
      LayoutAnimation.Presets.easeInEaseOut
    );

    setActiveIndex((prev) =>
      prev === index ? null : index
    );
  };

  return (
    <View
      style={[
        styles.container,
        containerStyle,
      ]}
    >
      {data.map((item, index) => {
        const isOpen =
          activeIndex === index;

        return (
          <View key={index}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.row}
              onPress={() => {
                toggleAccordion(index);

                item.onPress?.();
              }}
            >
              {/* LEFT */}
              <View style={styles.left}>
                {item.icon && (item.icon)}

                <PrimaryText
                  title={item.title}
                  size={17}
                  weight="500"
                />
              </View>

              {/* RIGHT */}
              {showArrow && (
                <Ionicons
                  name={
                    isOpen
                      ? 'chevron-up'
                      : 'chevron-forward'
                  }
                  size={22}
                  color="#000"
                />
              )}
            </TouchableOpacity>

            {/* ACCORDION */}
            {isOpen && item.content && (
              <View
                style={styles.accordion}
              >
                <SecondaryText
                  title={item.content}
                  size={15}
                  lineHeight={24}
                />
              </View>
            )}

            {/* DIVIDER */}
            {index !== data.length - 1 && (
              <View style={styles.divider} />
            )}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
  },

  row: {
    minHeight: 72,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:10,
    flex: 1,
  },

  iconWrapper: {
    width: 34,
    marginRight: 20,
    alignItems: 'center',
  },

  accordion: {
    paddingLeft: 54,
    paddingBottom: 20,
    paddingRight: 10,
  },

  divider: {
    height: 1,
    backgroundColor: '#E8E8E8',
  },
});