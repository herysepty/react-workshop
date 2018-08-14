import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const UsersItem = (props) => {
    const {user} = props

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{user.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection:'row',
        backgroundColor: '#666',
        padding: 10,
        marginBottom:10,
        width: '100%'
    },
    text: {
        color:'#eee',
        fontSize: 30
    }
})
export default UsersItem