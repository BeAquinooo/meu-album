import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

const fotos = [
  {
    id: 1,
    titulo: 'Natureza',
    descricao: 'Uma paisagem tranquila para apreciar.',
    imagem: 'https://picsum.photos/id/10/800/600',
  },
  {
    id: 2,
    titulo: 'Horizonte',
    descricao: 'Um momento para observar a beleza do mundo.',
    imagem: 'https://picsum.photos/id/11/800/600',
  },
  {
    id: 3,
    titulo: 'Paisagem natural',
    descricao: 'A natureza e seus detalhes especiais.',
    imagem: 'https://picsum.photos/id/15/800/600',
  },
  {
    id: 4,
    titulo: 'Tranquilidade',
    descricao: 'Um lugar perfeito para descansar e relaxar.',
    imagem: 'https://picsum.photos/id/16/800/600',
  },
  {
    id: 5,
    titulo: 'Momentos',
    descricao: 'Uma fotografia para guardar na memória.',
    imagem: 'https://picsum.photos/id/17/800/600',
  },
  {
    id: 6,
    titulo: 'Aventura',
    descricao: 'Explorando lugares e descobrindo novas paisagens.',
    imagem: 'https://picsum.photos/id/18/800/600',
  },
];

function Miniatura({ foto, aoPressionar }) {
  return (
    <Pressable
      onPress={aoPressionar}
      style={styles.miniaturaContainer}
    >
      <Image
        source={{ uri: foto.imagem }}
        style={styles.miniatura}
      />
    </Pressable>
  );
}

export default function App() {

  const [indiceAtual, setIndiceAtual] = useState(0);

  const fotoAtual = fotos[indiceAtual];

  function proximaFoto() {
    if (indiceAtual < fotos.length - 1) {
      setIndiceAtual(indiceAtual + 1);
    }
  }

  function fotoAnterior() {
    if (indiceAtual > 0) {
      setIndiceAtual(indiceAtual - 1);
    }
  }

  function selecionarFoto(indice) {
    setIndiceAtual(indice);
  }

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="#101820"
      />

      <ScrollView contentContainerStyle={styles.conteudo}>

        <View style={styles.cabecalho}>

          <Text style={styles.logo}>
            MEU ÁLBUM
          </Text>

          <Text style={styles.subtitulo}>
            Coleção de paisagens e momentos
          </Text>

        </View>

        <View style={styles.card}>

          <Image
            source={{ uri: fotoAtual.imagem }}
            style={styles.imagemPrincipal}
            resizeMode="cover"
          />

          <View style={styles.informacoes}>

            <Text style={styles.tituloFoto}>
              {fotoAtual.titulo}
            </Text>

            <Text style={styles.descricaoFoto}>
              {fotoAtual.descricao}
            </Text>

          </View>

        </View>

        <View style={styles.navegacao}>

          <Pressable
            style={[
              styles.botao,
              indiceAtual === 0 && styles.botaoDesativado
            ]}
            onPress={fotoAnterior}
            disabled={indiceAtual === 0}
          >

            <Text style={styles.textoBotao}>
              ❮ Anterior
            </Text>

          </Pressable>

          <Pressable
            style={[
              styles.botao,
              indiceAtual === fotos.length - 1 && styles.botaoDesativado
            ]}
            onPress={proximaFoto}
            disabled={indiceAtual === fotos.length - 1}
          >

            <Text style={styles.textoBotao}>
              Próxima ❯
            </Text>

          </Pressable>

        </View>

        <View style={styles.secaoGaleria}>

          <Text style={styles.tituloGaleria}>
            Todas as fotos
          </Text>

          <Text style={styles.descricaoGaleria}>
            Selecione uma imagem para visualizar
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.listaMiniaturas}
          >

            {fotos.map((foto, indice) => (

              <Miniatura
                key={foto.id}
                foto={foto}
                aoPressionar={() => selecionarFoto(indice)}
              />

            ))}

          </ScrollView>

        </View>

        <Text style={styles.rodape}>
          Meu Álbum de Fotos • React Native
        </Text>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#101820',
  },

  conteudo: {
    padding: 20,
    paddingTop: 35,
    paddingBottom: 40,
  },

  cabecalho: {
    alignItems: 'center',
    marginBottom: 30,
  },

  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 3,
  },

  subtitulo: {
    fontSize: 14,
    color: '#AAB6BF',
    marginTop: 8,
  },

  card: {
    backgroundColor: '#1C2933',
    borderRadius: 18,
    overflow: 'hidden',
    elevation: 5,
  },

  imagemPrincipal: {
    width: '100%',
    height: 290,
  },

  informacoes: {
    padding: 20,
  },

  tituloFoto: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },

  descricaoFoto: {
    fontSize: 14,
    color: '#B9C5CD',
    lineHeight: 21,
  },

  navegacao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
  },

  botao: {
    backgroundColor: '#00A896',
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 10,
  },

  botaoDesativado: {
    opacity: 0.4,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },

  secaoGaleria: {
    marginTop: 35,
  },

  tituloGaleria: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

  descricaoGaleria: {
    color: '#AAB6BF',
    fontSize: 13,
    marginTop: 5,
  },

  listaMiniaturas: {
    marginTop: 20,
  },

  miniaturaContainer: {
    marginRight: 12,
    borderRadius: 12,
    overflow: 'hidden',
  },

  miniatura: {
    width: 95,
    height: 85,
  },

  rodape: {
    color: '#71808A',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 40,
  },

});