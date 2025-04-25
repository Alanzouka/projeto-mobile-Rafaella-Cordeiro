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
      headerBackgroundColor={{ light: '#blue', dark: '#0a3b79' }}
      headerImage={
        <Image
          source={require('@/assets/images/image.png')}
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
      <br></br>
        <ThemedText type="defaultSemiBold">
          Cartão Físico <br></br>
        </ThemedText>
        <ThemedText>
          Alan Cordeiro Santos
        </ThemedText>
        <br></br>
        <ThemedText type="defaultSemiBold"> Cartão Virtual</ThemedText>
        <ThemedText> Alan Cordeiro Santos</ThemedText>
        <br></br>
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
        <ExternalLink href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fjrocknews.com%2F2023%2F08%2Fjiluka-anime-weekend-atlanta.html&psig=AOvVaw3HhvXMdL_fIbLx0dtRe-uK&ust=1745621660115000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOCVt8nh8YwDFQAAAAAdAAAAABAE">
          <ThemedText type="link">Clicando Aqui</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Faturas pagas">
        <ThemedText>
          <br></br>
          Fatura paga <br></br> R$259,43 <br></br><ThemedText type="defaultSemiBold">VER MAIS <br></br></ThemedText> <br></br> Fatura atrasada <br></br> R$38,98{' '} <br></br>
          <ThemedText type="defaultSemiBold">
              VER MAIS <br></br>
          </ThemedText>
          <br></br>
        </ThemedText>
      </Collapsible>
      <Collapsible title="Boletos">
        <ThemedText>
          Pagamento em aberto <br></br>
          <ThemedText type="defaultSemiBold">Mais informações</ThemedText> 
          </ThemedText>
          <Button color={'blue'}
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="QR code"
/>    
        <ThemedText>
          Pagamento em aberto <br></br>
          <ThemedText type="defaultSemiBold">Mais informações</ThemedText>
        </ThemedText>
        <Button color={'blue'}
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="QR code"
/>    
      </Collapsible>
      <Collapsible title="Senhas">
        <ThemedText>
          Senha do cartão físico <br></br> ********* <br></br>
          <Button color={'blue'}
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="VER SENHA"
/>      <br></br>
        <br></br> Senha do banco <br></br> ********* <br></br>
        <Button color={'blue'}
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="VER SENHA"
/>    
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
