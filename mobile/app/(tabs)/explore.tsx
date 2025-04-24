import { StyleSheet, Image, Platform, Button } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Histórico
        <br></br>
        <Button color={'blue'}
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="BUSCAR"
/>
      </ThemedText> 
      </ThemedView>
      <Collapsible title="Transferências">
        <ThemedText>
          Transferência enviada <br></br> Maykon da Costa <br></br> R$2,00:{' '} <br></br>
          <ThemedText type="defaultSemiBold">VER MAIS</ThemedText> 
        </ThemedText>
        <br></br>
        <ThemedText>
          Transferência recebida <br></br> de Maykon da Costa <br></br> R$200,00 <br></br> <ThemedText type="defaultSemiBold">VER MAIS</ThemedText> 
        </ThemedText>
      </Collapsible>
      <Collapsible title="Cartões">
        <ThemedText>
          You can open this project on Android, iOS, and the web. To open the web version, press{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Assistente">
        <ThemedText>
          Olá! Seja bem-vindo ao Banco Alanzokapix. <br></br>
          Sou seu assistente virtual, pode me chamar de Fall e estou aqui para qualquer dúvida que tiver - seja consultar seu saldo, <br></br>
          fazer Transferências ou até te lembrar do vencimento da sua fatura. Para uma conversa clique abaixo. <br></br>
          <br></br>
          <Button color={'blue'}
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="Chat com Fall"
/>
        
        <br></br> </ThemedText> <ThemedText> Se ainda estiver tendo dificuldades, entre em contato com um de nossos Funcionários </ThemedText> 
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Clicando Aqui</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Faturas pagas">
        <ThemedText>
          Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> to see how to load{' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
            custom fonts such as this one.
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Boletos">
        <ThemedText>
          This template has light and dark mode support. The{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
          what the user's current color scheme is, and so you can adjust UI colors accordingly.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Senhas">
        <ThemedText>
          This template includes an example of an animated component. The{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
          the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>{' '}
          library to create a waving hand animation.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
