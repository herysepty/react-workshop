import React from 'react'
import {View, StyleSheet, Button, TextInput, Alert, Image} from  'react-native'

const UsersInput = (props) => {
    return <View>
        {/*<Image source={require('../../assets/images/gadjian.jpg')} />*/}
        <TextInput
            placeholder="Type here to translate!"
        />
        <Button
            styles={styles.button}
            title="Add"
            onPress={
                (event) =>
            }
        />
    </View>
}

export default UsersInput

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        alignItems: 'center'
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white'
    }
})