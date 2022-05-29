import React, { useState } from 'react'
import { View, Switch, StyleSheet, Image } from 'react-native'

export default props => {

    const { handler } = props
    const images = {
        darkmode: 'https://images2.imgbox.com/97/c3/oir9M0jc_o.png',
        lightmode: 'https://images2.imgbox.com/a2/bb/yaPbPaLA_o.png'
    }
    
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <View style={styles.switchView}>
            <Switch
                trackColor={{ false: "#4D6CFA", true: "#4D6CFA" }}
                thumbColor={"#4D6CFA"}
                onValueChange={() => {
                    setIsEnabled(!isEnabled)
                    handler()
                }}
                value={isEnabled}
            />
            <Image
                style={styles.image}
                source={{
                    uri: isEnabled ? images.darkmode : images.lightmode,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    switchView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        right: 10,
        top: 20
    },
    image: {
        marginLeft: 5,
        width: 20,
        height: 20
    }
})
