import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class App extends React.Component {
  state = {
    countIndex: 0,
    countArray: [1, 2, 3, 4, 5, 6, 7, 8],
  };

  incrementValue = () => {
    if (this.state.countIndex < this.state.countArray.length) {
      this.setState({ countIndex: this.state.countIndex + 1 });
    }
    console.log(this.state.countArray[this.state.countIndex]);
  };
  decrementValue = () => {
    if (this.state.countIndex > 0) {
      this.setState({ countIndex: this.state.countIndex - 1 });
    }
    console.log(this.state.countArray[this.state.countIndex]);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 40 }}>
          {this.state.countArray[this.state.countIndex]}
        </Text>

        <Button title='Increment' onPress={this.incrementValue} />

        <View style={{ padding: 30 }} />

        <Button title='Decrement' onPress={this.decrementValue} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
