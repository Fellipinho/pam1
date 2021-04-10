import { StatusBar } from 'expo-status-bar';
import React, { Component } from "react"
import { View, Text, StyleSheet } from 'react-native'

import Header from "./src/components/Header"

export default class App extends Component {
    render() {
        return (
            <View>
                <Header nome={"Fellipe Pires de Carvalho"}
                curso={"Desenvolvimento de Sistemas"}/>
            </View>
        )
    }
}


