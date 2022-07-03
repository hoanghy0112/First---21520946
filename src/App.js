/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Pressable,
  Button,
  TouchableWithoutFeedbackBase,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.background}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Image style={styles.header} source={require('../assets/text.png')} />
        <Image
          style={styles.heroImage}
          source={require('../assets/background.png')}
        />
        <View style={styles.buttonView}>
          {/* <Button style={styles.button} title="Get started" /> */}
          <Pressable style={styles.button}>
            {({pressed}) =>
              pressed ? (
                <Text style={[{color: 'white'}, styles.buttonText]}>
                  Getting started
                </Text>
              ) : (
                <Text style={[{color: '#FF4B3A'}, styles.buttonText]}>
                  Getting started
                </Text>
              )
            }
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FF4B3A',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  logo: {
    marginTop: 40,
    left: 49,
  },
  header: {
    marginTop: 31,
    marginLeft: 51,
  },
  heroImage: {
    marginTop: 31,
  },
  buttonView: {
    marginHorizontal: 50,
    alignItems: 'center',
  },
  button: ({pressed}) => ({
    borderRadius: 9999,
    backgroundColor: pressed ? '#FF4B3A' : 'white',
    paddingVertical: 20,
    paddingHorizontal: 80,
    borderWidth: 2,
    borderColor: 'white',
  }),
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default App;
