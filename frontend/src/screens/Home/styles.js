import {StyleSheet} from 'react-native';
import Colors from '../../common/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBG,
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: Colors.Orange,
    width: 140,
    height: 140,
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 70,
  },
  btnText: {
    fontSize: 35,
    alignSelf: 'center',
  },
});
