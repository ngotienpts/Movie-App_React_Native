import { View, Text, Dimensions } from "react-native";
import * as Progress from "react-native-progress";
import React from "react";
import { theme } from "../theme";

const { width, height } = Dimensions.get("window");
const Loading = () => {
    return (
        <View
            style={{ width, height }}
            className="flex-row items-center justify-center"
        >
            <Progress.CircleSnail
                thickness={12}
                size={160}
                style={theme.background}
            />
        </View>
    );
};

export default Loading;
