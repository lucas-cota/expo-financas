import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';

const list = [
  {
    id: 1,
    label: 'Luz',
    value: '150,00',
    date: '30/10/2022',
    type: 0
  },
  {
    id: 2,
    label: 'Pix cliente',
    value: '50,00',
    date: '19/11/2022',
    type: 1
  },
  {
    id: 3,
    label: 'Salário',
    value: '250,00',
    date: '29/11/2022',
    type: 1
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name='Lucas Cota'/>

      <Balance saldo='9.250,59' gastos='-3.100,00'/>

      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item }) => <Movements data={item}/>}

      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginStart: 14,
    marginEnd: 14,
    marginTop: 14
  },
  list: {
    marginTop: 14,
    marginStart: 14,
    marginEnd: 14
  }
});
