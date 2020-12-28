import React, {useState, useEffect} from 'react';
import { SafeAreaView ,View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import logo from '../../assets/logo.png';

import styles from './styles';

const Detail = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const incidentParams = route.params.incident;

  const message = `Olá ${incidentParams.name}, estou entrando em contato pois gostaria de ajudar no caso "${incidentParams.title}", com o valor de ${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incidentParams.value)}.`

  function navigateBack() {
    navigation.goBack();
  }

  function handleWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${incidentParams.whatsapp}&text=${message}`);
  }

  function handleEmail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incidentParams.title}`,
      recipients: [incidentParams.email],
      body: message,
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <Feather name="arrow-left" color="#e02041" size={28} onPress={navigateBack}  />
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
        <Text style={styles.incidentValue}>
          {incidentParams.name} de {incidentParams.city}/{incidentParams.uf}
        </Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>{incidentParams.title}</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>
          {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incidentParams.value)}
        </Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionsButton} onPress={handleWhatsapp} activeOpacity={0.7}>
            <FontAwesome name="whatsapp" color="#fff" size={16} />
            <Text style={styles.actionsButtonText}>Whatsapp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionsButton} onPress={handleEmail} activeOpacity={0.7}>
            <Feather name="mail" color="#fff" size={16} />
            <Text style={styles.actionsButtonText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Detail;