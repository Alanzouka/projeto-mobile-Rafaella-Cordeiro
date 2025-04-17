import { Image, StyleSheet, Platform, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { blue } from 'react-native-reanimated/lib/typescript/Colors';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title"> AlanzokaPix</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Bem vindo ao seu Banco! <br></br>
        <Button color={'blue'}
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="SUA CONTA"
/>
        </ThemedText>
       
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Saldo</ThemedText>
        <ThemedText>
          R$520,00 <br></br>
          <Button color={'blue'}
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="PIX"
/>
        </ThemedText>
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Limite total</ThemedText>
        <ThemedText>
          5.000,00{' '}
        </ThemedText>
        <ThemedText type="subtitle">Vencimento</ThemedText>
        <ThemedText>
          04/08/2035
        </ThemedText>
        <ThemedText type="subtitle">Faturas em aberto</ThemedText>
        <ThemedText>
          Vencimento: 10/05<br></br> R$2.883,00 <br></br>
          <Button color={'blue'}
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="Ler mais"
/>
         <br></br> Vencimento: 10/06 <br></br> R$1.884,00 <br></br>
          <Button color={'blue'}
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="Ler mais"
/>
        </ThemedText>
        <Button color={'blue'}
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="Ver mais faturas"
/>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
