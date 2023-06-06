import React, {useState, useEffect} from 'react';
import {Text, View, ImageBackground, Image, SafeAreaView, ScrollView, TextInput, StatusBar, ActivityIndicator, Platform, Alert, Linking} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import router from '../../constants/router';

const bgImage = require('../../assets/tema2.jpeg');

export default function girisScreen({navigation}) {
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
      <ImageBackground source={bgImage} resizeMode="cover" style={{height: '100%' ,width:'100%',flex:1}}>
        <View
          style={{
            alignItems: 'center',
            marginTop: '17%',
            justifyContent: 'center',
          }}></View>
        <StatusBar barStyle={'dark-content'} />
        <SafeAreaView style={styles.root}>
          <ScrollView>
            <View style={{flex: 1, padding: 30, justifyContent:'center',alignContent:'center',marginTop:'20%'}}>
              <Text
                style={{
                  textAlign: 'left',
                  color: 'white',
                  fontSize: 22,
                  fontWeight: '400',
                  left: 10,
                }}>
                Email
              </Text>

              <View style={styles.inputWrap}>
                <View style={styles.iconWrap}></View>
                <TextInput
                  autoCapitalize="none"
                  value={identityNumber}
                  keyboardType={'default'}
                  placeholder="Email"
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
                  fontSize: 22,
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
                      backgroundColor: 'purple',
                      height: 50,
                      borderRadius: 20,
                      marginTop: 10,
                    }}
                    success
                    block
                    onPress={onPressLogin}>
                    <Text style={{color: 'white', fontSize: 22}}>Girişşşşşşşş</Text>
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
