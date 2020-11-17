import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Routes from './src/Routes/stack';

export default function App() {
  return (
    <>
      <StatusBar style='light' backgroundColor='#18161F' />
      <Routes />
    </>
  );
}
