import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
  StatusBar,
} from 'react-native';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [nome, setNome] = useState('');
  const [foto, setFoto] = useState(null);
  const [posts, setPosts] = useState([]);

  async function tirarFoto() {
    const permissao = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissao.granted) {
      alert('Permissão negada');
      return;
    }
    const resultado = await ImagePicker.launchCameraAsync();
    if (!resultado.canceled) {
      setFoto(resultado.assets[0].uri);
    }
  }

  function postar() {
    if (nome === '' || foto === null) {
      alert(
        'PROTOCOLO FALHOU: Nome e foto são obrigatórios para a sincronização do sinal!'
      );
      return;
    }
    const novoPost = {
      id: Date.now().toString(),
      nome: nome,
      imagem: foto,
    };
    setPosts([novoPost, ...posts]);
    setNome('');
    setFoto(null);
  }

  function renderizarItem({ item }) {
    return (
      <View style={estilosGlitchy.card}>
        <Text style={estilosGlitchy.usuario}> {item.nome} </Text>
        <Image
          source={{ uri: item.imagem }}
          style={estilosGlitchy.imagemFeed}
        />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <View style={estilosGlitchy.container}>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={require('./assets/background_glitchy.png')}
          resizeMode="cover"
          style={estilosGlitchy.background}>
          <SafeAreaView style={{ flex: 1 }}>
            <View style={estilosGlitchy.content}>
              <Image
                source={require('./assets/titulo_Glitchy.png')}
                style={estilosGlitchy.logoApp}
              />
              <Text style={estilosGlitchy.textoIntroducao}>
                O erro faz parte do sistema. {'\n'}
                Integre-se a ele, ou seja engolido.
              </Text>
              <Text style={estilosGlitchy.textoGuia}>
                [ REQUISITO: IDENTIFICAÇÃO_DE_ORIGEM ]
              </Text>
              <TextInput
                style={estilosGlitchy.input}
                placeholder="Quem está enviando o sinal?"
                placeholderTextColor="#999"
                value={nome}
                onChangeText={setNome}
              />

              <TouchableOpacity
                style={estilosGlitchy.botao}
                onPress={tirarFoto}>
                <Text style={estilosGlitchy.textBotao}>Capturar Sinal</Text>
              </TouchableOpacity>

              {foto && (
                <View>
                  <Image
                    source={{ uri: foto }}
                    style={estilosGlitchy.preview}
                  />
                  <TouchableOpacity
                    style={estilosGlitchy.botaoPostar}
                    onPress={postar}>
                    <Text style={estilosGlitchy.textBotao}> Transmitir </Text>
                  </TouchableOpacity>
                </View>
              )}

              <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={renderizarItem}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
    </SafeAreaProvider>
  );
}

const estilosGlitchy = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  logoApp: {
    width: 250,
    marginTop: 60,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  textoGuia: {
    fontSize: 14,
    color: '#999',
    textAlign: "start",
    marginBottom: 10,
  },
  textoIntroducao: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 34,
    marginTop: 22,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  input: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: 15,
    borderRadius: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    fontSize: 14,
  },
  botao: {
    backgroundColor: '#9e00ff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
  },
  textBotao: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16,
  },
  preview: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
  botaoPostar: {
    backgroundColor: '#ff3400',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1.5,
    borderColor: 'white',
  },
  usuario: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 5,
    marginLeft: 10,
    color: 'white',
  },
  imagemFeed: {
    width: '95%',
    height: 300,
    borderRadius: 8,
    marginLeft: 10,
    marginRight: 0,
    borderWidth: 1,
    marginBottom:10,
    borderColor: 'white'
  },
});
