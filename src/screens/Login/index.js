import React, {useState, useEffect} from 'react';
import {Text, View, ImageBackground, Image, SafeAreaView, ScrollView, TextInput, StatusBar, ActivityIndicator, Platform, Alert, Linking} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import router from '../../constants/router';

const bgImage = require('../../assets/tema.jpeg');

export default function LoginScreen({navigation}) {
  const [identityNumber, addidentityNumber] = useState('');
  const [password, addPassword] = useState('');
  const [loading, addLoading] = useState(false);
  const [visible, setVisibility] = React.useState(false);
  const icon = !visible ? 'eye-slash' : 'eye';
  const [data, setData] = useState([]);
  const twoOptionAlert = () => {
    Alert.alert('Lütfen gerekli alanları giriniz', 'Kimlil numarası ve şifre alanları boş geçilemez', [{text: 'Kapat'}]);
  };

  function onPressLogin() {}

  const blur = Platform.OS == 'ios' ? 3 : 2;

  return (
    <>
      <ImageBackground source={bgImage} resizeMode="stretch" style={{height: '100%' ,width:'100%',flex:1}}>
        <View
          style={{
            alignItems: 'center',
            marginTop: '17%',
            justifyContent: 'center',
          }}></View>
        <StatusBar barStyle={'dark-content'} />
        <SafeAreaView style={styles.root}>
          <ScrollView>
            <View style={{flex: 0.1, padding: 30, marginTop: '5%'}}>
              <Text
                style={{
                  textAlign: 'left',
                  color: 'white',
                  fontSize: 18,
                  fontWeight: '400',
                  left: 10,
                }}>
                Kimlik Numarası
              </Text>

              <View style={styles.inputWrap}>
                <View style={styles.iconWrap}></View>
                <TextInput
                  autoCapitalize="none"
                  value={identityNumber}
                  keyboardType={'default'}
                  placeholder="Kimlik Numarası"
                  onChangeText={text => {
                    addidentityNumber(text);
                  }}
                  placeholderTextColor="#212121"
                  style={styles.input}
                />
              </View>
              <Text
                style={{
                  textAlign: 'left',
                  color: 'white',
                  fontSize: 18,
                  fontWeight: '400',
                  left: 10,
                }}>
                Şifre
              </Text>

              <View style={styles.inputWrap}>
                <View style={styles.iconWrap}></View>

                <TextInput value={password} placeholderTextColor="#212121" placeholder="Şifre" onChangeText={addPassword} style={styles.input} secureTextEntry={!visible} />
              </View>

              {loading ? (
                <ActivityIndicator />
              ) : (
                <>
                  <TouchableOpacity
                    style={{
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#2769F6',
                      height: 50,
                      borderRadius: 20,
                      marginTop: 10,
                    }}
                    success
                    block
                    onPress={onPressLogin}>
                    <Text style={{color: 'white', fontSize: 18}}>Giriş Yap</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}
