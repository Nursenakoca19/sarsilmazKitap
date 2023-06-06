import React, {useState, useEffect, useRef} from 'react'
import {Image, Text, View, TextInput, Dimensions, TouchableOpacity, StatusBar, SafeAreaView, ImageBackground} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import callApi from '../../services/apiServices'
import Ionicons from 'react-native-vector-icons/Ionicons'
import NavigationService from '../../services/navigationService'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import LinearGradient from '../../components/LinearGradient'
import Selector from '../../components/LanguageSelector'
import {useTranslation} from 'react-i18next'
import {I18nManager, DevSettings} from 'react-native'
import router from '../../constants/router'
import {useNavigation} from '@react-navigation/native'
import CheckBox from '@react-native-community/checkbox'

export default function SettingsScreen() {
  const navigation = useNavigation()
  const {t, i18n} = useTranslation()
  const [isSelectedPc, setSelectionPc] = useState(false)
  const [isSelected, setSelection] = useState(false)
  const [pingText, setPingText] = useState(' ')

  const selectedLanguage = i18n.language
  let deviceHeight = Dimensions.get('window').height
  let deviceWidth = Dimensions.get('window').width

  return (
    <>
      <StatusBar barStyle='dark-content' />
      <View
        style={{
          flex: 0.12,
          backgroundColor: 'white',
          borderBottomWidth: 1,
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
          borderBottomColor: '#787A91',
        }}>
        <SafeAreaView style={{height: 1, backgroundColor: 'transparent'}} />
        <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => NavigationService.openDrawer()} style={{flex: 0.2, justifyContent: 'center'}}></TouchableOpacity>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{justifyContent: 'center', flex: 1}}>
              <Text style={{textAlign: 'center', fontSize: 20, color: 'gray', fontWeight: '200'}}>{'Ayarlar'}</Text>
            </View>
          </View>
          <View style={{flex: 0.2}}></View>
        </View>
      </View>

        <View style={{flex: 1, backgroundColor: 'white',justifyContent:'center'}}>
          {/* <Selector /> */}
          <View style={{flexDirection: 'row',flex:0.1}}>
            <CheckBox boxType='square' value={isSelected} onValueChange={setSelection} style={{alignSelf: 'center'}} />
            <Text style={{margin: 8}}>İp Adresim Değiştiğinde Bildirim Gönder</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <CheckBox boxType='square' value={isSelectedPc} onValueChange={setSelectionPc} style={{alignSelf: 'center'}} />
            <Text style={{margin: 8}}>Bilgisayar açıldığında otomatik açıl</Text>
          </View>
          <View style={{height: 50, margin: 8}}>
          <Text style={{fontSize:16}}>Ping gönderme süresi(ms)</Text>

            <TextInput
              multiline
              value={pingText}
              placeholder='Ping Sürenizi Giriniz'
              onChangeText={(text) => {
                setPingText(text)
              }}
              placeholderTextColor={'gray'}
              style={{flex: 1, padding: 10, textAlignVertical: 'top', borderColor: 'gray', borderWidth: 1}}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
     
              style={{
                backgroundColor:'gray',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                height: 40,
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 20,
              }}>
              <Text style={{color: 'white', fontSize: 18,margin:8}}>Uygulamayı Kapat</Text>
            </TouchableOpacity>
            <TouchableOpacity

              style={{
                backgroundColor: 'gray',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                height: 40,
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 20,
              }}>
              <Text style={{color: 'white', fontSize: 18,margin:8}}>Oturumu Kapat</Text>
            </TouchableOpacity>
          </View>
        </View>
    </>
  )
}
