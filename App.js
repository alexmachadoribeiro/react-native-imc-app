import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [peso, setPeso]     = useState();
  const [altura, setAltura] = useState();
  const [imc, setImc]       = useState();

  const calcularImc = () => setImc((peso.replace(',', '.') / Math.pow(altura.replace(',', '.'), 2)));

  const result = () => (
    imc <= 18.5
    ? 'Abaixo do peso.'
    : imc < 25
    ? 'Peso ideal.'
    : imc < 30
    ? 'Acima do peso.'
    : imc < 35
    ? 'Obesidade grau I'
    : imc < 40
    ? 'Obesidade grau II'
    : imc >= 40
    ? 'Obesidade mórbida. Procure um médico.'
    : 'Informe os valores e pressione o botão para calcular'
  );

  return (
    <View style={styles.container}>
      <Text
        style={styles.titulo}
      >Calcule o seu IMC</Text>

      <Text>Peso</Text>

      <TextInput
        style={styles.input}
        value={peso}
        placeholder='Em kg'
        keyboardType='numeric'
        onChangeText={(valor) => setPeso(valor)}
      ></TextInput>

      <Text>Altura</Text>

      <TextInput
        style={styles.input}
        value={altura}
        placeholder='Em metros'
        keyboardType='numeric'
        onChangeText={(valor) => setAltura(valor)}
      ></TextInput>

      <Button
        title='Calcular IMC'
        onPress={() => {(peso != null && altura != null ? (calcularImc(), result()) : alert('Preencha todos os campos'))}}
      />

      <Text
        style={styles.result}
      >Seu IMC é:</Text>

      <Text
        style={styles.imc}
      >{imc}</Text>

      <Text
        style={styles.diag}
      >{result()}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  diag: {
    fontSize: 25,
    marginHorizontal: 30,
    textAlign: 'center',
  },
  imc: {
    fontSize: 20,
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    height: 35,
    marginBottom: 30,
    paddingLeft: 10,
    width: 150,
  },
  result: {
    borderTopWidth: 1,
    fontSize: 25,
    marginTop: 30,
    textAlign: 'center',
    width: 300,
  },
  titulo: {
    borderBottomWidth: 1,
    fontSize: 30,
    marginBottom: 30,
  },
});
