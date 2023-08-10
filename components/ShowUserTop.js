import { View, Text, Image, TouchableHighlight } from 'react-native'
import { Alice27 } from '../../constants/assets'
import { LocationArrow } from '../../constants/assets'
import { horizontalScale, textSizes, buttonSizes, mainColors } from '../../constants/styles'


const ShowUserTop = ({fakeUser, navigation}) => {

    const pageUser = fakeUser
    const {name, age, location} = pageUser
  return (
    <View style={{
        height: '100%',
        marginTop: '2%'
    }}>
      <View style={{
        alignItems: 'center',
        height: '40%'
      }}>
        <Image source={Alice27}
        style={{
            height: '100%',
            width: '27%',
            borderRadius: 90,
            overflow: 'hidden',
        }} />
      </View>
      
      <View style={{
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '3%'
      }}>
        <Text style={{
            color: '#FFF',
            fontSize: horizontalScale(textSizes.med)
        }}>{name}, {age}</Text>
      </View>

      <View style={{
        height: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '3%'
      }}>
        <View style={{
            marginRight: '2%'
        }}>
            <Image source={LocationArrow} />
        </View>
        <View>
            <Text style={{
            color: '#FFF',
            fontSize: horizontalScale(textSizes.small)
        }}>{location}</Text>
        </View>
      </View>
        <View style={{
          alignItems: 'center',
          marginTop: '2%',
        }}>
          <TouchableHighlight style={{
            backgroundColor: mainColors.main,
            height: buttonSizes.regularH,
            width: buttonSizes.regularW,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onPress={() => navigation.navigate("EditProfile")}>
          <Text style={{
            color: '#FFF',
            fontSize: horizontalScale(textSizes.small)
          }}>Edit Profile</Text>
          </TouchableHighlight>
        </View>

    </View>
  )
}
export default ShowUserTop