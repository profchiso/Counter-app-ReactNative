/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [view, setView] = useState(0);
  const {chinedu, button, appContainer} = styles;
  return (
    <View style={appContainer}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {/* <Header /> */}
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Counter App</Text>
            </View>
            <View style={chinedu}>
              <Text style={chinedu}>{view}</Text>
            </View>

            <View>
              <View style={chinedu}>
                <Text style={button} onPress={() => setView(view + 1)}>
                  Increment
                </Text>
              </View>
              {view <= 0 ? null : (
                <View style={chinedu}>
                  <Text style={button} onPress={() => setView(view - 1)}>
                    Decrement
                  </Text>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#eeaa2e',
    height: 1000,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    justifyContent: 'center',
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  chinedu: {
    color: '#333',
    padding: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    color: 'white',
    backgroundColor: 'green',
    textAlign: 'center',
    padding: 5,
    borderRadius: 7,
    marginHorizontal: 40,
  },
  appContainer: {
    backgroundColor: 'blue',
  },
});

export default App;
