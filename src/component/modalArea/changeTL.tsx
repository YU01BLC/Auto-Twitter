import React from 'react'
import { useSetRecoilState } from 'recoil'
import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import UserChangeModal from './userChangeModal'
import { userChangeFlgState } from '../../state/atoms/userChangeAtom'

/** 対象ユーザのprof/TLを切り替えるコンポーネント */
export default function TlButton() {
  const setUserChangeFlg = useSetRecoilState(userChangeFlgState)
  return (
    <SafeAreaView>
      <View style={styles.buttonStyle}>
        <Text onPress={() => setUserChangeFlg(true)}>changeTL</Text>
      </View>
      <UserChangeModal />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderTopColor: 'black',
    borderTopWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
})
