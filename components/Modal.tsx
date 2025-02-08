import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, ComponentProvider} from 'react-native';
import PropTypes from 'prop-types'

interface ModalProps {
  ModalView: React.FC;
}
const Modal_comp: React.FC<ModalProps> = ({ ModalView:RenderComponent }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <RenderComponent />
          </View>
        </Modal>
    </View>
  );
};
export default Modal_comp

// Définir les types de prop pour le composant enfant
Modal_comp.propTypes = {
  renderComponent: PropTypes.func.isRequired,
};
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
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
  });