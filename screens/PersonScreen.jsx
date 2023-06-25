import { View, Text,ScrollView, Dimensions, Platform, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { styles, theme } from '../theme'
import { useNavigation } from '@react-navigation/native'
import MovieList from '../components/MovieList'

var {width, height} = Dimensions.get('window')
const ios = Platform.OS == 'ios'

const verticalMargin = ios ? '' : 'my-3'
const PersonScreen = () => {
  const [isFavourite, toggleFavourite] = useState(false)
  const [personMovies, setPersonMovies] = useState([1,2,3,4])
  const navigation = useNavigation()
  return (
    <ScrollView className="flex-1 bg-neutral-900" contentContainerStyle={{paddingBottom:20}}>

      {/* back button */}
      <SafeAreaView
          className={`z-20 w-full flex-row items-center justify-between px-4 ${verticalMargin}`}
      >
          {/* back button */}
          <TouchableOpacity
              style={styles.background}
              className="rounded-xl p-1"
              onPress={() => navigation.goBack()}
          >
              <ChevronLeftIcon
                  size={28}
                  color={"white"}
                  strokeWidth={2.5}
              />
          </TouchableOpacity>

          {/* header */}
          <TouchableOpacity
              onPress={() => toggleFavourite(!isFavourite)}
          >
              <HeartIcon
                  size={35}
                  color={isFavourite ? 'red' : "white"}
              />
          </TouchableOpacity>
      </SafeAreaView>

      {/* person detail */}
      <View >
          <View className="flex-row justify-center" 
            style={{
              shadowColor:'gray',
              shadowRadius:40,
              shadowOffset:{width:0, height:5},
              shadowOpacity:1
            }}
            
          >
            <View className="items-center overflow-hidden h-72 w-72 border-2 border-neutral-500 rounded-full">
              <Image
                source={require('../assets/images/castImage2.png')}
                style={{width:width*0.74, height: height*0.43}}
              />
            </View>
          </View>
          <View className="mt-6">
            <Text className="text-white text-center font-bold text-3xl">Keanu Reves</Text>
            <Text className="text-neutral-500 text-center text-base">Lodon - United Kingdom</Text>
          </View>

          <View className="flex-row items-center justify-center mt-6 p-4 mx-3 bg-neutral-700 rounded-full">
            <View className="border-r-2 border-r-neutral-400 items-center px-2">
              <Text className="text-white font-semibold">Gender</Text>
              <Text className="text-sm text-neutral-300">Male</Text>
            </View>
            <View className="border-r-2 border-r-neutral-400 items-center px-2">
              <Text className="text-white font-semibold">Brithday</Text>
              <Text className="text-sm text-neutral-300">1900-20-20</Text>
            </View>
            <View className="border-r-2 border-r-neutral-400 items-center px-2">
              <Text className="text-white font-semibold">Know for</Text>
              <Text className="text-sm text-neutral-300">Male</Text>
            </View>
            <View className=" items-center px-2">
              <Text className="text-white font-semibold">Gender</Text>
              <Text className="text-sm text-neutral-300">Male</Text>
            </View>
          </View>

          <View className="my-6 mx-4 space-y-2">
            <Text className="text-white text-lg">Biography</Text>
            <Text className="text-neutral-400 tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, in! Animi harum voluptatum in nemo est expedita, quod, a eum unde quaerat quas ex reiciendis laborum distinctio fuga corporis totam?
            Quidem debitis natus quaerat, similique, laboriosam dolor et doloribus quibusdam unde modi fugit tempore mollitia doloremque sint, possimus placeat sequi nobis fugiat culpa facilis perspiciatis a. Vel odit dolor amet!
            Aut aliquam eius nesciunt iure nisi illum provident, nulla a asperiores labore excepturi natus distinctio ullam repudiandae omnis quidem est non beatae? Adipisci dicta saepe rerum autem temporibus ipsa provident.
            Voluptas nihil dolore nemo commodi fugiat quia nulla repellat itaque quasi et molestias aliquid ad, tenetur assumenda quae magnam voluptatibus non obcaecati officia hic. Repellendus, deleniti ad. Eveniet, odit vero.
            Reiciendis rem beatae maxime nemo recusandae! Neque aspernatur cum eos commodi. Modi nisi ex veritatis quasi, nobis aliquid dolorum, minima sed repellat unde deserunt, veniam esse tempora sunt ut iusto.
            Voluptatum perferendis voluptatibus possimus veniam vel, nobis ut iure consequatur iusto corporis unde rerum officia aspernatur incidunt nesciunt voluptas ipsa a repellat, id modi ad quisquam dolores. Qui, excepturi ipsum.</Text>
          </View>

          {/* movies */}
          <MovieList data={personMovies} hideSeeAll={true} title="Movies"/>

      </View>

    </ScrollView>
  )
}

export default PersonScreen