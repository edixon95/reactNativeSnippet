import { View, Text, FlatList, Image } from 'react-native'
import { mainColors, horizontalScale, textSizes } from '../../constants/styles'
import { Alice27, Gallery1, Gallery2, Gallery3 } from '../../constants/assets'

const BottomGallery = () => {
    return (
        <View style={{
            height: '100%'
        }}>
            <View style={{
            height: '20%',
            flexDirection: 'row',
        }}>
            <View style={{
                height: '40%',
                width: '40%',
                flexBasis: '40%',
                margin: '5%'
            }}>
            <Image source={Alice27}
            style={{
                height: '200%',
                width: 'auto',
                borderRadius: 25
            }}
            />
            </View>

            <View style={{
                height: '40%',
                width: '40%',
                flexBasis: '40%',
                margin: '5%'
            }}>
            <Image source={Gallery1}
            style={{
                height: '200%',
                width: 'auto',
                borderRadius: 25
            }}
            />
            </View>
        </View>
        <View style={{
            height: '20%',
            flexDirection: 'row',
        }}>
            <View style={{
                height: '40%',
                width: '40%',
                flexBasis: '40%',
                margin: '5%'
            }}>
            <Image source={Gallery2}
            style={{
                height: '200%',
                width: 'auto',
                borderRadius: 25
            }}
            />
            </View>

            <View style={{
                height: '40%',
                width: '40%',
                flexBasis: '40%',
                margin: '5%'
            }}>
            <Image source={Gallery3}
            style={{
                height: '200%',
                width: 'auto',
                borderRadius: 25
            }}
            />
            </View>
        </View>
        </View>
  )
}
export default BottomGallery