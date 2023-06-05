import {
  Button,
  Switch,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "./Form.styles";
import { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [showPass, setShowPass] = useState(false);

  const handleChange = (input, value) => {
    setData({
      ...data,
      [input]: value,
    });
  };

  const handleSubmit = () => {
    console.log(data);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.formTitle}>Register</Text>
      <TextInput
        style={styles.formInput}
        placeholder="email"
        autoCapitalize="none"
        value={data.email}
        onChangeText={(text) => handleChange("email", text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.formInput}
        placeholder="password"
        autoCapitalize="none"
        value={data.password}
        onChangeText={(text) => handleChange("password", text)}
        secureTextEntry={!showPass}
      />
      <Switch value={showPass} onValueChange={() => setShowPass(!showPass)} />
      <Button
        title="Register"
        onPress={handleSubmit}
        style={styles.formButton}
      />
    </KeyboardAvoidingView>
  );
};

export default Form;
