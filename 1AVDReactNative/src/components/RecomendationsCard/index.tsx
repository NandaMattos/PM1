import { View, Text } from "react-native";

import { Feather } from '@expo/vector-icons';

interface IRecomendationsCard {
  text: string

}

export function RecomendationsCard({ text }: IRecomendationsCard) {
  return (
    <View style={{ alignItems: 'center' }}>
      <View style={{ borderRadius: 10, backgroundColor: '#FFF', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', width: 280, height: 120, marginRight: 8 }} >
        <View style={{ height: '70%', backgroundColor: '#f3eeee', justifyContent: 'center', alignItems: 'center', width: '30%', borderRadius: 10 }}>
          <Feather name="shopping-cart" size={20} color="purple" style={{ transform: [{ rotate: '360deg' }] }} />
          <Text style={{ textAlign: 'center', fontSize: 12, color: 'purple', fontWeight: 'bold' }}>Alimentação</Text>
        </View>
        <View style={{ width: '45%' }}>
          <Text style={{ textAlign: 'left', fontWeight: 'bold', fontSize: 14 }} numberOfLines={3}>{text}</Text>
          <Text style={{ textAlign: 'left', maxWidth: '50%', fontWeight: 'bold', fontSize: 11, color: '#11ca21', marginTop: 10, textDecorationLine: 'underline' }} >Saiba mais</Text>
        </View>
      </View>
    </View >
  )
}