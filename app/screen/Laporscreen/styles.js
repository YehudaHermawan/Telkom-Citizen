import {StyleSheet} from 'react-native';
import {scale} from '../../utils/scaling';
import METRICS from '../../constant/metrics';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: scale(20),
    color: '#0B506D',
  },
  upload: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(280),
    height: scale(150),
    marginTop: METRICS.doubleInputMargin,
    borderRadius: 5,
    borderColor: '#c4c4c4',
    borderWidth: scale(1),
    marginLeft: METRICS.doubleBaseMargin2,
  },
  input1: {
    width: scale(280),
    height: scale(40),
    marginTop: METRICS.doubleBaseMargin,
    borderColor: '#c4c4c4',
    borderWidth: scale(1),
    borderRadius: 5,
    marginLeft: METRICS.doubleBaseMargin2,
  },
  input2: {
    width: scale(280),
    height: scale(150),
    marginTop: METRICS.doubleBaseMargin,
    borderColor: '#c4c4c4',
    borderWidth: scale(1),
    borderRadius: 5,
    marginLeft: METRICS.doubleBaseMargin2,
  },
  button: {
    marginTop: METRICS.doubleBaseMargin2,
    width: scale(280),
    height: scale(40),
    backgroundColor: '#E4262C',
    borderRadius: 5,
    marginLeft: METRICS.doubleBaseMargin2,
  },
  image: {
    width: scale(280),
    height: scale(150),
    borderRadius: 5,
  }
});

export default styles;
