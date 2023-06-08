import React, { useReducer, useState } from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';

export default function Note ( { id, nome, ico, countTask, setCountTask} ) {
    const [selecionaNota, inverterSelecionaNota] = useReducer(
        (selecionaNota) => !selecionaNota,
        false
    ); 

    const toggleNote = () => {
        inverterSelecionaNota();
        selecionaNota ? setCountTask( countTask + 1) : setCountTask( countTask - 1);
    }

    return (
        <TouchableOpacity 
            style={[
                style.item,
                selecionaNota ? style.itemSelecionado : style.itemNaoSelecionado,
            ]}
            onPress={toggleNote}
        >
            <Image source={ico} style={style.ico} />
            <Text style={style.nome}> {nome} </Text>
            <View style={[
                style.status,
                selecionaNota ? style.statusNotOk : style.statusOk
            ]}>
                <Text style = { style.statusText }> {selecionaNota ? "Fazer" : "Feito" } </Text>
            </View>
        </TouchableOpacity>
    )
};

const style = StyleSheet.create({
    item:{
        alignItems: 'center',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        margin: '5%',
        elevation: 8,
        maxHeight: 100,
    },
    itemSelecionado: {        
        borderBottomColor: "#ECECEC",
        backgroundColor: "#E1EFF2",       
    },
    itemNaoSelecionado: {
        borderBottomColor: "#BDBCFF",
        backgroundColor: "#DBFCFF",  
    },

    ico: {
        height: 30,
        width: 30,
        marginVertical: 30,
        marginLeft: 20
    },

    nome: {
        fontSize: 20,
    },

    status: {
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15
    },
    statusOk: {        
        backgroundColor: "#00EA17", 
    },
    statusNotOk: {
        backgroundColor: "#FF5D5D",
    },
    statusText: {
        alignSelf: 'center',
    }
});
