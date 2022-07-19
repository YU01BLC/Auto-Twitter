import React from 'react'
import { useRecoilState } from 'recoil'
import { Modal, Text, Pressable, View, TextInput } from 'react-native'
import StyleSheet from 'react-native-media-query'
import ImageInput from '../molecules/imageInput'
import { tweetFlgState } from '../../state/atoms/tweetAtom'

export default function TweetModal() {
  const [tweetFlg, setTweetFlg] = useRecoilState(tweetFlgState)
  const [text, onChangeText] = React.useState('')
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={tweetFlg}>
        <View style={styles.centeredView}>
          <View style={styles.modalView} dataSet={{ media: ids.modalView }}>
            <View style={styles.ButtonArea}>
              <Pressable
                style={styles.closeButtonArea}
                onPress={() => {
                  setTweetFlg(false)
                }}
              >
                <Text style={styles.closeButton}>×</Text>
              </Pressable>
              <Pressable style={styles.sendButtonArea}>
                <Text style={styles.sendMessage}>send</Text>
              </Pressable>
            </View>
            <TextInput
              style={styles.inputArea}
              placeholder="useless placeholder"
              keyboardType="default"
              onChangeText={onChangeText}
              value={text}
              maxLength={140}
              multiline
              placeholderTextColor={'darkgray'}
              enablesReturnKeyAutomatically
            />
            <View style={styles.imageArea}>
              <ImageInput />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const { ids, styles } = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  ButtonArea: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 20,
    position: 'relative',
  },
  closeButtonArea: {
    position: 'absolute',
    left: 20,
  },
  sendButtonArea: {
    position: 'absolute',
    right: 20,
  },
  closeButton: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
  },
  sendMessage: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 3,
  },
  inputArea: {
    margin: 12,
    width: 300,
    height: 100,
    paddingVertical: 10,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
    '@media (min-width: 428px)': {
      width: 400,
      height: 150,
    },
  },
  imageArea: {
    marginLeft: 20,
  },
})
