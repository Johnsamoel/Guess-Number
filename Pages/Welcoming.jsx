import {  View , StyleSheet } from 'react-native' ;

import Card from "../Components/Card";

const Welcoming = () => {
    return (
        <View style={styles.container}>
        <Card title='Guess the Number Game' />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
})

export default Welcoming;