import React from 'react';
import { StyleSheet, SafeAreaView, Text, Image, ScrollView } from 'react-native';

export default function DetailPage(props: any) {
    const firstName = props.route.params.firstName
    const lastName = props.route.params.lastName
    const age = props.route.params.age
    const image = { uri: props.route.params.image };

    const companyName = props.route.params.companyName
    const companyDepartment = props.route.params.companyDepartment
    const companyCity = props.route.params.companyCity

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Image
                    style={styles.userImage}
                    source={image}
                />
                <Text style={styles.infoName}>{firstName} {lastName}</Text>
                <Text style={styles.info}>Age: {age}</Text>
                <Text style={[styles.info, { fontWeight: "bold", fontSize: 20, marginTop: 23 }]}>Company Details</Text>
                <Text style={styles.info}>Name: {companyName}</Text>
                <Text style={styles.info}>Department: {companyDepartment}</Text>
                <Text style={styles.info}>City: {companyCity}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
    },
    userImage: {
        width: 150,
        height: 150,
        alignSelf: "center",
    },
    infoName: {
        marginTop: 10,
        fontSize: 32,
        textAlign: "center"
    },
    info: {
        marginLeft: 20,
        marginTop: 10,
        fontSize: 18,
    }
});
