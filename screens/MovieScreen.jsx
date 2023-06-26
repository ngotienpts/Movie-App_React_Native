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
import MovieList from "../components/MovieList";
import { fetchMovieCredits, fetchMovieDetails, image500 } from "../api/moviedb";
import Loading from "../components/Loading";

var { width, height } = Dimensions.get("window");

const ios = Platform.OS == "ios";

const topMargin = ios ? "" : "mt-3";
const MovieScreen = () => {
    const { params: item } = useRoute();
    const [cast, setCast] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);
    const [movie, setMovie] = useState({});

    const navigation = useNavigation();

    const [isFavourite, toggleFavourite] = useState(false);
    const [loading, setLoading] = useState(false);
    const getMovieDetails = async (id) => {
        const data = await fetchMovieDetails(id);
        if (data) setMovie(data);
        setLoading(false);
    };
    const getMovieCredits = async (id) => {
        const data = await fetchMovieCredits(id);
        if (data && data.cast) setCast(data.cast);
    };
    useEffect(() => {
        setLoading(true);
        getMovieDetails(item.id);
        getMovieCredits(item.id);
    }, [item]);

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
                        // source={require("../assets/images/moviePoster2.png")}
                        source={{ uri: image500(movie?.poster_path) }}
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
            {loading ? (
                <Loading />
            ) : (
                <>
                    <View
                        style={{ marginTop: -(height * 0.09) }}
                        className="space-y-3"
                    >
                        {/* title */}
                        <Text className="text-white font-bold text-3xl text-center tracking-wider">
                            {movie?.title}
                        </Text>

                        {/* status, relese, runtime */}
                        {movie?.id ? (
                            <Text className="text-center text-neutral-400 font-semibold text-base">
                                {movie?.status} -{" "}
                                {movie?.release_date.split("-")[0]} -{" "}
                                {movie?.runtime}min
                            </Text>
                        ) : null}

                        {/* genres */}
                        <View className="flex-row items-center justify-center mx-4 space-x-2">
                            {movie?.genres?.map((genre, index) => {
                                let showDot = index + 1 != movie.genres.length;
                                return (
                                    <Text
                                        key={index}
                                        className="text-center text-neutral-400 text-base font-semibold"
                                    >
                                        {genre?.name} {showDot ? "-" : null}
                                    </Text>
                                );
                            })}
                        </View>

                        {/* decription */}
                        <Text className="text-neutral-400 mx-4 tracking-wide">
                            {movie?.overview}
                        </Text>
                    </View>

                    {/* cast */}
                    <Cast cast={cast} navigation={navigation} />

                    {/* similar movie */}
                    {/* <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies}/> */}
                </>
            )}
        </ScrollView>
    );
};

export default MovieScreen;
