import React from 'react';
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';
import logo from '../../assets/img/logo.png'

import { carregaTopo } from '../../services/loadData';

export default function Topo() {
    const topo = carregaTopo();
    
    return (
        <View style={style.tarefas}>
            <View style={style.titulo}>
                <Image source={logo} style={style.logo} />
                <Text style={style.tituloText}> {topo.title} </Text>
            </View>
            <Text style={style.descricao} >{topo.description}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    tarefas:{
        backgroundColor: '#EBF8FF',
        flexDirection: 'column',
        minHeight: 95,
        width: '100%',
        paddingHorizontal: 10,
        paddingTop: 20,
    },
    titulo:{
        flexDirection: 'row',
        marginBottom: 10,
    },
    logo: {
        alignItems: 'center',
        width: 32,
        height: 32,
    },
    tituloText: {
        alignSelf: 'flex-start',
        fontSize: 24,
        fontWeight: 'bold',
    },
})