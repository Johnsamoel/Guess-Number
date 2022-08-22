import { View, Text, Pressable, StyleSheet } from 'react-native';

const PrimaryButton = ({children , onPress}) => {
    return (
        <View style={styles.buttonOuterContainer}>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [styles.buttonInnerContainer, styles.pressed]
              : styles.buttonInnerContainer
          }
          onPress={onPress}
          android_ripple={{ color: '#A504E9' }}
        >
          <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
      </View>
    );
};


const styles = StyleSheet.create({
    buttonOuterContainer: {
      width:150,
      height:35 ,
      backgroundColor:'#834d9b',
      borderRadius: 28,
      margin: 4,
      overflow: 'hidden',
    },
    buttonInnerContainer: {
      backgroundColor: '#834d9b',
      paddingVertical: 8,
      paddingHorizontal: 16,
      elevation: 2,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      fontWeight:'bold'
    },
    pressed: {
      opacity: 0.75,
    },
  });
export default PrimaryButton;