// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from '@expo/vector-icons/Ionicons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import { ThemedText } from '../ThemedText';


export function TabBarIcon({ icon, color, name, focused }: { icon: ImageSourcePropType, color: string, name: string, focused: boolean }) {
  return <View className='items-center  justify-center gap-y-2'>
    <Image source={icon} resizeMode='contain' tintColor={color} className={`w-6 h-6 `} />
    <ThemedText className={`${focused ? "font-psemibold " : "font-pregular"} text-xs`} style={{ color: color }}>{name}</ThemedText>
  </View>;
}
