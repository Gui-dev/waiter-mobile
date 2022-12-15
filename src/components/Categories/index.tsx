import { useState } from 'react'
import { FlatList } from 'react-native'
import { Text } from '../Text'
import { Category, Icon } from './style'

export type CategoryProps = {
  _id: string,
  name: string,
  icon: string
}

type CategoriesProps = {
  categories: CategoryProps[]
  onSelectCategory: (categoryId: string) => Promise<void>
}

export const Categories = ({ categories, onSelectCategory }: CategoriesProps) => {
  const [selectedCategory, setSelectedCategory] = useState('')

  const handleSelectedCategory = (id: string) => {
    const category = selectedCategory === id ? '' : id
    onSelectCategory(category)
    setSelectedCategory(category)
  }

  return (
    <FlatList
      horizontal
      data={categories}
      keyExtractor={item => item._id}
      renderItem={({ item }) => {
        const isSelected = selectedCategory === item._id
        return (
          <Category
            onPress={() => handleSelectedCategory(item._id)}
          >
            <Icon>
              <Text opacity={isSelected ? 1 : 0.5}>{item.icon}</Text>
            </Icon>
            <Text opacity={isSelected ? 1 : 0.5} size={14} weight="600">{item.name}</Text>
          </Category>
        )
      }}
      contentContainerStyle={{
        paddingRight: 24
      }}
      showsHorizontalScrollIndicator={false}
    />
  )
}
