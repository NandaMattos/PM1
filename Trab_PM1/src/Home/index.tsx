import { View, Text, SafeAreaView } from 'react-native'
import { styles } from './styles'

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 40 }}>
        <Text style={styles.textLarge}>Sistema de Informação</Text>
        <Text style={styles.TextSmallPurple}>PM I - Programação Mobile I</Text>
        <Text style={styles.textLarge}>Professor: Luiz Claudio</Text>
        <Text style={styles.TextSmallGreen}>6º Período</Text>
      </View>
    </SafeAreaView>
  )
}