/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { useState } from 'react';
import { Button, Pressable, ScrollView, Text, TextInput } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <TextInput
            // Set the value of the TextInput to the email state variable
            value={email}
            // Set keyboardType to 'email-address' to display the email keyboard layout
            keyboardType={'email-address'}
            // Set the style of the TextInput to have a border, padding, and rounded corners
            style={{ borderWidth: 1, borderRadius: 4, padding: 10 }}
            // Set the placeholder text to prompt the user to enter their email
            placeholder={'Please enter your email here'}
            // Set the onChangeText function to update the email state variable with the new value typed by the user
            onChangeText={value => {
              setEmail(value);
            }}
          />
          <TextInput
            // Set the value of the TextInput to the password state variable
            value={password}
            // Set secureTextEntry to true to hide the typed text as bullets (for passwords)
            secureTextEntry={true}
            // Set the style of the TextInput to have a border, padding, and rounded corners
            style={{ borderWidth: 1, borderRadius: 4, padding: 10 }}
            // Set the placeholder text to prompt the user to enter their password
            placeholder={'Please enter your password here'}
            // Set the onChangeText function to update the password state variable with the new value typed by the user
            onChangeText={value => {
              setPassword(value);
            }}
          />
          {/* -- Background Color does not work with button component, therefore we're going to use Pressable
            <Button
              title={'Submit'}
              color={'red'}
              style={{backgroundColor: 'black'}}
            />
        */}

          <Pressable
            style={[
              { backgroundColor: 'black' },
              (email.length === 0 || password.length < 8) && { opacity: 0.5 }
            ]}

            disabled={email.length === 0 || password.length < 8}
            onPress={() => {
              console.log("clicked");
              console.log(email, password);
            }}
          >
            <Text style={{ color: 'white', textAlign: 'center', padding: 10 }}>
              Submit
            </Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


export default App;
