import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Cast = ({cast,navigation}) => {
    let personName = 'Keanu Reevs'
    let charaterName = 'Jonh Wick'
  return (
    <View className="my-6">
      <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal:15}}
      >
        {
            cast && cast.map((person,index)=>{
                return (
                    <TouchableOpacity className="mr-4 items-center" key={index} onPress={() => navigation.navigate('Person', person)}>
                        <View className="overflow-hidden rounded-full h-20 w-20  items-center border border-neutral-500 object-cover">
                            <Image
                                source={require('../assets/images/castImage1.png')}
                                className="w-20 h-24"
                            />
                        </View>
                        <Text className="text-white text-xs mt-1">
                            { charaterName.length > 10 ? charaterName.slice(0,10)+'...' : charaterName }
                        </Text>
                        <Text className="text-neutral-400 text-xs mt-1">
                            { personName.length > 10 ? personName.slice(0,10)+'...' : personName }
                        </Text>
                    </TouchableOpacity>
                )
            })
        }
      </ScrollView>
    </View>
  )
}

export default Cast