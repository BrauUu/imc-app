import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props => {
    return (
        <View>
            <Text style={props.style || styles.title} >
                {props.value}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title : {
        fontSize: 32,
        color: "#4D6CFA"
    }
})
    