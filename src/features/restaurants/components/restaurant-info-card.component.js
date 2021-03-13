import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

export const RestaurantInfoCard = ({ restaurant = {}} ) => {
    const {
        name = 'Some Restaurant', 
        icon, 
        photos = ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkeyassets-p2.timeincuk.net%2Fwp%2Fprod%2Fwp-content%2Fuploads%2Fsites%2F53%2F2018%2F04%2Fbeetroot-burger.jpg&f=1&nofb=1"], 
        address = 'Some address', 
        isOpenNow = true, 
        rating = 4, 
        isClosedTemporarily,
    } = restaurant;

    return (
        <Card elevation={5} style={styles.card}>
            <Card.Cover key={name} style={styles.cover} source={{uri: photos[0] }}/>
            <Text style={styles.title}>{name}</Text>
        </Card>
    )
};

const styles = StyleSheet.create({
    card: {backgroundColor: 'white'},
    cover: {padding: 20, backgroundColor: 'white'},
    title: {padding: 16},
});