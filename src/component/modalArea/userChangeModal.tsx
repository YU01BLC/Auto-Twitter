import React from 'react'
import { useRecoilState } from 'recoil'
import { userChangeFlgState } from '../../state/atoms/userChangeAtom'
import { Modal, Text, Pressable, View } from 'react-native'
import StyleSheet from 'react-native-media-query'

export default function UserChangeModal() {
  const [userChangeFlg, setUserChangeFlg] = useRecoilState(userChangeFlgState)
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={userChangeFlg}>
        <View style={styles.centeredView}>
          <View style={styles.modalView} dataSet={{ media: ids.modalView }}>
            <View style={styles.ButtonArea}>
              <Pressable
                style={styles.closeButtonArea}
                onPress={() => {
                  setUserChangeFlg(false)
                }}
              >
                <Text style={styles.closeButton}>×</Text>
              </Pressable>
            </View>

            <Text style={styles.modalText}>
              ここに表示したいUserの名前を一覧表示する。
            </Text>
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
    width: 300,
    height: 100,
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
      width: 400,
      height: 150,
    },
  },
  ButtonArea: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 32,
    position: 'relative',
  },
  closeButtonArea: {
    position: 'absolute',
    right: 120,
    '@media (min-width: 428px)': {
      right: 170,
    },
  },
  closeButton: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})
