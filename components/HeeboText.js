import React, { Component } from 'react';
import { Text } from 'react-native';

export default function HeeboText({ children, bold, size, color, marginTop }) {
  const style = bold ? { fontFamily: 'Heebo-Bold' } : { fontFamily: 'Heebo' };
  style.fontSize = size || 30;
  style.marginTop = marginTop || 5;
  style.color = color;

  return (
    <Text style={style}>
      {children}
    </Text>
  )
};
