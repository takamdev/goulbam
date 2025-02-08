import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, ComponentProvider} from 'react-native';

interface ModalProps {
  ModalView: React.FC;
  modalVisible:boolean
}
const Modal_comp: React.FC<ModalProps> = ({ ModalView:RenderComponent ,modalVisible}) => {
  return (
    <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}>
          <View style={styles.centeredView}>
            <RenderComponent />
          </View>
        </Modal>
    </View>
  );
};
export default Modal_comp


const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });