import {StyleSheet} from 'react-native';
import {scale} from '../../utils/scaling';
import METRICS from '../../constant/metrics';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffffff',
  },
  title: {
    alignSelf: 'center',
    color: '#0B506D',
  },
  footer: {
    backgroundColor: '#FFFFFF',
  },
  shadow: {
    elevation: 30,
    position: 'relative',
  },
  iconActive: {
    color: '#E4262C',
  },
  icon: {
    color: '#c4c4c4',
  },
  button: {
    marginTop: METRICS.doubleInputMargin,
    width: scale(280),
    height: scale(40),
    backgroundColor: '#0B506D',
    borderRadius: 5,
    marginLeft: METRICS.section,
  },
  iconButton: {
    backgroundColor: '#ffffff',
    width: scale(280),
    height: scale(40),
    borderRadius: 5,
    marginLeft: METRICS.section,
    marginTop: METRICS.doubleBaseMargin2,
  },
  iconButton2: {
    backgroundColor: '#ffffff',
    width: scale(280),
    height: scale(40),
    borderRadius: 5,
    marginLeft: METRICS.section,
    marginTop: METRICS.inputMargin,
  },
  nis: {
    width: scale(110),
    height: scale(25),
    backgroundColor: '#E4262C',
    borderRadius: 5,
    marginLeft: scale(115),
    marginTop: METRICS.baseMargin,
  },
  textNis: {
    color: '#ffffff',
    fontSize: scale(15),
    alignSelf: 'center',
    marginTop: scale(2),
  },
  name: {
    fontSize: scale(22),
    color: '#000000',
    marginLeft: scale(83),
    marginTop: METRICS.doubleBaseMargin,
  },
  thumb: {
    marginLeft: scale(126),
    marginTop: METRICS.inputMargin,
  },
  textButton: {
    color: '#0B506D',
  },
  buttonIcon: {
    color: '#0B506D',
  },
});

export default styles;
