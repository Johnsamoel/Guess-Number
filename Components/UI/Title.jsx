
import { Text  , View, StyleSheet} from 'react-native';

const Title = ({children , Styles}) => {

    return (
        <View>
        <Text style={[ styles.title , Styles ]}>{children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        textAlign:'center',
        fontFamily:'poppins-bold',
        color:'#834d9b'
    }
})

export default Title;