import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default props => {

    let {label, value, handler} = props

    return (
        <View style={styles.inputDiv}>
            <Text style={[props.style, styles.label]}>{label}:</Text>
            <TextInput 
                style={styles.input} 
                value={String(value)} 
                onChangeText={handler}
                keyboardType="numeric"
            >
            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    input : {
        backgroundColor: "#ddd",
        padding: 8,
        borderRadius: 15, 
        minWidth: 200
    },
    inputDiv : {
        padding: 10
    },
    label : {
        fontSize : 18,
    }
})
    