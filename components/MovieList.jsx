import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    TouchableWithoutFeedback,
    Image,
} from "react-native";
import React from "react";
import { styles } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";

var { width, height } = Dimensions.get("window");

const MovieList = ({ title, data }) => {
    let moviName = "Ant-Man and the Wasp: Quantumania";
    const navigation = useNavigation();
    return (
        <View className="mb-4 space-y-4">
            <View className="mx-4 flex-row items-center justify-between">
                <Text className="text-white text-xl">{title}</Text>
                <TouchableOpacity>
                    <Text className="text-lg" style={styles.text}>
                        See All
                    </Text>
                </TouchableOpacity>
            </View>
            {/* movie row */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {data.map((item, index) => {
                    return (
                        <TouchableWithoutFeedback
                            key={index}
                            onPress={() => navigation("Movie", item)}
                        >
                            <View className="space-y-1 mr-4">
                                <Image
                                    source={require("../assets/images/moviePoster2.png")}
                                    className="rounded-3xl"
                                    style={{
                                        width: width * 0.33,
                                        height: height * 0.22,
                                    }}
                                />
                                <Text className="text-neutral-300 ml-1">
                                    {moviName.length > 14
                                        ? moviName.slice(0, 14) + "..."
                                        : moviName}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    );
                })}
            </ScrollView>
        </View>
    );
};

export default MovieList;
