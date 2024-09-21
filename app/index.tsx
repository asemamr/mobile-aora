import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { HelloWave } from '@/components/HelloWave'
import { Link, router } from 'expo-router'
import { ThemedText } from '@/components/ThemedText'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import CustomButton from '@/components/CustomButton'

export default function index() {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className='w-full justify-center items-center h-full px-4 gap-y-4'>
          <Image source={images.logo} className='w-40 h-10' resizeMode='contain' />
          <Image source={images.cards} resizeMode='contain' className=' w-full' />
          <View className='relative'>
            <Text className='text-white text-3xl font-pbold text-center relative '>
              Discover Endless Possibilities with <Text className='text-secondary-200'>Aura</Text>
            </Text>
            <Image source={images.path} resizeMode='contain' className='w-20 absolute right-0 -bottom-4' />
          </View>
          <Text className='text-white font-plight text-center pt-5 pb-14'>Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora</Text>
          <CustomButton pressHandler={() => router.push("/SignIn")} text='Continue with Email' />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}