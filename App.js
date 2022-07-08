import { StatusBar } from 'expo-status-bar'
import { RecoilRoot } from 'recoil'
import { StyleSheet, Text, View } from 'react-native'
import Home from './src/page/home'

export default function App() {
  return (
    <RecoilRoot>
      <View style={styles.container}>
        <Home />
        <StatusBar style="auto" />
      </View>
    </RecoilRoot>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 48,
    marginHorizontal: 16,
  },
})
