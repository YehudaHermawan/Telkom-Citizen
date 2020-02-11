/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {
  AsyncStorage,
  TouchableOpacity,
  ToastAndroid,
  Image,
  View,
} from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
  Footer,
  Icon,
} from 'native-base';
import axios from 'axios';
import IMAGES from '../../configs/images';
import styles from './styles';
import I18n from '../../i18n';
import {SwitchActions} from 'react-navigation';
import {scale} from '../../utils/scaling';
import METRICS from '../../constant/metrics';

export default class Loginscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  _login = () => {
    this.props.navigation.dispatch(SwitchActions.jumpTo({routeName: 'Home'}));
  };

  render() {
    const {email, password} = this.state;
    return (
      <Container>
        <Content padder>
          <View style={styles.logoContainer}>
            <Image
              source={IMAGES.loginLogo}
              resizeMode="contain"
              style={styles.logo}
            />
          </View>
          <Form>
            <Item>
              <Icon
                name="mail"
                style={{color: '#c4c4c4', marginTop: METRICS.doubleBaseMargin}}
              />
              <Input
                style={styles.input}
                placeholder={I18n.t('email')}
                value={email}
                onChangeText={value => this.setState({email: value})}
              />
            </Item>
            <Item>
              <Icon
                name="lock"
                style={{color: '#c4c4c4', marginTop: METRICS.doubleBaseMargin}}
              />
              <Input
                style={styles.input}
                placeholder={I18n.t('password')}
                value={password}
                secureTextEntry={true}
                onChangeText={value => this.setState({password: value})}
              />
            </Item>
            <Button
              block
              style={{
                marginTop: scale(60),
                marginHorizontal: 12,
                backgroundColor: '#E4262C',
                height: scale(40),
                borderRadius: 5,
              }}
              onPress={this._login}>
              <Text>{I18n.t('signin')}</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
