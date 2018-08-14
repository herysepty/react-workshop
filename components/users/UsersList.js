import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import UsersItem from './UsersItem'

const UsersList = (props) => {
    const {users} = props

    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.container}>
                {
                    users.map((user, index) => (
                        <UsersItem key={index} user={user}/>
                    ))
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scroll: {
        width: '100%'
    },
    container: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20
    }
})

export default UsersList