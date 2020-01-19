import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#1a73e8',
    color: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: 50,
    elevation: 8,
  },
  center: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 20,
  },
  left: {
    position: 'absolute',
    left: 5,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 25,
  },
});
