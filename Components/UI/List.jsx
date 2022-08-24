import { StyleSheet , View , FlatList } from "react-native";
import GuessLogItem from "./GuessLogItem";


const List = ({guessRounds , guessRoundsListLength }) => {
    return (
        <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={() => Math.random() }
        />
      </View>
    );
};


const styles = StyleSheet.create({

    listContainer: {
      flex: 1,
      padding: 16,
    }
  });


export default List;