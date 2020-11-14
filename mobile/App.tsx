import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Routes from './src/Routes/stack';

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <Routes />
    </>
  );
}
