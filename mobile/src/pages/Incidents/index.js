import React, {useState, useEffect} from 'react';
import { SafeAreaView ,View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import logo from '../../assets/logo.png';

import api from '../../services/api';

import styles from './styles';

const Incidents = () => {
  const [incidentsList, setIncidentsList] = useState([]);
  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  async function loadIncidents() {
    if (loading) {
      return;
    }

    if (total > 0 && incidentsList.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get('incidents', {
      params: {
        page
      }
    });

    setIncidentsList([...incidentsList, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  function navigateToDetail(incident) {
    navigation.navigate('Detail', { incident });
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

      <FlatList style={styles.incidentList}
        data={incidentsList}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({item}) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{item.name}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{item.title}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(item.value)}
            </Text>

            <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToDetail(item)} activeOpacity={0.7}>
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" color="#e02041" size={16} />
            </TouchableOpacity>
          </View>
        )}
      />
     
    </SafeAreaView>
  );
}

export default Incidents;