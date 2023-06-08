import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Item from './item';

export default function Note({ id, name, days, ico }) {
    
    const [ daysDone, setDaysDone ] = useState(0);

    const teste = 123;

    useEffect(() => {
        const count = days.filter( (day) => {
            if (day.active){
                return true;
            } else{
                return false;
            }
        })
        setDaysDone(count.length)
    },[])

    return (
        <View style={style.habits}>
            <View style={style.description}>
                <View style={style.title}>
                    <Image source={ico} style={style.ico} />
                    <Text style={style.titleText}>{name}</Text>
                </View>
                <Text style={style.titleCount}>{parseInt(daysDone/7*100)}%</Text>
            </View>
            <View style={style.week}>
                {days.map((day, index) => {
                    return <Item
                        key={index}
                        {...day}
                        daysDone={daysDone}
                        setDaysDone={setDaysDone}
                    />
                })}
            </View>
        </View>
    )
};

const style = StyleSheet.create({
    habits: {
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: '#E1EFF2',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '90%',
        margin: '5%',
        elevation: 5,
        minHeight: 100,
    },

    description: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10,
    },
    titleText:{
        fontSize: 20,
        fontWeight: 700,
    },
    titleCount:{
        backgroundColor: '#F582F8',
        borderRadius: 5,
        paddingHorizontal: 5,
    },

    week: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
    },
    day: {
        textAlign: 'center',
        borderRadius: 16,
        height: 30,
        width: 30,
        marginBottom: 20,
    },

    daySelect: {
        backgroundColor: "#00EA17",
    },
    dayNotSelect: {
        borderBottomColor: "#BDBCFF",
        backgroundColor: "#DBFCFF",
    },
    ico: {
        height: 30,
        width: 30,
        marginVertical: 30,
        marginLeft: 20
    },
});
