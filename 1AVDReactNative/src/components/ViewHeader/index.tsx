import { View, Text } from "react-native";

interface IViewHeader {
  mainText: string
  secondaryText?: string
}

export function ViewHeader({ mainText, secondaryText }: IViewHeader) {
  return (
    <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'baseline', width: '90%' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'left' }}>{mainText}</Text>
      {secondaryText &&
        <Text style={{ color: '#11ca21', textDecorationLine: 'underline', fontWeight: 'bold' }}>{secondaryText}</Text>
      }
    </View>
  )
}