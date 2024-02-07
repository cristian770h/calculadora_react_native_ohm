import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
export default function App() {
  const [mostrarOpcionesSerie, setMostrarOpcionesSerie] = useState(false);
  const [mostrarOpcionesParalelo, setMostrarOpcionesParalelo] = useState(false);

  function HomeScreen({ navigation }) {
    return (
      <View>
        <View>
          <Text style={styles.text_title}>Calculadora de ley de OHM</Text>
        </View>
        <View style={styles.container_image}>
          <Image source={require('../calculadora_Ohm/img/Portada2.png')} style={styles.imagen} />
        </View>
        <View style={styles.container_2}>
          <Text style={styles.subtitle}>¿Que es la ley de ohm?</Text>
          <Text style={styles.text_info}>La ley de Ohm se usa para determinar la relación entre tensión, corriente y resistencia en un circuito eléctrico.</Text>
        </View>
        <View style={styles}>
          <Text style={styles.text_title}>Qué circuito deseas realizar</Text>
          <StatusBar style="auto" />
          <View style={styles.buttons}>
            <View>
              <Image source={require('../calculadora_Ohm/img/en_serie.png')} style={styles.imagen2} />
              <Button style={styles.button2} title="En serie" onPress={() => navigation.navigate('Serie')} />
            </View>
            <View>
              <Image source={require('../calculadora_Ohm/img/en_paralelo.png')} style={styles.imagen2} />
              <Button title="Paralelo" onPress={() => navigation.navigate('Paralelo')} />
            </View>
          </View>
        </View>
      </View>
    );
  }
  function CalcularVoltajeScreen() {
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [resultado, setResultado] = useState(null);
    const [errorVoltaje, setErrorVoltaje] = useState('');
    const [errorResistencia, setErrorResistencia] = useState('');

    const calcularVoltaje = () => {
      setErrorVoltaje('');
      setErrorResistencia('');

      // Validar voltaje
      if (!inputValue1) {
        setErrorVoltaje('Por favor, ingresa la resistencia.');
        return;
      }

      // Validar resistencia
      if (!inputValue2) {
        setErrorResistencia('Por favor, ingresa la itensidad.');
        return;
      }
      const division = parseFloat(inputValue1) * parseFloat(inputValue2);
      parseFloat(setResultado(division));
    };
    return (
      <View >
        <KeyboardAvoidingView
          behavior={Platform.Os === "android" ? "padding" : "height"}>
          <ScrollView style={{ flexGrow: 22 }}>
            <View style={styles.container_image2}>
              <Image source={require('../calculadora_Ohm/img/Intensidadreultado.png')} style={styles.imagen} />
            </View>
            <View>
              <Text style={styles.subtitle}>¿Que es el voltaje?</Text>
              <Text style={styles.text_info}>
                El voltaje se define como la magnitud encargada de establecer la diferenciación de potencial eléctrico que existe entre dos puntos (V).
              </Text>
            </View>
            <View>
              <Text style={styles.subtitle}>¿Como se calcula el voltaje?</Text>
              <Text style={styles.text_info}>
                V=R * I
              </Text>
            </View>

            <View>
              <Text style={styles.subtitle}>Calula el voltaje</Text>
              <TextInput
                style={styles.input}
                onChangeText={setInputValue1}
                value={inputValue1}
                placeholder="Ingresa la resistencia"
                keyboardType="numeric"
                require

              />
              {errorVoltaje ? <Text style={styles.errorText}>{errorVoltaje}</Text> : null}
              <TextInput
                style={styles.input}
                onChangeText={setInputValue2}
                value={inputValue2}
                placeholder="Ingresa la intensidad"
                keyboardType="numeric"
                require
              />
              {errorResistencia ? <Text style={styles.errorText}>{errorResistencia}</Text> : null}
              <Button
                title="Calcular"
                onPress={calcularVoltaje}
              />
              {resultado !== null && (
                <Text style={styles.resultado}>
                  El voltaje es: {resultado}
                </Text>
              )}
            </View>
            <View>
              <Text style={styles.subtitle}>Mas datos</Text>
              <Text style={styles.text_info}> {'\u2022'}
                En un circuito en serie el voltaje total es la suma de el voltaje de las resistencias</Text>
              <Text style={styles.text_info}> {'\u2022'}
                En un circuito en paralelo el voltaje total es el mismo en todas las resistencias es lo mismo</Text>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }

  function CalcularIntensidadScreen() {
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [resultado, setResultado] = useState(null);
    const [errorVoltaje, setErrorVoltaje] = useState('');
    const [errorResistencia, setErrorResistencia] = useState('');

    const calcularSuma = () => {
      setErrorVoltaje('');
      setErrorResistencia('');

      // Validar voltaje
      if (!inputValue1) {
        setErrorVoltaje('Por favor, ingresa el voltaje.');
        return;
      }

      // Validar resistencia
      if (!inputValue2) {
        setErrorResistencia('Por favor, ingresa la resistencia.');
        return;
      }
      const division = parseFloat(inputValue1) / parseFloat(inputValue2);
      parseFloat(setResultado(division));
    };
    return (
      <View >
        <KeyboardAvoidingView
          behavior={Platform.Os === "android" ? "padding" : "height"}>
          <ScrollView style={{ flexGrow: 22 }}>
            <View style={styles.container_image2}>
              <Image source={require('../calculadora_Ohm/img/Intensidadreultado.png')} style={styles.imagen} />
            </View>
            <View>
              <Text style={styles.subtitle}>¿Que es la intensidad?</Text>
              <Text style={styles.text_info}>
                La intensidad de la corriente es la cantidad de carga que pasa por un conductor por unidad de tiempo. La intensidad de la corriente se mide en Amperios (A).
              </Text>
            </View>
            <View>
              <Text style={styles.subtitle}>¿Como se calcula la intensidad?</Text>
              <Text style={styles.text_info}>
                I=V/R
              </Text>
            </View>

            <View>
              <Text style={styles.subtitle}>Calula la intensidad</Text>
              <TextInput
                style={styles.input}
                onChangeText={setInputValue1}
                value={inputValue1}
                placeholder="Ingresa el voltaje"
                keyboardType="numeric"
                require

              />
              {errorVoltaje ? <Text style={styles.errorText}>{errorVoltaje}</Text> : null}
              <TextInput
                style={styles.input}
                onChangeText={setInputValue2}
                value={inputValue2}
                placeholder="Ingresa la resistencia"
                keyboardType="numeric"
                require
              />
              {errorResistencia ? <Text style={styles.errorText}>{errorResistencia}</Text> : null}
              <Button
                title="Calcular"
                onPress={calcularSuma}
              />
              {resultado !== null && (
                <Text style={styles.resultado}>
                  La intensidad es: {resultado}
                </Text>
              )}
            </View>
            <View>
              <Text style={styles.subtitle}>Mas datos</Text>
              <Text style={styles.text_info}> {'\u2022'}
                En un circuito en serie la intensidad total es la misma en todas las resistencias</Text>
              <Text style={styles.text_info}> {'\u2022'}
                En un circuito en paralelo es la suma de todas las resistencias</Text>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }

  function CalcularResistenciaScreen() {
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [resultado, setResultado] = useState(null);
    const [errorVoltaje, setErrorVoltaje] = useState('');
    const [errorResistencia, setErrorResistencia] = useState('');

    const calcularSuma = () => {
      setErrorVoltaje('');
      setErrorResistencia('');

      // Validar voltaje
      if (!inputValue1) {
        setErrorVoltaje('Por favor, ingresa el voltaje.');
        return;
      }

      // Validar resistencia
      if (!inputValue2) {
        setErrorResistencia('Por favor, ingresa la intensidad.');
        return;
      }
      const division = parseFloat(inputValue1) / parseFloat(inputValue2);
      parseFloat(setResultado(division));
    };
    return (
      <View >
        <KeyboardAvoidingView
          behavior={Platform.Os === "android" ? "padding" : "height"}>
          <ScrollView style={{ flexGrow: 22 }}>
            <View style={styles.container_image2}>
              <Image source={require('../calculadora_Ohm/img/Intensidadreultado.png')} style={styles.imagen} />
            </View>
            <View>
              <Text style={styles.subtitle}>¿Que es la resistencia?</Text>
              <Text style={styles.text_info}>
                La resistencia es la oposición a la circulación de corriente en cualquier circuito. La resistencia se mide en Ohm y el símbolo de esta unidad es Ω.
              </Text>
            </View>
            <View>
              <Text style={styles.subtitle}>¿Como se calcula la resistencia?</Text>
              <Text style={styles.text_info}>
                R=V/I
              </Text>
            </View>

            <View>
              <Text style={styles.subtitle}>Calula la resistencia</Text>
              <TextInput
                style={styles.input}
                onChangeText={setInputValue1}
                value={inputValue1}
                placeholder="Ingresa el voltaje"
                keyboardType="numeric"
                require

              />
              {errorVoltaje ? <Text style={styles.errorText}>{errorVoltaje}</Text> : null}
              <TextInput
                style={styles.input}
                onChangeText={setInputValue2}
                value={inputValue2}
                placeholder="Ingresa la intensidad"
                keyboardType="numeric"
                require
              />
              {errorResistencia ? <Text style={styles.errorText}>{errorResistencia}</Text> : null}
              <Button
                title="Calcular"
                onPress={calcularSuma}
              />
              {resultado !== null && (
                <Text style={styles.resultado}>
                  La resistencia es: {resultado} <Text> Ω.</Text>
                </Text>
              )}
            </View>
            <View>
              <Text style={styles.subtitle}>Mas datos</Text>
              <Text style={styles.text_info}> {'\u2022'}
                En un circuito en serie la intensidad total es la misma en todas las resistencias</Text>
              <Text style={styles.text_info}> {'\u2022'}
                En un circuito en paralelo es la suma de todas las resistencias</Text>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
  function CalcularResistenciaTotalScreen() {
    const [resistance1, setResistance1] = useState('');
    const [resistance2, setResistance2] = useState('');
    const [totalResistance, setTotalResistance] = useState(null);

    // Función para calcular la resistencia total
    const calculateTotalResistance = () => {
      const r1 = parseFloat(resistance1);
      const r2 = parseFloat(resistance2);

      if (!isNaN(r1) && !isNaN(r2) && r1 > 0 && r2 > 0) {
        // Calcula la resistencia total en paralelo
        const total = 1 / (1 / r1 + 1 / r2);
        setTotalResistance(total.toFixed(2) + ' Ω');
      } else {
        // Valores de resistencia inválidos
        setTotalResistance('Valores de resistencia inválidos');
      }
    };

    return (
      <View >
        <KeyboardAvoidingView
          behavior={Platform.Os === "android" ? "padding" : "height"}>
          <ScrollView style={{ flexGrow: 22 }}>
            <View style={styles.container_image2}>
              <Image source={require('../calculadora_Ohm/img/Intensidadreultado.png')} style={styles.imagen} />
            </View>
            <View>
              <Text style={styles.subtitle}>¿Que es la resistencia?</Text>
              <Text style={styles.text_info}>
                La resistencia es la oposición a la circulación de corriente en cualquier circuito. La resistencia se mide en Ohm y el símbolo de esta unidad es Ω.
              </Text>
            </View>
            <View>
              <Text style={styles.subtitle}>¿Como se calcula la resistencia total?</Text>
              <Text style={styles.text_info}>
              R 
total
1= R 
1​1+ R 21+ R 31+…+ R n1

              </Text>
            </View>

            <View>
              <Text style={styles.subtitle}>Calula la resistencia</Text>
              <TextInput style={styles.input}
                placeholder="Resistencia 1"
                keyboardType="numeric"
                onChangeText={(text) => setResistance1(text)}
                value={resistance1}
              />
            
              <TextInput
                style={styles.input}
                placeholder="Resistencia 2"
                keyboardType="numeric"
                onChangeText={(text) => setResistance2(text)}
                value={resistance2}
              />
              <Button title="Calcular Resistencia Total" onPress={calculateTotalResistance} />
              {totalResistance !== null && <Text>La resistencia total en paralelo es: {totalResistance}</Text>}
            </View>
            <View>
              <Text style={styles.subtitle}>Mas datos</Text>
              <Text style={styles.text_info}> {'\u2022'}
                En un circuito en serie la intensidad total es la misma en todas las resistencias</Text>
              <Text style={styles.text_info}> {'\u2022'}
                En un circuito en paralelo es la suma de todas las resistencias</Text>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }

  function SerieScreen({ navigation }) {
    return (
      <View>
        <View>
          <Text style={styles.text_title}>Circuito en serie</Text>
        </View>
        <View style={styles.container_image}>
          <Image source={require('../calculadora_Ohm/img/enserie2.png')} style={styles.imagen} />
        </View>
        <View style={styles.container_2}>
          <Text style={styles.subtitle}>¿Que es un circuito en serie?</Text>
          <Text style={styles.text_info}>Se llama circuitos en serie a un tipo de circuito eléctrico que posee un único camino para la corriente.</Text>
        </View>
        <View style={styles}>
          <Text style={styles.text_title}>Qué operacion deseas realizar</Text>
          <StatusBar style="auto" />
          <View style={styles.buttonsOptionsContainer}>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Calcular voltaje')}>
              <Text style={styles.buttonText}>Calcular voltaje</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Calcular intensidad')}>
              <Text style={styles.buttonText}>Calcular intensidad</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Calcular resistencia')}>
              <Text style={styles.buttonText}>Calcular resistencia</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  function ParaleloScreen({ navigation }) {
    return (
      <View>
        <View>
          <Text style={styles.text_title}>Circuito en paralelo</Text>
        </View>
        <View style={styles.container_image}>
          <Image source={require('../calculadora_Ohm/img/parelelo2.png')} style={styles.imagen} />
        </View>
        <View style={styles.container_2}>
          <Text style={styles.subtitle}>¿Que es un circuito en paralelo?</Text>
          <Text style={styles.text_info}>Se llama circuitos en serie a un tipo de circuito eléctrico que posee un único camino para la corriente.</Text>
        </View>
        <View style={styles}>
          <Text style={styles.text_title}>Qué operacion deseas realizar</Text>
          <StatusBar style="auto" />
          <View style={styles.buttonsOptionsContainer2}>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Calcular voltaje')}>
              <Text style={styles.buttonText}>Calcular voltaje</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Calcular intensidad')}>
              <Text style={styles.buttonText}>Calcular itensidad</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Calcular resistencia')}>
              <Text style={styles.buttonText}>Calcular resistencia</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Calcular resistencia total')}>
              <Text style={styles.buttonText}>Calcular resistencia total</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  const Stack = createStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Serie" component={SerieScreen} />
        <Stack.Screen name="Paralelo" component={ParaleloScreen} />
        <Stack.Screen name="Calcular intensidad" component={CalcularIntensidadScreen} />
        <Stack.Screen name="Calcular voltaje" component={CalcularVoltajeScreen} />
        <Stack.Screen name="Calcular resistencia" component={CalcularResistenciaScreen} />
        <Stack.Screen name="Calcular resistencia total" component={CalcularResistenciaTotalScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  text: {
    color: 'black', // Esto hace que el color del texto sea negro
    textAlign: 'center', // Esto centra el texto
  },
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: 'row', // Añade un margen superior a cada botón
    columnGap: 34,
    paddingLeft: 30,
    paddingRight: 150,
    marginTop: 60,
  },
  buttonText: {
    fontSize: 16,
  },

  buttonStyle: {
    paddingVertical: 10, // Aumenta el espacio vertical dentro del botón
    paddingHorizontal: 20, // Aumenta el espacio horizontal dentro del botón
    margin: 8,
    borderWidth: 4,         // Establece el ancho del borde del botón
    borderColor: '#716875', // Establece el color del borde del botón
    backgroundColor: '#fff',// Establece el color de fondo del botón
    borderRadius: 5,        // Redondea las esquinas del botón
    // Otros estilos que desees agregar
  },
  buttonsOptionsContainer: {
    flexDirection: 'col', // Alinea los botones en fila
    justifyContent: 'space-between', // Espacia los botones uniformemente
    marginTop: 65,
    // Otros estilos para el contenedor de botones
  },
  buttonsOptionsContainer2: {
    flexDirection: 'col', // Alinea los botones en fila
    justifyContent: 'space-between', // Espacia los botones uniformemente
    marginTop: 5,
    // Otros estilos para el contenedor de botones
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    width: '80%', // Ancho del input
    borderRadius: 5, // Bordes redondeados
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
  },
  text_title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 1, // Puedes ajustar la distancia entre el texto y la imagen
    textAlign: 'center', // Esto asegura que el texto esté centrado
  },
  subtitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 1, // Puedes ajustar la distancia entre el texto y la imagen
    textAlign: 'center', // Esto asegura que el texto esté centrado
  },
  text_info: {
    fontSize: 20,
    fontWeight: 'normal',
    marginBottom: 1, // Puedes ajustar la distancia entre el texto y la imagen
    textAlign: 'center',
    // Esto asegura que el texto esté centrado
  },
  container_image: {
    flex: 9,
    justifyContent: 'center', // Centra los hijos verticalmente en el contenedor
    alignItems: 'center',
    marginTop: 160
  },
  container_image2: {
    marginTop: -98,
    flex: 9,
    justifyContent: 'center', // Centra los hijos verticalmente en el contenedor
    alignItems: 'center',
    marginBottom: -100
  },
  imagen: {

    width: 500, // Ajusta estas medidas según tus necesidades
    height: 500,
    resizeMode: 'contain'
  },
  imagen2: {

    width: 100, // Ajusta estas medidas según tus necesidades
    height: 100,
    resizeMode: 'contain'
  },
  container_2: {
    marginTop: 170
  },
  errorText: {
    color: 'red',
    // Otros estilos para el mensaje de error
  },
});
