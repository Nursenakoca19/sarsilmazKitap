import { Platform, Linking, Dimensions, PixelRatio } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import Moment from 'moment'
import 'moment/locale/tr'

class Helper {


    openMapApp() {
        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${39.93089},${32.7990223}`;
        const label = '';
        const url = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`
        });
        Linking.openURL(url);
    }


    isNavigationRefreshParams(nextProps: any) {
        let params = nextProps.navigation.state.params;
        if (params) {
            if (params.refresh) {
                nextProps.navigation.state.params = null;
                return true;
            }
            return false;
        }
        return false;
    }

    getDeviceFontSize(size: number, tabletSize: number) {
        if (DeviceInfo.isTablet()) {
            return tabletSize;
        }
        else {
            const {
                width: SCREEN_WIDTH,
                height: SCREEN_HEIGHT,
            } = Dimensions.get('window');
            const scale = SCREEN_WIDTH / 320;
            const newSize = size * scale
            if (Platform.OS === 'ios') {
                return Math.round(PixelRatio.roundToNearestPixel(newSize))
            } else {
                return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
            }
        }
    }

    getDateToFullDateFormat(date: string) {
        return Moment(date).format('DD MMMM YYYY');
    }
     getYear(date: string) {
        return Moment(date).format('YYYY');
    }

    getMonthly(date: string) {
        return Moment(date).format('MMMM');
    }
    getDay(date: string) {
        return Moment(date).format('D');
    }
    getDateToFullDateFormatTime(date: string) {
        return Moment(date).format('DD/MM/YYYY HH:mm');
    }
    getFormatTime(date: string) {
        return Moment(date).format('HH:mm');
    }
    isEmptyDate(date: string) {
   return  date == "0001-01-01T00:00:00" ? true : false
    }
    yearList() {
        var currentYear = new Date().getFullYear()
        var loopYear = currentYear + 1
        let years = []
        for (let index = 1921; index < loopYear; index++)
            years.push({ key: index.toString(), value: index.toString() })
        return years;
    }

    navigationEventsRefreshComponent(payload: any) {
        if (payload) {
            if (payload.action.immediate) {
                //yatay olarak geri geldi.
                return false
            }
            else if (payload.action.preserveFocus) {
                //Geri geldi.
                return false
            }
            else {
                return true
            }
        }
        return false
    }
    deviceIsAndroid() {
        return Platform.OS === 'android'
    }

    deviceIsIOS() {
        return Platform.OS === 'ios'
    }
    getPlatformName() {
        let platformName = this.deviceIsAndroid() ? 'android' : 'iphone';
        if (DeviceInfo.isTablet())
            platformName = this.deviceIsAndroid() ? 'androidtablet' : 'ipad';
        return platformName;
    }
}

export default new Helper;
