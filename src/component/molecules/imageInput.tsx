import React, { useState } from 'react'
import { TouchableOpacity, ScrollView, Image, View, Text } from 'react-native'
import StyleSheet from 'react-native-media-query'

import * as ImagePicker from 'expo-image-picker'

/** 画像読み込み用Component */
export default function ImageInput() {
  const [imageState, setImageState] = useState(0)

  const [image, setImage] = useState('dummy')
  const [image1, setImage1] = useState('dummy')
  const [image2, setImage2] = useState('dummy')
  const [image3, setImage3] = useState('dummy')

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(imageState)
    if (!result.cancelled) {
      switch (imageState) {
        case 0:
          setImage(result.uri)
          setImageState(1)
          break
        case 1:
          setImage1(result.uri)
          setImageState(2)
          break
        case 2:
          setImage2(result.uri)
          setImageState(3)
          break
        case 3:
          setImage3(result.uri)
          setImageState(4)
          break
        default:
          break
      }
    }
  }

  return (
    <View style={styles.container}>
      {imageState !== 0 && (
        <View style={styles.imageArea} dataSet={{ media: ids.imageArea }}>
          <ScrollView horizontal={true}>
            {imageState === 1 && (
              <View style={styles.imageSingleArea}>
                {image !== 'dummy' ? (
                  <Image
                    source={{ uri: image }}
                    style={styles.imageSingleStyle}
                  />
                ) : null}
              </View>
            )}
            {image !== 'dummy' ? (
              <Image source={{ uri: image }} style={styles.imageStyle} />
            ) : null}
            {image1 !== 'dummy' ? (
              <Image source={{ uri: image1 }} style={styles.imageStyle} />
            ) : null}
            {image2 !== 'dummy' ? (
              <Image source={{ uri: image2 }} style={styles.imageStyle} />
            ) : null}
            {image3 !== 'dummy' ? (
              <Image source={{ uri: image3 }} style={styles.imageStyle} />
            ) : null}
          </ScrollView>
        </View>
      )}
      <View style={styles.iconArea}>
        <TouchableOpacity onPress={pickImage}>
          <Image
            source={require('../../../assets/InputIMG.png')}
            style={styles.addIconStyle}
          />
        </TouchableOpacity>
        {image !== 'dummy' ? (
          <TouchableOpacity style={styles.addButtonArea} onPress={pickImage}>
            <Text style={styles.addButton}>+</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  )
}

const { ids, styles } = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  imageArea: {
    height: 150,
    width: 300,
    paddingEnd: 15,
    '@media (min-width: 428px)': {
      width: 400,
    },
  },
  iconArea: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  imageSingleArea: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 150,
    height: 150,
    marginRight: 20,
  },
  imageSingleStyle: {
    width: 200,
    height: 300,
  },
  addIconStyle: {
    width: 20,
    height: 20,
  },
  addButtonArea: {
    marginLeft: 20,
  },
  addButton: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingBottom: 5,
  },
})
