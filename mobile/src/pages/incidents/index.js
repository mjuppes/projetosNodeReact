import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents() {

    const navigation = useNavigation();
     
    function navigationToDetail() {
        navigation.navigate('Detail');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}> 0 casos</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem vindo!</Text>
            <Text style={styles.description}>Escolha um aee sera dos casos abaixo e salve o dia.</Text>
            
            <FlatList
             style={styles.incidentList}
             showsVerticalScrollIndicator = {false}
             keyExtractor={incident => String(incident)}
             data = {[1, 2, 3, 4, 5]}
             renderItem = {() => (
                <View style={styles.incident}>
                <Text style={styles.incidentProperty}> ONG:</Text>
                <Text style={styles.incidentValue}> APAD</Text> 

                <Text style={styles.incidentProperty}> CASO:</Text>
                <Text style={styles.incidentValue}> Gato doido</Text> 

                <Text style={styles.incidentProperty}> VALOR:</Text>
                <Text style={styles.incidentValue}>R$ 10,00</Text> 

                <TouchableOpacity style={styles.detailsButton} 
                    onPress={navigationToDetail}>
                    <Text style={styles.detailsButtonText}>Ver Mais detalhes</Text>
                    <Feather name="arrow-right" size={16} color="#e02141"></Feather>
                </TouchableOpacity>
            </View>

             ) }
            />
       </View>
    );
}