import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props => {
    return (
        <View>
            <Text style={[props.style, styles.subTitle]} >
                {props.value}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    subTitle : {
        fontSize: 20,
    }
})
    