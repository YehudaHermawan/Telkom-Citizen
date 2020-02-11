import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Body,
  Icon,
  Text,
  Form,
  Textarea,
  Input,
} from 'native-base';
import styles from './styles';
import {StackActions} from 'react-navigation';

export default class Feedbackscreen extends Component {
  _back = () => {
    const popAction = StackActions.pop({
      n: 1,
    });
    this.props.navigation.dispatch(popAction);
  };

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={this._back}>
              <Icon style={styles.title} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Kritik & Saran</Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <Input placeholder="Ruangan" style={styles.input1} />
            <Textarea
              rowSpan={5}
              bordered
              placeholder="Kritik"
              style={styles.upload}
            />
            <Textarea
              rowSpan={5}
              bordered
              placeholder="Saran"
              style={styles.input2}
            />
            <Button block style={styles.button} onPress={this._back}>
              <Text>Submit</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
