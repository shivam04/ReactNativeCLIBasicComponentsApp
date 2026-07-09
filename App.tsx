/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { View } from 'react-native';

function App() {

  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'baseline'
    }}>
      <View style={{ backgroundColor: 'yellow', width: 50, height: 200 }} />
      <View style={{ backgroundColor: 'green', width: 50, height: 200 }} />
      <View style={{ backgroundColor: 'black', width: 50, height: 200 }} />
    </View>

  );
}


export default App;
