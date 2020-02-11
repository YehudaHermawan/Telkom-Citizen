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
  optionButton: {
    flexDirection: 'row',
    marginTop: METRICS.doubleBaseMargin,
  },
  button: {
    width: scale(120),
    height: scale(120),
    borderRadius: scale(5),
    backgroundColor: '#ffffff',
    marginLeft: METRICS.doubleBaseMargin2,
  },
  button2: {
    width: scale(120),
    height: scale(120),
    borderRadius: scale(5),
    backgroundColor: '#ffffff',
    marginLeft: METRICS.section,
  },
  heading: {
    fontSize: scale(30),
    fontWeight: 'bold',
    color: '#0B506D',
    marginTop: METRICS.baseMargin,
    marginLeft: METRICS.section,
  },
  subHeading: {
    fontSize: scale(13),
    color: '#0B506D',
    marginTop: METRICS.smallMargin,
    marginLeft: METRICS.section,
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
  option1: {
    width: scale(66),
    height: scale(58),
    marginLeft: METRICS.option,
  },
  option2: {
    width: scale(50),
    height: scale(62),
    marginLeft: METRICS.option2,
  },
  optionLabel: {
    fontSize: scale(10),
    fontWeight: 'bold',
    color: '#0B506D',
    marginLeft: METRICS.doubleBaseMargin,
    marginBottom: METRICS.tripleSmallMargin,
  },
  optionLabel2: {
    fontSize: scale(10),
    fontWeight: 'bold',
    color: '#0B506D',
    marginLeft: METRICS.inputMargin,
    marginBottom: METRICS.tripleSmallMargin,
  },
});

export default styles;
