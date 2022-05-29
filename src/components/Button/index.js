import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

export default props => {

    let { title, onPressFunc, style, childStyle } = props

    return (
        <TouchableOpacity
            onPress={() => {
                onPressFunc()
            }}
        >
            <View style={style || styles.buttonView}>
                <Text style={childStyle || styles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonView: {
        width: 120,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4D6CFA",
        padding: 12,
        borderRadius: 24
    },
    buttonText: {
        color: "#FFF",
        fontSize: 20
    }
})
