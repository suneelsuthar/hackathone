import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: '#ffd6d6',
  },
  _car_view: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 30,
  },
  _card_1: {
    height: 90,
    elevation: 3,
    backgroundColor: 'rgb(121, 156, 255)',
    borderRadius: 3,
    width: '90%',
    margin: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  _card_2: {
    height: 90,
    margin: 10,
    elevation: 3,
    backgroundColor: 'rgb(236, 139, 55)',
    borderRadius: 3,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',

    // width:"90%"
  },
  _card_3: {
    height: 90,
    elevation: 3,
    backgroundColor: 'rgb(77, 187, 111)',
    borderRadius: 3,
    width: '90%',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  _value: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  _cases: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    paddingBottom: 10,
  },
});

export default styles;
