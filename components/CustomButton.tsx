import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CustomButton({ text, className, textStyle, pressHandler }: { text: string, className?: string, textStyle?: string, pressHandler?: () => void }) {
  return (
    <TouchableOpacity activeOpacity={.8} onPress={pressHandler} className={`bg-secondary px-4 py-3 rounded-xl ${className}`}>
      <Text className={`text-center font-psemibold text-lg ${textStyle}`}>{text}</Text>
    </TouchableOpacity>
  )
}