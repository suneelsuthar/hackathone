import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TouchableHighlight,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Model extends React.Component {
  render() {
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          //   visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {/* modal content */}
              <View style={styles._card}>
                <View style={styles._card_header}>
                  <Text style={styles._card_heading}>INSTRUCTIONS</Text>
                </View>
                <View style={styles._card_content}>
                  <Text style={styles._content}>Subject</Text>
                  <Text style={styles._content}>Biology</Text>
                </View>
                <View style={styles._card_content}>
                  <Text style={styles._content}>Class</Text>
                  <Text style={styles._content}>XI</Text>
                </View>

                <View style={styles._card_content}>
                  <Text style={styles._content}>Quiz Name</Text>
                  <Text style={styles._content}>History of Biology</Text>
                </View>

                <View style={styles._card_content}>
                  <Text style={styles._content}>Total Questions</Text>
                  <Text style={styles._content}>17</Text>
                </View>

                <View style={styles._card_content}>
                  <Text style={styles._content}>Total Marks</Text>
                  <Text style={styles._content}>100</Text>
                </View>

                <View style={styles._card_content}>
                  <Text style={styles._content}>Passing Marks</Text>
                  <Text style={styles._content}>33</Text>
                </View>

                <View style={styles._card_content}>
                  <Text style={styles._content}>Quiz Created By</Text>
                  <Text style={styles._content}>Suneel kumar</Text>
                </View>

                <View style={styles._instrutions}>
                  <Text style={styles._points}>Note!!</Text>
                  <Text style={styles._detail}>
                    Be carefull, there is no time limit so attempt quiz with
                    carefully because it effect on your ranking! you and quiz
                    creater can able to see result of this quiz.
                  </Text>
                </View>
                <View style={styles._card_footer}>
                  <TouchableOpacity
                    style={styles._buttons}
                    onPress={() => {
                      this.props.visible();
                    }}>
                    <LinearGradient colors={['#ff0000', '#ff0000']}>
                      <Text style={styles._btn_text}>CANCEL QUIZ</Text>
                    </LinearGradient>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles._buttons}>
                    <LinearGradient colors={['#08d4c4', '#01ab9d']}>
                      <Text style={styles._btn_text}>START QUIZ</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
              {/* modal content end */}

              {/* <TouchableHighlight
                style={{...styles.openButton, backgroundColor: '#2196F3'}}
                onPress={() => {
                  this.props.visible();
                }}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableHighlight> */}
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  _card: {
    backgroundColor: 'white',
    elevation: 5,
    width: '90%',
    borderRadius: 3,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  _card_header: {
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    padding: 10,
    backgroundColor: '#08d4c4',
    borderBottomWidth: 1,
    borderColor: '#d6d1d1',
  },
  _card_heading: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  _card_footer: {
    marginTop: 20,
    justifyContent: 'space-evenly',
    borderTopWidth: 1,
    flexDirection: 'row',
    borderColor: '#d6d1d1',
    padding: 5,
    // paddingTop:20,
    // paddingBottom:20
  },
  _card_content: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
  },
  _instrutions: {
    borderTopWidth: 0.3,
    padding: 5,
    borderColor: '#b2b0b0',
    marginTop: 10,
  },
  _content: {
    color: 'purple',
    fontWeight: 'bold',
    width: '50%',
    paddingTop: 5,
  },
  _buttons: {
    backgroundColor: '#08d4c4',
    width: 110,
    borderRadius: 5,
  },
  _btn_text: {
    textAlign: 'center',
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    marginTop: 55,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  _points: {
    color: 'red',
  },
  _detail: {
    color: 'grey',
  },
});
