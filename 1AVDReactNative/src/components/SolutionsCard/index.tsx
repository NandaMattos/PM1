import { View, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

interface ISolutionCard {
  text: string
  icon: 'mobilidade' | 'ofertas' | 'emprestimos' | 'ponto-online'
}

export function SolutionsCard({ text, icon }: ISolutionCard) {
  return (
    <View style={{ alignItems: 'center' }}>
      <View style={{ borderRadius: 10, backgroundColor: '#FFF', justifyContent: 'space-evenly', alignItems: 'center', width: 98, height: 120, marginRight: 8 }} >
        {icon == 'mobilidade' ?
          <Ionicons name="location-outline" size={30} color="green" />
          : icon == 'ofertas' ?
            <MaterialCommunityIcons name="sale" size={30} color="green" />
            :
            icon == 'emprestimos' ?
              <Feather name="calendar" size={30} color="green" />
              :
              <FontAwesome name="hand-o-up" size={30} color="green" />
        }
        <Text style={{ width: 84, textAlign: 'center' }}>{text}</Text>

      </View>
    </View >
  )
}