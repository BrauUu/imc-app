import { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import MyButton from './src/components/Button/index';
import NumericInput from './src/components/NumericInput/index';
import Subtitle from './src/components/Subtitle';
import Title from './src/components/Title/index';
import MyModal from './src/components/Modal/index';
import LightnessSwitch from './src/components/LightnessSwitch';
import Toast from './src/components/Toast';

export default function App() {

  const [imc, setImc] = useState()
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isDark, setIsDark] = useState(false);
  const [hasCalcError, setHasCalcError] = useState(false)

  function handlerHeight(value) {
    value = value.toString().replace(',', '.')
    setHeight(value)
  }

  function handlerWeight(value) {
    value = value.toString().replace(',', '.')
    setWeight(value)
  }

  function handlerDarkMode() {
    setIsDark(!isDark)
  }

  return (
    <View style={[styles.container, isDark ? styles.darkModeBack : styles.lightModeBack]}>
      <Title value="Calcule seu IMC" />
      <Subtitle value="Descubra se você está no seu peso ideal!" style={isDark ? styles.darkModeFont : styles.lightModeFont}></Subtitle>
      <NumericInput label="Peso" value={height} handler={handlerHeight} style={isDark ? styles.darkModeFont : styles.lightModeFont} />
      <NumericInput label="Altura" value={weight} handler={handlerWeight} style={isDark ? styles.darkModeFont : styles.lightModeFont} />
      <MyButton
        title="Calcular"
        onPressFunc={
          () => {
            if (weight > 0 || height > 0) {
              setImc((parseFloat(height) / (parseFloat(weight) * parseFloat(weight))).toFixed(2))
              setIsModalVisible(true)
            } else {
              setHasCalcError(true)
            }
          }
        } />
      <MyModal
        onPressFunc={setIsModalVisible}
        isModalVisible={isModalVisible}
        style={isDark ? {back: styles.darkModeModalBack, font: styles.darkModeFont} : {back: styles.lightModeModalBack, font: styles.lightModeFont}}
        imc={imc}
        modalTitle="Resultado"
        modalButton="Voltar"
      />
      <LightnessSwitch handler={handlerDarkMode} style={styles.darkModeSwitch}/>
      { hasCalcError &&
        <Toast message="Insira valores válidos!" handler={setHasCalcError}></Toast> 
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkModeBack: {
    backgroundColor: '#111'
  },
  darkModeModalBack: {
    backgroundColor: '#222'
  },
  lightModeModalBack: {
    backgroundColor: '#fff'
  },
  lightModeBack: {
    backgroundColor: '#eee'
  },
  darkModeFont : {
    color : '#eee'
  },
  lightModeFont: {
    color: '#222'
  },
});
