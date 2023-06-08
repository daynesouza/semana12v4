import React, { useState } from 'react';

import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function item( {active, alias, daysDone, setDaysDone}) {

    const [select, reverseSelect] = useState(active)

    

    function toggleDay() {
        selectDay();
    };

    const selectDay = () => {
        reverseSelect(!select)
        if(select){
           setDaysDone(daysDone-1);
        } else {
           setDaysDone(daysDone+1);
        }
    }

    return (
        <View style={style.week}>
            <TouchableOpacity onPress={toggleDay}>
                <Text
                    style={[
                        style.day,
                        select ? style.daySelect : style.dayNotSelect
                    ]}
                >{alias}</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    week: {
        flexDirection: 'row',
        alignItems: 'center',
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
})