import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';

import imgTarefas from '../../assets/img/tarefas.png';

import { carregaLista } from '../../services/loadData';

import Top from '../../common/Top';
import Note from './componets/Note';

export default function Home() {
    const listaNotas = carregaLista();

    const [countTask, setCountTask] = useState(5);

    const top = () => {
        return (
            <>
                <Top />
                <View style={style.title}>
                    <Image source={imgTarefas} />
                    <Text>Minhas tarefas</Text>
                    <Text>{countTask + "/" + listaNotas.itens.length}</Text>
                </View>
            </>
        )
    }

    return (
        <View style={style.home}>
            <FlatList
                data={listaNotas.itens}
                renderItem={({ item }) => <Note {...item} countTask={countTask} setCountTask={setCountTask} />}
                keyExtractor={({ id }) => id}
                ListHeaderComponent={top}
            />
        </View>
    )
}

const style = StyleSheet.create({
    home: {
        flex: 1,
    },
    title: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '5%',
    }
})

