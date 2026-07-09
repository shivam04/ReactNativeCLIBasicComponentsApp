/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { Image, ScrollView } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView
          onScroll={() => console.log('We are now scrolling')}
          contentContainerStyle={{ backgroundColor: 'red', height: 600 }}
          showsVerticalScrollIndicator={false}
          // Set horizontal to true to allow horizontal scrolling
          horizontal={true}
          // Set showsHorizontalScrollIndicator to false to hide the horizontal scroll indicator
          showsHorizontalScrollIndicator={false}
        >
          <Image
            // Set the source of the image to a local image
            source={require('./assets/images/cake.png')}
            // Set the height and width of the image to be 500 each
            style={{ height: 500, width: 500 }}
          />
          <Image
            // Set the source of the image to a local image
            source={require('./assets/images/cake.png')}
            // Set the height and width of the image to be 500 each
            style={{ height: 500, width: 500 }}
          />
          <Image
            // Set the source of the image to a local image
            source={require('./assets/images/cake.png')}
            // Set the height and width of the image to be 500 each
            style={{ height: 500, width: 500 }}
          />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


export default App;
