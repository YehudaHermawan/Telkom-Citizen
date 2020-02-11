import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Body,
  Icon,
  Text,
  Thumbnail,
} from 'native-base';
import styles from './styles';
import IMAGES from '../../configs/images';
import {SwitchActions, StackActions} from 'react-navigation';
import {View} from 'react-native';

export default class Profilescreen extends Component {
  _home = () => {
    const popAction = StackActions.pop({
      n: 1,
    });
    this.props.navigation.dispatch(popAction);
  };

  _logout = () => {
    this.props.navigation.dispatch(SwitchActions.jumpTo({routeName: 'Login'}));
  };

  _about = () => {
    const pushAction = StackActions.push({
      routeName: 'About',
    });
    this.props.navigation.dispatch(pushAction);
  };

  _privacy = () => {
    const pushAction = StackActions.push({
      routeName: 'Privacy',
    });
    this.props.navigation.dispatch(pushAction);
  };

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Body>
            <Title style={styles.title}>Profile</Title>
          </Body>
        </Header>
        <Content padder>
          <Thumbnail large source={IMAGES.loginLogo} style={styles.thumb} />
          <Text style={styles.name}>Marzandi Zahran</Text>
          <View style={styles.nis}>
            <Text style={styles.textNis}>3103117315</Text>
          </View>
          <Button iconRight style={styles.iconButton} onPress={this._about}>
            <Text uppercase={false} style={styles.textButton}>About Us</Text>
            <Icon style={styles.buttonIcon} name="arrow-forward" />
          </Button>
          <Button iconRight style={styles.iconButton2} onPress={this._privacy}>
            <Text uppercase={false} style={styles.textButton}>Privacy & Policy</Text>
            <Icon style={styles.buttonIcon} name="arrow-forward" />
          </Button>
          <Button block style={styles.button} onPress={this._logout}>
            <Text>Logout</Text>
          </Button>
        </Content>
        <Footer style={styles.shadow}>
          <FooterTab style={styles.footer}>
            <Button onPress={this._home}>
              <Icon name="home" style={styles.icon} />
            </Button>
            <Button>
              <Icon name="person" style={styles.iconActive} />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
