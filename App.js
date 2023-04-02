import { StyleSheet, Text, View } from 'react-native';
import Plants from './src/Screens/Plants'

export default function App() {
  return (
    <View style={styles.container}>
      <Plants/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    borderWidth: '1',
    borderRadius:'30',
    borderColor:'green'
  }
});
