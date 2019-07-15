import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ActivityIndicator,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import { BlurView } from "expo-blur";
import { MaterialIcons } from "@expo/vector-icons";

import theme from "../../theme";

const WelcomeScreen = ({
  onPressLogin,
  loading,
  backdropUrl,
  username,
  onChangeUsername,
  isMatchingUser
}) => (
  <>
    <View style={styles.gifContainer}>
      <Image
        style={styles.gifImage}
        source={{ uri: backdropUrl }}
        resizeMode="cover"
      />
    </View>
    <BlurView tint="default" intensity={95} style={StyleSheet.absoluteFill} />
    <View style={styles.cover} />
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <View style={styles.logoContainer}>
            <Image source={require("../../assets/logo/logo.png")} />
            <Text style={styles.logoText}>Smileys</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.usernameInputContainer}>
              <TextInput
                style={styles.usernameInput}
                placeholder="Your username..."
                placeholderTextColor={"rgba(255, 255, 255, 0.38)"}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="go"
                onSubmitEditing={onPressLogin}
                onChangeText={onChangeUsername}
                value={username}
              />

              <View
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  right: 16,
                  justifyContent: "center"
                }}
              >
                {loading ? (
                  <ActivityIndicator size="small" color="white" />
                ) : (
                  username.length > 0 && (
                    <MaterialIcons
                      name={isMatchingUser ? "check" : "add"}
                      size={24}
                      color={
                        isMatchingUser
                          ? theme.colors.success
                          : "rgba(255, 255, 255, 0.87)"
                      }
                    />
                  )
                )}
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  </>
);

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    justifyContent: "space-between"
  },
  cover: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "black",
    opacity: 0.5
  },
  gifContainer: {
    ...StyleSheet.absoluteFill
  },
  gifImage: {
    flex: 1
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logoText: {
    fontSize: 60,
    color: "rgba(255, 255, 255, 0.87)",
    textAlign: "center",
    fontWeight: "700",
    marginTop: 16
  },
  footer: {
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: theme.colors.background,
    borderRadius: 4
  },
  usernameInputContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.07)",
    padding: 16,
    borderRadius: 4
  },
  usernameInput: {
    fontSize: 20,
    color: "rgba(255, 255, 255, 0.87)"
  }
});

export default WelcomeScreen;
