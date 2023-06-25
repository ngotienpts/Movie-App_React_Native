import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    Platform,
    Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { styles, theme } from "../theme";
import { LinearGradient } from "expo-linear-gradient";
import Cast from "../components/Cast";
import MovieList from '../components/MovieList'

var { width, height } = Dimensions.get("window");

const ios = Platform.OS == "ios";

const topMargin = ios ? "" : "mt-3";
const MovieScreen = () => {
    let moviName = "Ant-Man and the Wasp: Quantumania";
    const { params: item } = useRoute();
    const [cast, setCast] = useState([1,2,3,4,5])
    const [similarMovies, setSimilarMovies] = useState([1,2,3,4,5])

    const navigation = useNavigation();

    const [isFavourite, toggleFavourite] = useState(false);

    useEffect(() => {}, [item]);
    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 20 }}
            className="flex-1 bg-neutral-900"
        >
            <View className="w-full">
                {/* back button and movie poster */}
                <SafeAreaView
                    className={`absolute z-20 w-full flex-row items-center justify-between px-4 ${topMargin}`}
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
                            color={isFavourite ? theme.background : "white"}
                        />
                    </TouchableOpacity>
                </SafeAreaView>
                <View>
                    {/* Imgae */}
                    <Image
                        source={require("../assets/images/moviePoster2.png")}
                        style={{ width, height: height * 0.55 }}
                    />
         
                    <LinearGradient
                        colors={[
                            "transparent",
                            "rgba(23,23,23, 0.8)",
                            "rgba(23,23,23, 1)",
                        ]}
                        style={{ width, height: height * 0.4 }}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        className="absolute bottom-0"
                    />
                </View>

            </View>
            {/* body */}
            <View style={{marginTop:-(height*0.09)}} className="space-y-3">
                {/* title */}
                <Text className="text-white font-bold text-3xl text-center tracking-wider">{moviName}</Text>

                {/* status, relese, runtime */}
                <Text className="text-center text-neutral-400 font-semibold text-base">Released - 2020 - 170 min</Text>

                {/* genres */}
                <View className="flex-row items-center justify-center mx-4 space-x-2">
                    <Text className="text-center text-neutral-400 text-base font-semibold">Action -</Text>
                    <Text className="text-center text-neutral-400 text-base font-semibold">Thrill -</Text>
                    <Text className="text-center text-neutral-400 text-base font-semibold">Comedy</Text>
                </View>

                {/* decription */}
                <Text className="text-neutral-400 mx-4 tracking-wide">
                    Supper-Hero partners Scott Lang anf Hope van Dyen, along with Hope's parent Janet partners Scott Lang anf Hope van Dyen, along with Hope's parent Janet partners Scott Lang anf Hope van Dyen, along with Hope's parent Janet partners Scott Lang anf Hope van Dyen, along with Hope's parent Janet
                </Text>
            </View>

            {/* cast */}
            <Cast cast={cast} navigation={navigation}/>

            {/* similar movie */}
            <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies}/>
        </ScrollView>
    );
};

export default MovieScreen;
