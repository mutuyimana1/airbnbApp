import React, { useRef, useEffect } from 'react';
import { FlatList, TouchableOpacity, Text, StyleSheet, View, ListRenderItem } from 'react-native';

// 1. Define the structural shape of a Tab item object
export interface TopbarTab {
  id: string | number;
  title: string;
}

// 2. Define the explicit Props expected by this component
interface TopTabsProps {
  tabs: TopbarTab[];
  activeTabId: string | number;
  onTabPress: (id: string | number) => void;
  activeColor?: string;
  inactiveColor?: string;
  backgroundColor?: string;
}

const TopTabs: React.FC<TopTabsProps> = ({ 
  tabs = [], 
  activeTabId, 
  onTabPress, 
  activeColor = '#007AFF', 
  inactiveColor = '#8E8E93',
}) => {
  // Strongly type the FlatList reference element
  const flatListRef = useRef<FlatList<TopbarTab>>(null);

  useEffect(() => {
    if (tabs.length === 0 || !activeTabId) return;
    
    const index = tabs.findIndex(tab => tab.id === activeTabId);
    if (index !== -1 && flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index,
        animated: true,
        viewPosition: 0.5
      });
    }
  }, [activeTabId, tabs]);

  // Apply the native ListRenderItem generic type definition
  const renderTabItem: ListRenderItem<TopbarTab> = ({ item }) => {
    const isActive = item.id === activeTabId;

    return (
      <TouchableOpacity 
        style={styles.tabButton} 
        onPress={() => onTabPress(item.id)}
        activeOpacity={0.7}
      >
        <Text style={[
          styles.tabText, 
          { color: isActive ? activeColor : inactiveColor },
          isActive && styles.activeTabText
        ]}>
          {item.title}
        </Text>
        {isActive && <View style={[styles.activeIndicator, { backgroundColor: activeColor }]} />}
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container]}>
      <FlatList
        ref={flatListRef}
        data={tabs}
        renderItem={renderTabItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listPadding}
        getItemLayout={(_, index) => ({
          length: 90,
          offset: 90 * index,
          index,
        })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
    marginBottom: 15,
  },
  listPadding: {
    // paddingHorizontal: 12,
    alignItems: 'center',
  },
  tabButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: '100%',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
  },
  activeTabText: {
    fontWeight: '700',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 16,
    right: 16,
    height: 3,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
});

export default TopTabs;
