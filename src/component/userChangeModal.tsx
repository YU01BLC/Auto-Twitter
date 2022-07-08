import React from 'react'
import { useRecoilState } from 'recoil'
import { userChangeFlgState } from '../state/atoms/userChangeAtom'
import { Modal, Text, Pressable, View } from 'react-native'
import StyleSheet from 'react-native-media-query'

export default function UserChange() {
  const [userChangeFlg, setUserChangeFlg] = useRecoilState(userChangeFlgState)
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={userChangeFlg}>
        <View style={styles.centeredView}>
          <View style={styles.modalView} dataSet={{ media: ids.modalView }}>
            <Text style={styles.modalText}>
              ここに表示したいUserの名前を一覧表示する。
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setUserChangeFlg(false)
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
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
    paddingVertical: 100,
    paddingHorizontal: 100,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    '@media (min-width: 428px)': {
      backgroundColor: 'red',
    },
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})
