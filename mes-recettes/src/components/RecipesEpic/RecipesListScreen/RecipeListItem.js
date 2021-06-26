import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'

const RecipeListItem = ({item, navigation}) => {
    return(
        <TouchableOpacity onPress={() => {
                navigation.navigate("RecipesDetails", {
                    id: item.id
                });
        }}>
            <View style={styles.container}>
                <Image source={{uri: item.image}} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    image: {
        width: 100,
        height: 100
    },
    title: {
        fontSize: 20,
        fontWeight:'bold',
        marginLeft: 25,
        marginTop: 10,
    }

});


export default RecipeListItem