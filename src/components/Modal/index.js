import { useState } from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import Title from '../Title/index';
import MyButton from '../Button/index';

export default props => {

    const { imc, isModalVisible, onPressFunc, modalTitle, modalButton } = props

    const [imcGroup, setImcGroup] = useState()

    function setImcInfo() {

        if (imc < 18.5)
            setImcGroup("Adulto com baixo peso")
        else if (imc >= 18.5 && imc < 25)
            setImcGroup("Adulto com peso adequado")
        else if (imc >= 25 && imc < 30)
            setImcGroup("Adulto com sobrepeso")
        else if (imc >= 30 && imc < 35)
            setImcGroup("Adulto com obesidade grau I")
        else if (imc >= 35 && imc < 40)
            setImcGroup("Adulto com obesidade grau II")
        else if (imc >= 40)
            setImcGroup("Adulto com obesidade grau III")
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onShow={() => setImcInfo()}
        >
            <View style={styles.centeredModalView}>
                <View style={[props.style.back, styles.modalView]}>
                    <View style={styles.centeredInfo}>
                        <Title value={modalTitle}></Title>
                    </View>
                    <Text style={[props.style.font, styles.modalViewText]}>Seu IMC é:
                        <Text style={styles.modalViewTextResult}> {imc}</Text>
                    </Text>
                    <Text style={[props.style.font, styles.modalViewText]}>Você pertence ao grupo:
                        <Text style={styles.modalViewTextResult}> {imcGroup}</Text>
                    </Text>
                    <View style={styles.centeredInfo}>
                        <MyButton
                            title={modalButton}
                            onPressFunc={
                                () => {
                                    onPressFunc(false)
                                }
                            }
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredModalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    centeredInfo: {
        alignItems: "center",
        padding: 10
    },
    modalViewText: {
        fontSize: 18,
        padding: 8
    },
    modalViewTextResult: {
        color: "#4D6CFA"
    },
    
});
