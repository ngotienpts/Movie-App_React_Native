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

var { width, height } = Dimensions.get("window");

const ios = Platform.OS == "ios";

const topMargin = ios ? "" : "mt-3";
const MovieScreen = () => {
    const { params: item } = useRoute();

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
                    {/* <LinearGradient
                        color={[
                            "transparent",
                            "rgba(23,23,23, 0.8)",
                            "rgba(23,23,23, 1)",
                        ]}
                        style={{ width, height: height * 0.4 }}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        className="absolute bottom-0"
                    /> */}
                </View>
            </View>
            {/* body */}
        </ScrollView>
    );
};

export default MovieScreen;
