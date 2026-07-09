/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { useState } from 'react';
import { TextInput } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

function App() {
  const [textValue, setTextValue] = useState('');
  const [email, setEmail] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          // Set the style of the TextInput to have a border, padding, and rounded corners
          style={{ borderWidth: 1, padding: 10, borderRadius: 4 }}
          // Set the value of the TextInput to the textValue state variable
          value={textValue}
          // Set the onChangeText function to update the textValue state variable with the new value typed by the user
          onChangeText={value => setTextValue(value)}
          // Set autoFocus to true to automatically focus on this input when the component is rendered
          autoFocus={true}
          // Set the placeholder text to prompt the user to enter their name
          placeholder={'Please enter your name'}
        />
        <TextInput
          // Set the style of the TextInput to have a border, padding, and rounded corners
          style={{ borderWidth: 1, padding: 10, borderRadius: 4 }}
          // Set the value of the TextInput to the email state variable
          value={email}
          // Set the onChangeText function to update the email state variable with the new value typed by the user
          onChangeText={value => setEmail(value)}
          // Set returnKeyType to 'search' to change the return key on the keyboard to say 'Search'
          returnKeyType={'search'}
          // Set keyboardType to 'email-address' to display the email keyboard layout
          keyboardType={'email-address'}
          // Set autoFocus to true to automatically focus on this input when the component is rendered
          autoFocus={true}
          // Set the placeholder text to prompt the user to enter their email
          placeholder={'Please enter your email here'}
        />
        <TextInput
          // Set the style of the TextInput to have a border, padding, and rounded corners
          style={{ borderWidth: 1, padding: 10, borderRadius: 4 }}
          // Set the value of the TextInput to the passwordValue state variable
          value={passwordValue}
          // Set the onChangeText function to update the passwordValue state variable with the new value typed by the user
          onChangeText={value => setPasswordValue(value)}
          // Set secureTextEntry to true to hide the typed text as bullets (for passwords)
          secureTextEntry={true}
          // Set textContentType to 'password' for iOS and use secureTextEntry for password masking
          // Note: secureTextEntry may not work with keyboardType='phone-pad' on Android
          // Removing keyboardType to fix Android issue with secureTextEntry
          keyboardType={'default'}
          // Set autoFocus to true to automatically focus on this input when the component is rendered
          autoFocus={true}
          // Set the placeholder text to prompt the user to enter their password
          placeholder={'Please enter your password'}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


export default App;
