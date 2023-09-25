import { useRef, useState } from 'react'
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

type Item = { label: string, value: string }

// TODO: PASAR A UN ARCHIVO SEPARADO
type ItemProps = {
  item: Item
  onSelect: (item: Item) => void
}
function Item ({ item, onSelect }: ItemProps) {

  function closeDropdown (item: Item) {
    onSelect(item)

  }

  return (
    <TouchableOpacity onPress={() => onSelect(item)}>
      <Text style={{ paddingHorizontal: 12 }}>{item.label}</Text>
    </ TouchableOpacity>
  )
}

type DropdownProps = {
  label: string
  items: Item[]
  onSelect: (item: Item) => void
}

export const Dropdown = ({ label, items, onSelect }: DropdownProps) => {
  const [visible, updateVsibile] = useState(false)
  const [selected, setSelected] = useState(undefined)
  const dropdownRef = useRef<TouchableOpacity | null>(null)

  function toggleDropdown () {
    updateVsibile(prevState => !prevState)
  }

  function openDropdown () {

  }

  return (
    <TouchableOpacity ref={dropdownRef} onPress={toggleDropdown} style={styles.dropdown}>
      <Text style={{ paddingHorizontal: 12, textTransform: 'capitalize' }}>{label}</Text>
      {visible && (
        <Modal visible={visible} transparent animationType='none'>
          <FlatList
            data={items}
            renderItem={({ item }) => <Item item={item} onSelect={() => onSelect(item)} />}
            keyExtractor={item => item.label}
            ListEmptyComponent={() => <View><Text>No hay datos</Text></View>}
          />
        </Modal>
      )}
      <View style={{ paddingHorizontal: 12 }}><Ionicons name='chevron-down-outline' size={22} color='#777' /></View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000000',
    shadowRadius: 4,
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: '#777',
    borderRadius: 4
  }
})
