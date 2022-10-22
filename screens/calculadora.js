import react from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';


const Calculadora = props => {
  const buttons = ['AC','DEL','Sqrt','/','7','8','9','*','4','5','6','-','1','2','3','+','.','0','!','='];
  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');

  function handleImput(buttonPressed) {
    console.log(buttonPressed);
    if (
      (buttonPressed === '+') |
      (buttonPressed === '-') |
      (buttonPressed === '*') |
      (buttonPressed === '/') |
      (buttonPressed === '!')
    ) {
      setCurrentNumber(currentNumber + ' ' + buttonPressed + ' ');
      return;
    }
    switch (buttonPressed) {
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
        return;
      case 'AC':
        setLastNumber('');
        setCurrentNumber('');
        return;
      case '=':
        setLastNumber(currentNumber + ' = ');
        calculator();
        return;
    }

    setCurrentNumber(currentNumber + buttonPressed);
  }

  function calculator() {
    const splitNumbers = currentNumber.split(' ');
    const firstNumber = parseFloat(splitNumbers[0]);
    const lastNumber = parseFloat(splitNumbers[2]);
    const operator = splitNumbers[1];

    switch (operator) {
      case '+':
        setCurrentNumber((firstNumber + lastNumber).toString());
        return;
      case '-':
        setCurrentNumber((firstNumber - lastNumber).toString());
        return;
      case '*':
        setCurrentNumber((firstNumber * lastNumber).toString());
        return;
      case '/':
        setCurrentNumber((firstNumber / lastNumber).toString());
        return;
      case '!':
        setCurrentNumber((firstNumber / 100).toString());
        return;
      case 'Sqrt':
        setCurrentNumber((firstNumber * -1));
        return;
    }
  }
  return (
    <View>
    <View style={styles.result}>
      <Text style={styles.historyText}>{lastNumber}</Text>
      <Text style={styles.resultText}>{currentNumber}</Text>
    </View>
    <View style={styles.buttons}>
      {buttons.map((button) => (
        <TouchableOpacity
          onPress={() => handleImput(button)}
          key={button}
          style={[styles.button, { backgroundColor: '#26292b' }]}>
          <Text style={[styles.textButton, { color: '#5F7ADB', fontSize: 25 }]}>
            {button}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
  );
}

export default Calculadora;

const styles = StyleSheet.create({
   result: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    height: 300,
    backgroundColor: '#445696',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    minHeight: 93,
    minWidth: 80,
  },
  resultText: {
    color: '#ffff',
    margin: 10,
    fontSize: 40,
  },
  historyText: {
    color: '#0f0f0f',
    fontSize: 20,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
});
