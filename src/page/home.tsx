import { SafeAreaView, StyleSheet, View, Text, ScrollView } from 'react-native'
import { useRecoilValue } from 'recoil'
import TlButton from '../component/changeTL'
import { userChangeFlgState } from '../state/atoms/userChangeAtom'

/** homeコンポーネント */
export default function Home() {
  const userChangeFlg = useRecoilValue(userChangeFlgState)

  return (
    <SafeAreaView>
      <View style={[!userChangeFlg ? styles.container : styles.afterContainer]}>
        <View style={styles.profArea}>
          <Text>プロフィール表示エリア</Text>
        </View>
        <View style={styles.modalArea}>
          <TlButton />
          <Text>ツイートModal表示エリア</Text>
        </View>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </ScrollView>
        <View style={styles.tabArea}>
          <Text>TabContents表示エリア</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  afterContainer: {
    opacity: 0.3,
  },
  profArea: {
    borderWidth: 2,
    alignItems: 'center',
    paddingVertical: 20,
  },
  modalArea: {
    alignItems: 'center',
    marginVertical: 20,
    paddingTop: 20,
    borderWidth: 2,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  tlArea: {
    marginHorizontal: 20,
    borderWidth: 2,
  },
  tabArea: {
    borderWidth: 2,
  },
  scrollView: {
    borderWidth: 2,
  },
  text: {
    fontSize: 42,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
})
