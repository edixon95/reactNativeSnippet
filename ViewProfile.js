import { View, Text, Image, SafeAreaView, TouchableHighlight } from 'react-native'
import { BackArrow, OptionIcon } from '../constants/assets'
import { horizontalScale, textSizes, loadedFonts, containerPadding, mainColors } from '../constants/styles'
import { FocusedStatusBar, ShowUserTop, ShowUserBottom } from '../components'
import React from 'react'


const ViewProfile = ({navigation}) => {

  const [showProfile, setShowProfile] = React.useState({
    name: "Alice",
    age: 27,
    location: "London",
    bio: "Alice, a vivacious explorer with a heart full of passion and a mind brimming with creativity. From the vibrant city streets to the tranquil countryside, she finds joy in every corner of life's journey.",
    personStats: ["5.9", "Female", "Relationship", "Graduate", "Smoker", "Social"],
    personInterest: ["#Games", "#Football", "#Food", "#Skating", "#Netflix", "#Reading"]
  })

  return (
      <SafeAreaView style={{
        backgroundColor: mainColors.secondary,
        height: '100%'
      }}>
        <FocusedStatusBar />
        <View
          style={{
            marginTop: containerPadding.statusBar,
            height: '10%',
          }}
        >
          <View style={{
            flexDirection: 'row',
          }}>
            <View style={{
            width: '20%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <TouchableHighlight style={{
            width: '50%',
          }}
          underlayColor={"none"}
          onPress={() => navigation.navigate("Home")}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain'
            }}
            source={BackArrow}
          />
          </TouchableHighlight>
          </View>
          
          <View style={{
            width: '60%',
            height: '100%',
            alignItems: 'center'
          }}>
          <Text
            style={{
              color: "#FFF",
              fontSize: horizontalScale(textSizes.med),
              fontFamily: loadedFonts.outfitBold,
              textAlign: "center",
              lineHeight: 60,
              marginTop: containerPadding.buttonSpacing2,
              alignItems: "center",
            }}
          >
            Profile
          </Text>
          </View>
          
          <View style={{
            width: '20%',
            height: '100%',
            alignItems: 'center',
          }}>
            <Image source={OptionIcon}
            style={{
              width: '50%',
              height: '100%',
              resizeMode: 'contain',
            }} />
          </View>
          </View>
    </View>
    <View style={{
            height: '30%',
            width: '90%',
            alignSelf: 'center',
          }}>
            <ShowUserTop fakeUser={showProfile} navigation={navigation} />
          </View>
          <View style={{
          }}>
            <ShowUserBottom fakeUser={showProfile} />
          </View>
      </SafeAreaView>
  )
}
export default ViewProfile
