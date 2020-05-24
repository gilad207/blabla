import React, { useEffect, useState } from 'react';
import AppContainer from './routing/AppContainer';
import { I18nManager } from 'react-native';

I18nManager.forceRTL(true);

export default function App() {
  return <AppContainer />
}

