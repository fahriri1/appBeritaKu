import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity} from 'react-native';

export default function SplashScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.background}
      resizeMode="cover"
    >

        <Image
          source={require('../assets/PRIMARY.png')}
          style={styles.logo}
        />

        <TouchableOpacity style={[styles.tombolMasuk, styles.tombol]} onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.textButtonMasuk, styles.textButton]}>Masuk</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.tombolDaftar, styles.tombol]} onPress={() => navigation.navigate('Daftar')}>
          <Text style={[styles.textButtonDaftar, styles.textButton]}>Daftar</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: 'center', alignItems: 'center'},
  logo: { marginBottom: 20 },

  tombol:{ 
    borderRadius: 5, 
    width: 253, 
    height: 36, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  
  textButton:{ fontWeight: 700, fontSize: 14 },
  tombolMasuk:{ borderWidth: 1, borderColor: '#134B70'},
  tombolDaftar:{backgroundColor: '#134B70', marginTop: 20 },
  textButtonDaftar:{ color: 'white'}
});
