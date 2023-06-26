import {
    View,
    Text,
    Dimensions,
    TextInput,
    TouchableOpacity,
    Platform,
    ScrollView,
    TouchableWithoutFeedback,
    Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/Loading";

var { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";

const marginTop = ios ? "" : "mt-3";

const SearchScreen = () => {
    let moviName = "Ant-Man and the Wasp: Quantumania";
    const navigation = useNavigation();
    const [results, setResults] = useState([1, 2, 3]);
    const [loading, setLoading] = useState(false);

    return (
        <SafeAreaView className="flex-1 bg-neutral-900">
            <View
                className={`mx-4 mb-3 flex-row items-center justify-between rounded-full ${marginTop}`}
                style={{ borderWidth: 2, borderColor: "gray" }}
            >
                <TextInput
                    placeholder="Search Movie"
                    placeholderTextColor={"lightgray"}
                    className="text-white text-base tracking-wider font-semibold pb-1 pl-6 flex-1"
                />

                <TouchableOpacity
                    className="rounded-full p-3 ml-1 bg-neutral-500"
                    onPress={() => navigation.goBack()}
                >
                    <XMarkIcon size={25} color={"white"} />
                </TouchableOpacity>
            </View>

            {/* result */}
            {loading ? (
                <Loading />
            ) : results.length > 0 ? (
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 15 }}
                    className="space-y-3"
                >
                    <Text className="text-white font-semibold ml-1">
                        Result ({results.length})
                    </Text>
                    <View className="flex-row justify-between flex-wrap">
                        {results.map((result, index) => {
                            return (
                                <TouchableWithoutFeedback
                                    key={index}
                                    onPress={() =>
                                        navigation.push("Movie", result)
                                    }
                                >
                                    <View className="space-y-2 mb-6">
                                        <Image
                                            source={require("../assets/images/moviePoster2.png")}
                                            style={{
                                                width: width * 0.44,
                                                height: height * 0.3,
                                            }}
                                        />
                                        <Text className="text-neutral-300 ml-1">
                                            {moviName.length > 22
                                                ? moviName.slice(0, 22) + "..."
                                                : moviName}
                                        </Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            );
                        })}
                    </View>
                </ScrollView>
            ) : (
                <View className="flex-col items-center justify-center">
                    <Image
                        source={require("../assets/images/movieTime.png")}
                        className="h-96 w-96"
                    />
                    <Text className="text-neutral-300">Not found</Text>
                </View>
            )}
        </SafeAreaView>
    );
};

export default SearchScreen;
