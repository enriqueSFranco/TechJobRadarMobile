import { useRef, useState } from 'react'
import { FlatList, Modal, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { styles } from '@/styles/dropdown'

type Item = { label: string, value: string }

// TODO: PASAR A UN ARCHIVO SEPARADO
type ItemProps = {
  item: Item
  onSelect: (item: Item) => void
}

// MARK: COMPONENTE
function Item ({ item, onSelect }: ItemProps) {

  function closeDropdown (item: Item) {
    onSelect(item)
  }

  return (
    <TouchableOpacity onPress={() => closeDropdown(item)}>
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
  const [select, setSelect] = useState<Item | undefined>(undefined)
  const dropdownRef = useRef<TouchableOpacity | null>(null)
  const [dropdowTop, updateDropdownTop] = useState(0)

  function toggleDropdown () {
    visible ? updateVsibile(prevState => prevState = false) : openDropdown()
  }

  function handleSelected (item: Item) {
    setSelect(item)
    updateVsibile(false)
    onSelect(item)
  }

  function openDropdown () {
    const dropdow = dropdownRef.current
    dropdow?.measure((_fx: number, _fy: number, _w: number, h: number, _px: number, py: number) => {
      updateDropdownTop(py + h)
    })
    updateVsibile(true)
  }

  return (
    <TouchableOpacity ref={dropdownRef} onPress={toggleDropdown} style={styles.button}>
      <Text style={{ paddingHorizontal: 12, textTransform: 'capitalize' }}>{select?.value ? select.value : 'N/A'}</Text>
      <View style={{ paddingHorizontal: 12 }}>
        <Ionicons name='chevron-down-outline' size={22} color='#777' />
      </View>
      <Modal visible={visible} transparent animationType='none'>
        <TouchableOpacity style={styles.overlay} onPress={() => updateVsibile(false)}>
          <View style={[styles.dropdown, { top: dropdowTop }]}>
            <FlatList
              data={items}
              renderItem={({ item }) => <Item item={item} onSelect={() => handleSelected(item)} />}
              keyExtractor={item => item.label}
              ListEmptyComponent={() => <View><Text>No hay datos</Text></View>}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </TouchableOpacity>
  )
}

