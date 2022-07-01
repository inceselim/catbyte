import React from 'react';
import { View, Text, SafeAreaView, ImageBackground, ScrollView } from 'react-native';
import { styles } from './style';


export default function ShowUser(props: any) {
    const image = { uri: props.image };
    const firstName = props.firstName
    const age = props.age
    return (
        
        <View style={styles.container} >
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.text} >{firstName}, {age}</Text>
            </ImageBackground>
        </View>
    );
}