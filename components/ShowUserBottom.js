import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import { mainColors, textSizes, horizontalScale } from '../../constants/styles'
import BottomAbout from './BottomAbout'
import BottomGallery from './BottomGallery'
import InfoTabs from './InfoTabs'

const ShowUserBottom = ({fakeUser}) => {

    const [selectedTab, setSelectedTab] = React.useState("about")

  return (
    <View style={{
        alignItems: 'center',
        width: '100%',
    }}>
        <View style={{
            flexDirection: 'row',
            borderBottomColor: '#FFF',
            borderBottomWidth: 1,
            height: '7%',
            width: '95%',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '1%'
        }}>
              <View style={{
                width: '40%',
                alignItems: 'center',
              }}>
                <TouchableHighlight onPress={() => setSelectedTab("about")}
                underlayColor={"none"}>
                  <Text style={{
                    color: selectedTab === "about"? '#FFF' : '#DDD',
                    fontSize: horizontalScale(textSizes.med)
                  }}>About</Text>
                </TouchableHighlight>
              </View>
              <View style={{
                width: '40%',
                alignItems: 'center'
              }}>
              <TouchableHighlight onPress={() => setSelectedTab("gallery")}
              underlayColor={"none"}>
                  <Text style={{
                    color: selectedTab === "gallery"? '#FFF' : '#DDD',
                    fontSize: horizontalScale(textSizes.med)
                  }}>Gallery</Text>
                </TouchableHighlight>
              </View>
    </View>
    <View style={{
        width: '100%'
    }}>
        {selectedTab === "about" ? <BottomAbout fakeUser={fakeUser} /> : <BottomGallery />}
    </View>
    </View>
  )
}
export default ShowUserBottom