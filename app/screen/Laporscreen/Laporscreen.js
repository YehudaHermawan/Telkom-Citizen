import React, {Component} from 'react';
import { TouchableOpacity,Image } from 'react-native'
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
  Row
} from 'native-base';
import styles from './styles';
import {StackActions} from 'react-navigation';
import ImagePicker from 'react-native-image-picker';

export default class Laporscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
    };
  }

  _back = () => {
    const popAction = StackActions.pop({
      n: 1,
    });
    this.props.navigation.dispatch(popAction);
  };

  _pickImg = () => {
    const pushAction = StackActions.push({
      routeName: 'Imgpick',
    });
    this.props.navigation.dispatch(pushAction);
  };

  chooseFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      // console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          filePath: source,
        });
      }
    });
  };

  render() {
    console.log(typeof this.state.filePath.uri);
    
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={this._back}>
              <Icon style={styles.title} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Laporkan Masalah</Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <TouchableOpacity style={styles.upload} onPress={this.chooseFile.bind(this)}>
              {
                Object.keys(this.state.filePath).length > 0 ?
                <Image
                  source={{
                    uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
                  }}
                  style={styles.image}
                />
                : null
              }
              <Row style={{position:"absolute"}}>
                <Icon name="camera" />
                <Text style={{marginStart: 10}}>Upload photo</Text>
              </Row>
            </TouchableOpacity>
            {
              // <TouchableOpacity style={styles.upload} onPress={this.chooseFile.bind(this)}>
              //   <Row style={{position:"absolute"}}>
              //     <Icon name="camera" />
              //     <Text style={{marginStart: 10}}>
              //       {
              //         Object.keys(this.state.filePath).length > 0 ?
              //           "Tersimpan"
              //           :
              //           "Upload Photo"
              //       }
              //     </Text>
              //   </Row>
              // </TouchableOpacity>
            }
            <Input placeholder="Ruangan" style={styles.input1} />
            <Textarea
              rowSpan={5}
              bordered
              placeholder="Keterangan"
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
