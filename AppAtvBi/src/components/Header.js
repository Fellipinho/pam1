import { StatusBar } from 'expo-status-bar';
import React, { Component } from "react"
import { View, Text, StyleSheet } from 'react-native'

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}> 
                <Text style={styles.titulo}>Curso </Text>
                <Text style={styles.name}>{this.props.curso}</Text>  
                <Text style={styles.titulo}>Aluno </Text>          
                <Text style={styles.name}>{this.props.nome}</Text>            
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container:{

        marginTop: 300,
        backgroundColor:'#91D9DB',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10

    },

    titulo: {
      fontSize: 30,
      color: 'gray'
    },

    name: {
        textAlign: 'center',
        fontSize: 30,
        color: '#91D8DB'
    }

})


