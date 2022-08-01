import React from 'react'
import { useSetRecoilState } from 'recoil'
import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import TweetModal from './tweetModal'
import { tweetFlgState } from '../../state/atoms/tweetAtom'

/** 対象ユーザのprof/TLを切り替えるコンポーネント */
export default function TweetButton() {
  const setTweetFlg = useSetRecoilState(tweetFlgState)
  return (
    <SafeAreaView>
      <View style={styles.buttonStyle}>
        <Text onPress={() => setTweetFlg(true)}>Tweet</Text>
      </View>
      <TweetModal />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: 'center',
    paddingHorizontal: 30,
    paddingVertical: 8,
  },
})
