import React, { useState } from 'react'
import { View, Switch, StyleSheet, Image } from 'react-native'

export default props => {

    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <View style={styles.switchView}>
            <Switch
                trackColor={{ false: "#4D6CFA", true: "#4D6CFA" }}
                thumbColor={"#4D6CFA"}
                onValueChange={() => {
                    setIsEnabled(!isEnabled)
                    props.handler()
                }}
                value={isEnabled}
            />
            <Image
                style={styles.image}
                source={{
                    uri: isEnabled ? "https://cdn-icons.flaticon.com/png/512/4817/premium/4817680.png?token=exp=1653625501~hmac=f353b8c679c4c79aecfd031b52f78f3f" : "https://cdn-icons.flaticon.com/png/512/4265/premium/4265609.png?token=exp=1653625548~hmac=d1c2cfc20882f76008919c7ed7227cf2",
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    switchView : {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        right: 10,
        top: 10
    },
    image : {
        marginLeft: 5,
        width: 20,
        height: 20
    }
})
    