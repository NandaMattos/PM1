import { View, SafeAreaView, Platform, ScrollView } from 'react-native'
import { CircleCard } from '../../components/CircleCard';
import { SolutionsCard } from '../../components/SolutionsCard';
import { ViewHeader } from '../../components/ViewHeader';
import { RecomendationsCard } from '../../components/RecomendationsCard';

export function Home() {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", backgroundColor: '#f3eeee' }}>
      <View style={{ marginTop: Platform.OS == 'android' ? 50 : 0, width: '100%', marginLeft: 40 }}>
        <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', width: '100%' }}>
          <CircleCard text='Gasto sugerido' icon='dollar' />
          <CircleCard text='Extrato' icon='extrato' />
          <CircleCard text='Próx. Beneficio' icon='calendario' />
        </View>

        <View style={{ marginTop: 25 }}>
          <ViewHeader mainText='Soluções para você' secondaryText='Ver todos' />

          <ScrollView horizontal>
            <View style={{ justifyContent: 'flex-start', flexDirection: 'row', width: '100%', marginTop: 20 }}>
              <SolutionsCard icon='mobilidade' text='Mobilidade' />
              <SolutionsCard icon='ofertas' text='Ofertas' />
              <SolutionsCard icon='emprestimos' text='Empréstimos' />
              <SolutionsCard icon='ponto-online' text='Ponto   online' />
            </View>
          </ScrollView>

        </View>

        <View style={{ marginTop: 50 }}>
          <ViewHeader mainText='VR Recomenda' secondaryText='Ver todos' />

          <ScrollView horizontal>
            <View style={{ justifyContent: 'flex-start', flexDirection: 'row', width: '100%', marginTop: 20 }}>
              <RecomendationsCard text='Conheça o MERCADO NITEROI e tenha mais uma surpresa' />
              <RecomendationsCard text='Ofertas' />
            </View>
          </ScrollView>

          <View style={{ marginTop: 50 }}>
            <ViewHeader mainText='Saiba mais' />
          </View>

        </View>

      </View>
    </SafeAreaView>
  )
}