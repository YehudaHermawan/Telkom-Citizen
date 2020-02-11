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
  View,
} from 'native-base';
import {Image} from 'react-native';
import {StackActions} from 'react-navigation';
import IMAGES from '../../configs/images';
import styles from './styles';

export default class Homescreen extends Component {
  _lapor = () => {
    const pushAction = StackActions.push({
      routeName: 'Lapor',
    });
    this.props.navigation.dispatch(pushAction);
  };

  _kritikSaran = () => {
    const pushAction = StackActions.push({
      routeName: 'Feedback',
    });
    this.props.navigation.dispatch(pushAction);
  };

  _profile = () => {
    const pushAction = StackActions.push({
      routeName: 'Profile',
    });
    this.props.navigation.dispatch(pushAction);
  };

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Body>
            <Title style={styles.title}>Home</Title>
          </Body>
        </Header>
        <Content padder>
          <Text style={styles.heading}>Kategori</Text>
          <Text style={styles.subHeading}>Ayo dipilih yang sesuai</Text>
          <View style={styles.optionButton}>
            <Button style={styles.button2} onPress={this._lapor}>
              <View>
                <Text style={styles.optionLabel}>Laporkan Masalah</Text>
                <Image source={IMAGES.option1} style={styles.option1} />
              </View>
            </Button>
            <Button style={styles.button} onPress={this._kritikSaran}>
              <View>
                <Text style={styles.optionLabel2}>Kritik & Saran</Text>
                <Image source={IMAGES.option2} style={styles.option2} />
              </View>
            </Button>
          </View>
        </Content>
        <Footer style={styles.shadow}>
          <FooterTab style={styles.footer}>
            <Button>
              <Icon name="home" style={styles.iconActive} />
            </Button>
            <Button onPress={this._profile}>
              <Icon name="person" style={styles.icon} />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
