import { Text, View } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/ThemedText'

const profile = () => {
  return (
    <View className='items-center justify-center h-screen w-screen'>
      <ThemedText className='text-2xl'>the profile of mine</ThemedText>
    </View>
  )
}

export default profile
