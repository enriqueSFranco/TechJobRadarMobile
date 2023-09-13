import React from 'react'
import { Button, Modal, Pressable, StyleSheet, Text, View } from 'react-native'

interface ModalProps {
  children: React.ReactNode
  modalVisible: boolean
  onModalVisible: () => void
}

export const CustomModal = ({ children, modalVisible, onModalVisible }: ModalProps) => {
  return (
    <Modal
      animationType='slide'
      transparent
      visible={modalVisible}
      onRequestClose={onModalVisible}
    >
      {/* CONTENT */}
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <Pressable onPress={onModalVisible}>
            <Text style={{ color: '#fff', fontSize: 22, fontWeight: '700' }}>x</Text>
          </Pressable>
        </View>
        <View>
          {children}
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    gap: 16,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.75)',
    padding: 16,
  },
  modalHeader: {
    alignItems: 'flex-end'
  }
})
