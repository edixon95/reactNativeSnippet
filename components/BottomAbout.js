import { View, Text, FlatList } from 'react-native'
import { mainColors, textSizes, horizontalScale } from '../../constants/styles'
import InfoTabs from './InfoTabs'

const BottomAbout = ({fakeUser}) => {
    const { bio, personStats, personInterest } = fakeUser
  return (
    <View style={{
        height: '100%'
    }}>
        <View style={{
        alignItems: 'center',
    }}>
      <View style={{
        backgroundColor: mainColors.main,
        width: '90%',
        marginTop: '3%',
        alignItems: 'center',
        borderRadius: 25,
      }}>
        <Text style={{
            color: '#FFF',
            fontSize: horizontalScale(textSizes.small*.9),
            width: '90%',
            textAlign: 'center',
            marginTop: '2%',
            marginBottom: '2%'
        }}>
            { bio }
        </Text>
      </View>
    </View>
    <View style={{
        alignItems: 'center',
        marginTop: '2%'
    }}>
        <View style={{
            width: '90%'
        }}>
        <Text style={{
            color: '#FFF',
            fontSize: horizontalScale(textSizes.med*.9)
        }}>Measure Me Up</Text>
        </View>
    </View>
    <View style={{
        alignItems: 'center'
    }}>
    <View style={{
        flexDirection: 'row',
        width: '90%',
        height: '18%'
        
    }}>
            <FlatList 
            data={personStats}
            renderItem={({item}) => <InfoTabs item={item}/>}
            numColumns={3}
            contentContainerStyle={{
                height: '100%',
                width: '100%',
            }}
            />
        </View>
        <View style={{
            width: '90%',
            marginTop: '1%',
            marginBottom: '1%'
        }}>
        <Text style={{
            color: '#FFF',
            fontSize: horizontalScale(textSizes.med*.9)
        }}>Interests</Text>
        </View>
        <View style={{
        flexDirection: 'row',
        width: '90%',
        height: '18%'
        
    }}>
            <FlatList 
            data={personInterest}
            renderItem={({item}) => <InfoTabs item={item}/>}
            numColumns={3}
            contentContainerStyle={{
                height: '100%',
                width: '100%',
            }}
            />
        </View>
    </View>
    </View>
  )
}
export default BottomAbout