import React, {useState, useEffect, useRef} from 'react';
import {Image, Text, View, Dimensions, TouchableOpacity, StatusBar, SafeAreaView, ImageBackground} from 'react-native';
import navigationService from '../../services/navigationService';
import router from '../../constants/router';
import NavigationService from '../../services/navigationService';

import {BallIndicator, BarIndicator, DotIndicator, MaterialIndicator, PacmanIndicator, PulseIndicator, SkypeIndicator, UIActivityIndicator, WaveIndicator} from 'react-native-indicators';
export default function HomeScreen() {
  const {t} = useTranslation();
  let deviceHeight = Dimensions.get('window').height;
  let deviceWidth = Dimensions.get('window').width;
  const [data, setData] = useState([]);


  useEffect(() => {

  }, [])

  return (

        <>
          <StatusBar barStyle="dark-content" />

          <LinearGradient vertical={false}>
            <ImageBackground resizeMode="cover" blurRadius={1} style={{flex: 1, height: '100%', justifyContent: 'center',}}  source={require('../../assets/tema.jpeg')}>
        
            </ImageBackground>
          </LinearGradient>
        </>

  );
}
