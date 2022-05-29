import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default props => {

    const { handler } = props;
    
    let timeout

    useEffect(() => {
        timeout = setTimeout(() => {
            handler(false)
        }, 3000)
    })

    return (
        <View
            style={styles.toastView}
            onTouchStart={() => {
                handler(false)
                clearTimeout(timeout)
            }}
        >
            <Text style={styles.toastText}>{props.message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    toastView: {
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        bottom: 30,
        zIndex: 1,
        backgroundColor: "#ba0b0b",
        borderRadius: 24,
        paddingHorizontal: 20,
        paddingVertical: 10,
        maxHeight: 40,
        maxWidth: 200
    },
    toastText: {
        color: "#FFF"
    }
})