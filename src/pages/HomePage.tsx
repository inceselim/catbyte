import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//
//import Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from '../redux/features/dataSlice/dataSlice';
import { useAppDispatch, useAppSelector } from '../redux/store';
import ShowUser from '../components/ShowUser';


export default function HomePage(props: any) {
    const navigation: any = useNavigation();
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.user)

    useEffect(() => {
        dispatch(fetchUser())
    }, [dispatch])

    return (
        <SafeAreaView style={{ flex: 1 ,}}>

            {/*if loading */}
            <Text style={{ fontSize: 27 }}>{user.loading && "Loading..."}</Text>

            {/*if it is wrong */}
            {user.error && <Text>{user.error}</Text>}
            <ScrollView>
                {user.data?.users.map(
                    (user) => (
                        <View key={user.id} >
                            <TouchableOpacity 
                            onPress={() => navigation.navigate("Detail",
                                {
                                    firstName: user.firstName,
                                    lastName: user.lastName,
                                    age: user.age,
                                    image: user.image,

                                    companyName: user.company.name,
                                    companyDepartment: user.company.department,
                                    companyCity: user.company.address.city,
                                }
                            )}>
                                <ShowUser firstName={user.firstName} age={user.age} image={user.image} />
                            </TouchableOpacity>
                        </View>
                    ))}
            </ScrollView>
            <TouchableOpacity
                style={{ margin: 20, backgroundColor: "#044", borderRadius: 10, }}>
                <Text style={{ fontSize: 22, textAlign: "center", color: "#fff",padding:3 }}>Add</Text>
            </TouchableOpacity>
        </SafeAreaView >
    );
}
