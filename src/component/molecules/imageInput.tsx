import React, { useState } from 'react'
import {
  TouchableOpacity,
  ScrollView,
  Image,
  View,
  Text,
  Pressable,
} from 'react-native'
import StyleSheet from 'react-native-media-query'

import * as ImagePicker from 'expo-image-picker'

/** 画像読み込み用Component */
export default function ImageInput() {
  /**
   * 画像表示制御State
   * 非表示: 0 (default)
   * 表示: 1~4
   */
  const [imageState, setImageState] = useState(0)

  /**
   * 画像の枚数判定State
   * 1枚埋め込み時: 0 (default)
   * 複数枚埋め込み時: 1
   */
  const [singleState, setSingleState] = useState(0)

  /**
   * 画像srcState
   * 画像埋め込みなし: 'dummy' (default)
   * 画像埋め込みあり: 画像のsrc
   */
  const [image, setImage] = useState('dummy')
  const [image1, setImage1] = useState('dummy')
  const [image2, setImage2] = useState('dummy')
  const [image3, setImage3] = useState('dummy')

  /** 画像埋め込み関数 */
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.cancelled) {
      switch (imageState) {
        case 0:
          setImage(result.uri)
          break
        case 1:
          setImage1(result.uri)
          setSingleState(1)
          break
        case 2:
          setImage2(result.uri)
          setSingleState(1)
          break
        case 3:
          setImage3(result.uri)
          setSingleState(1)
          break
        default:
          break
      }
      let currentState = imageState + 1
      setImageState(currentState)
      console.log(currentState)
    }
  }

  /** 画像削除判定関数 */
  const judgeState = () => {
    let currentState = imageState - 1
    setImageState(currentState)
    console.log(currentState)

    if (imageState === 1) {
      setSingleState(0)
    }
  }

  return (
    <View style={styles.container}>
      {/* 画像埋め込み枚数が1枚の時の表示 */}
      {imageState !== 0 && (
        <View style={styles.modalArea} dataSet={{ media: ids.modalArea }}>
          <ScrollView>
            {imageState === 1 && singleState === 0 && (
              <View>
                {image !== 'dummy' ? (
                  <View
                    style={styles.imageSingleArea}
                    dataSet={{ media: ids.imageSingleArea }}
                  >
                    <Pressable
                      style={styles.deleteIconArea}
                      dataSet={{ media: ids.deleteIconArea }}
                      onPress={() => {
                        setImage('dummy'), setImageState(0)
                      }}
                    >
                      <Text style={styles.deleteIconStyle}>×</Text>
                    </Pressable>
                    <Image
                      source={{ uri: image }}
                      style={styles.imageSingleStyle}
                    />
                  </View>
                ) : null}
              </View>
            )}
          </ScrollView>

          {/* 画像埋め込み枚数が複数の時の表示 */}
          {singleState === 1 && (
            <ScrollView horizontal={true}>
              <View style={styles.imageArea}>
                {image !== 'dummy' ? (
                  <View>
                    <Pressable
                      style={styles.deleteIconMulchArea}
                      onPress={() => {
                        judgeState()
                        setImage('dummy')
                      }}
                    >
                      <Text
                        style={styles.deleteIconStyle}
                        dataSet={{ media: ids.deleteIconStyle }}
                      >
                        ×
                      </Text>
                    </Pressable>
                    <Image source={{ uri: image }} style={styles.imageStyle} />
                  </View>
                ) : null}
                {image1 !== 'dummy' ? (
                  <View>
                    <Pressable
                      style={styles.deleteIconMulchArea}
                      onPress={() => {
                        judgeState()
                        setImage1('dummy')
                      }}
                    >
                      <Text style={styles.deleteIconStyle}>×</Text>
                    </Pressable>
                    <Image source={{ uri: image1 }} style={styles.imageStyle} />
                  </View>
                ) : null}
                {image2 !== 'dummy' ? (
                  <View>
                    <Pressable
                      style={styles.deleteIconMulchArea}
                      onPress={() => {
                        judgeState()
                        setImage2('dummy')
                      }}
                    >
                      <Text style={styles.deleteIconStyle}>×</Text>
                    </Pressable>
                    <Image source={{ uri: image2 }} style={styles.imageStyle} />
                  </View>
                ) : null}
                {image3 !== 'dummy' ? (
                  <View>
                    <Pressable
                      style={styles.deleteIconMulchArea}
                      onPress={() => {
                        judgeState()
                        setImage3('dummy')
                      }}
                    >
                      <Text style={styles.deleteIconStyle}>×</Text>
                    </Pressable>
                    <Image source={{ uri: image3 }} style={styles.imageStyle} />
                  </View>
                ) : null}
              </View>
            </ScrollView>
          )}
        </View>
      )}

      {/* モーダル下部のアイコン表示部 */}
      <View style={styles.iconArea}>
        {image === 'dummy' && (
          <TouchableOpacity onPress={pickImage}>
            <Image
              source={require('../../../assets/InputIMG.png')}
              style={styles.addIconStyle}
            />
          </TouchableOpacity>
        )}
        {image !== 'dummy' && (
          <View style={styles.InactiveIconArea}>
            <Image
              source={require('../../../assets/InputIMG.png')}
              style={styles.addIconInactiveStyle}
            />
            <Text style={styles.InactiveIcon}>×</Text>
          </View>
        )}
        {image !== 'dummy' && imageState !== 4 ? (
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
  modalArea: {
    width: 300,
    height: 200,
    paddingEnd: 15,
    '@media (min-width: 428px)': {
      width: 400,
      height: 300,
    },
  },
  imageArea: {
    flexDirection: 'row',
    height: 300,
  },
  iconArea: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  imageSingleArea: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: 300,
    height: 200,
    paddingEnd: 15,
    '@media (min-width: 428px)': {
      width: 400,
      height: 300,
    },
  },
  imageStyle: {
    width: 200,
    height: 300,
    marginRight: 20,
  },
  imageSingleStyle: {
    position: 'absolute',
    width: 200,
    height: 200,
    '@media (min-width: 428px)': {
      width: 400,
      height: 300,
    },
  },
  deleteIconArea: {
    opacity: 0.8,
    position: 'absolute',
    top: 5,
    right: 60,
    zIndex: 99,
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: '#bababa',
    '@media (min-width: 428px)': {
      width: 25,
      height: 25,
      right: 20,
    },
  },
  deleteIconMulchArea: {
    opacity: 0.8,
    position: 'absolute',
    top: 5,
    right: 30,
    zIndex: 99,
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: '#bababa',
    '@media (min-width: 428px)': {
      width: 25,
      height: 25,
      right: 25,
    },
  },
  deleteIconStyle: {
    opacity: 0.5,
    position: 'absolute',
    fontSize: 25,
    top: -7,
    left: 2,
    '@media (min-width: 428px)': {
      fontSize: 35,
      top: -9.5,
      left: 4.5,
    },
  },
  addIconStyle: {
    width: 20,
    height: 20,
  },
  InactiveIconArea: {
    position: 'relative',
  },
  addIconInactiveStyle: {
    width: 20,
    height: 20,
    opacity: 0.5,
  },
  InactiveIcon: {
    fontSize: 35,
    color: '#403f3f',
    position: 'absolute',
    top: -13,
    '@media (min-width: 428px)': {
      fontSize: 42,
      top: -16,
      left: 1,
    },
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
