import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class Form extends Component {
    render() {
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Email"
                placeholderTextColor = "#ffffff"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}></TextInput>

                <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor = "#ffffff"
                ref={(input) => this.password = input}></TextInput>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container : {
        flexGrow: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    inputBox: {
        width:300,
        backgroundColor:'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize:16,
        color:'#1a0d00',
        marginVertical: 10
    },
    button: {
        width:300,
        backgroundColor:'#734d26',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontWeight:'500',
        color:'#f2e6d9',
        textAlign:'center'
    }
        
});