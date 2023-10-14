import { View, Text } from "react-native";

import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

interface ICircleCard {
  text: string
  icon: 'dollar' | 'extrato' | 'calendario'
}

export function CircleCard({ text, icon }: ICircleCard) {
  return (
    <View style={{ alignItems: 'center' }}>
      <View style={{ borderRadius: 50, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', width: 60, height: 60, marginBottom: 10 }} >
        {icon == 'dollar' ?
          <Feather name="dollar-sign" size={30} color="black" />
          : icon == 'extrato' ?
            <MaterialIcons name="receipt" size={30} color="black" />
            :
            <Feather name="calendar" size={30} color="black" />
        }
      </View>
      <Text>{text}</Text>
    </View>
  )
}