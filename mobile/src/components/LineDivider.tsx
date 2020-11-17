import React from 'react';
import { View } from 'react-native';

const LineDivider = () => {
  return (
    <View style={{ width: 1, paddingVertical: 18, paddingHorizontal: 16 }}>
      <View
        style={{ flex: 1, borderLeftColor: '#64676D', borderLeftWidth: 1 }}
      />
    </View>
  );
};

export default LineDivider;
