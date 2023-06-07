import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';
import { StyleSheet } from 'react-native';


import Routes from '.src/routes';

export default function App() {
  return (
    <Fragment>
      <StatusBar barStyle="darkcontent" />
      <Routes/>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
