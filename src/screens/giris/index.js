import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
  StatusBar,
  ActivityIndicator,
  Platform,
  Alert,
  Linking,
} from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import router from "../../constants/router";

const bgImage = require("../../assets/tema2.jpeg");

export default function girisScreen({ navigation }) {
  const [identityNumber, addidentityNumber] = useState("");
  const [password, addPassword] = useState("");
  const [loading, addLoading] = useState(false);
  const [visible, setVisibility] = React.useState(false);
  const icon = !visible ? "eye-slash" : "eye";
  const [data, setData] = useState([]);
  const twoOptionAlert = () => {
    Alert.alert(
      "Lütfen gerekli alanları giriniz",
      "Kimlil numarası ve şifre alanları boş geçilemez",
      [{ text: "Kapat" }]
    );
  };

  function onPressLogin() {}

  const blur = Platform.OS == "ios" ? 3 : 2;

  return (
    <>
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        style={{ height: "100%", width: "100%", flex: 1 }}
      >
        <View
          style={{
            alignItems: "center",
            marginTop: "17%",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../assets/logo.png")}
            style={{ width: 300, height: 300, color: "white" }}
          />
        </View>

        <View
          style={{
            flex: 1,
            padding: 30,
            alignContent: "center",
            marginTop: "20%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flex: 0.3,
              alignContent: "center",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                backgroundColor: "purple",
                height: 50,
                borderRadius: 20,
                flex: 1,
                width: 170,
              }}
              success
              block
              onPress={onPressLogin}
            >
              <Text style={{ color: "white", fontSize: 22 }}>GİRİŞ YAP</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                backgroundColor: "purple",
                height: 50,
                borderRadius: 20,
                flex: 1,
                width: 170,
              }}
              success
              block
              onPress={onPressLogin}
            >
              <Text style={{ color: "white", fontSize: 22 }}>KAYIT OL</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              backgroundColor: "purple",
              height: 50,
              borderRadius: 20,
              marginTop: 10,
            }}
            success
            block
            onPress={onPressLogin}
          >
            <Text style={{ color: "white", fontSize: 22 }}>
              Google ile Giriş Yap
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
}
