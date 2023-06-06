import React, { Component, createRef, useRef, useEffect } from 'react'
import LinearGradient from '../components/LinearGradient/index'
import { LeftMenu } from '../components/HeaderButton'
import NavigationService from '../services/navigationService'
import { headerBackTitle } from '../constants/config'
import { SvgXml } from 'react-native-svg';
import { View, AccessibilityInfo, findNodeHandle, Text, TouchableOpacity, Platform } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { addEmitHelper } from 'typescript';
import helper from '../services/helper'


function headerLeftMenu() {
    return (<LeftMenu
        onPress={() => NavigationService.openDrawer()} />)
}


export function generateNavigationOptions(title) {
    return {
        title: title,
        headerTintColor: 'white',
        headerBackTitle: headerBackTitle,
        headerBackground: () => <LinearGradient />
    }

}

export function generateNavigationOptionsLeftMenu(navigation, title) {

    return {
        title: <>
            {
                Platform.OS == 'ios' ?
                    <Text ref={navigation} >
                        <View style={{ flex: 1, justifyContent: 'center' }}  >
                            <Text accessible={true}
                                accessibilityLabel={title} style={{ color: 'black', fontWeight: '500', justifyContent: 'center', alignItems: 'center', alignContent: 'center', textAlign: 'center', fontSize: 17 }}>{title}</Text>
                        </View>
                    </Text> :
                    title
            }
            <Text
                style={{ color: 'transparent', fontSize: 1 }}>{title}</Text>
        </>,
        headerBackTitle: headerBackTitle,
        headerTintColor: 'black',
        headerLeft: () => headerLeftMenu(navigation),
    }
}

export function generateNavigationOptionsLeftMenuNoHeader(title) {
    return {
        title: title,
        headerBackTitle: headerBackTitle,
        header: () => null,
        headerLeft: () => headerLeftMenu()
    }
}
export function generateLabel(title) {

    return {
        drawerLabel:
            <View style={{ flex: 1, flexShrink: 1, flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                <Text style={{ color: 'white', fontWeight: '700', justifyContent: 'center', alignItems: 'center', alignContent: 'center', textAlign: 'center', fontSize: 18 }}>{title}</Text>
            </View>,
    }
}

export function generateDrawerIcon(url, tintColor) {
    return (
        <SvgXml
            width="25"
            height="25"
            xml={url} />)
}






