import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, Text} from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Detail() {
    return (
        <View style={styles.container}> 
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={() => {}}>
                    <Feather name="arrow-left" size={28} color="#E02041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={styles.incidentProperty, { marginTop : 0 }}> ONG:</Text>
                <Text style={styles.incidentValue}> APAD</Text> 

                <Text style={styles.incidentProperty}> CASO:</Text>
                <Text style={styles.incidentValue}> Gato doido</Text> 

                <Text style={styles.incidentProperty}> VALOR:</Text>
                <Text style={styles.incidentValue}>R$ 10,00</Text> 
            </View>

            
            <View style={styles.contactBox}>    
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
                <Text style={styles.heroDescription}>
                     Entre em contato:
                </Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.actions} onPress = {() => {}}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actions} onPress = {() => {}}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
}