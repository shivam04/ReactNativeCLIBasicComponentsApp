/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { useState } from 'react';
import { Image } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

function App() {

  const [imageSource, setImageSource] = useState({ uri: "http://exmaple.com" })

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Image
          source={imageSource}
          style={{ width: '100%', height: '100%', backgroundColor: 'red' }}
          resizeMode={'center'}
          onError={() => {
            console.log("Error has been detected while loading the image")
            setImageSource(require('./assets/images/cake.png'))
          }}
        />
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80"
          }}
          style={{ width: 100, height: 100 }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


export default App;
