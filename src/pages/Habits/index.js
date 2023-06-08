import React from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';

import { carregaHabits } from '../../services/loadData';

import Top from '../../common/Top';
import Note from './Note';

import imgHabits from './assets/img/habitos.png'

export default function Habits(){

    const habits = carregaHabits();

    const top = () => {
        return (
            <>
                <Top/>
                <View style={style.habitsHeader}>
                    <Image source={imgHabits} style={style.habitsImg}/>
                    <Text style={style.habitsText}>{habits.title}</Text>
                </View>
            </>
        )
    }

    return (
        <View style={style.habitsList}>
            <FlatList
                data={habits.itens}
                renderItem={({ item }) => <Note {...item}/>}
                keyExtractor={({id}) => id}
                ListHeaderComponent={top}
            />
        </View>
    )
}

const style = StyleSheet.create({
    habitsHeader:{
        alignItems: 'center',
        columnGap: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '90%',
        paddingHorizontal: '5%',
        paddingVertical: '5%',
    },
    habitsText:{
        fontSize: 20,
        fontWeight: 700,
    },
    
    habitsList: {
        flex: 1,
        backgroundColor: '#EBFFEE'
    }
})
