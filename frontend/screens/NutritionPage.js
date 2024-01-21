import { Image } from "expo-image";
import { Text, View } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { ArrowLeft, ArrowLeftCircle } from "react-native-feather";

import One from "../assets/emoji/1.png";
import Two from "../assets/emoji/2.png";
import Three from "../assets/emoji/3.png";
import Four from "../assets/emoji/4.png";
import Five from "../assets/emoji/5.png";
import BannerBackground from "../assets/banner-background.png";
//Carbs 225-325 grams
//Fat 44-78 grams
//Fiber 25-30 grams
//Proteins 60 grams or 0.8 x bodyweight (kg)
//Salt 2000mg
//sugar 25-36 depending on male/female

export default function NutritionPage() {
  const route = useRoute();
  const navigation = useNavigation();
  const nutrition = route.params;

  console.log(nutrition);

  let image;
  if (nutrition.rating > 8) {
    image = Five;
  } else if (nutrition.rating > 6) {
    image = Four;
  } else if (nutrition.rating > 4) {
    image = Three;
  } else if (nutrition.rating > 2) {
    image = Two;
  } else {
    image = One;
  }

  return (
    <View className="absolute gap-y-4 px-6 w-screen h-screen top-0 left-0 z-10 flex-1 flex-col justify-start items-center bg-white">
      <View className="flex flex-row w-full pb-3 pt-1 items-center justify-between">
        <ArrowLeftCircle
          onPress={() => navigation.goBack()}
          stroke="#000"
          strokeOpacity={0.3}
          width={32}
          height={32}
          strokeWidth={1.5}
        />
        <Text
          className="font-bold text-2xl tracking-tight"
          style={{ fontFamily: "PlusJakartaSans_800ExtraBold" }}
        >
          Nutrition
        </Text>
        <View className="w-8 h-8 rounded-full" />
      </View>
      <View className="flex flex-col gap-y-2">
        <Text className="text-xl font-bold">{nutrition.name}</Text>
        <View className="relative flex flex-col w-full bg-g-700 rounded-2xl">
          <View className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-2xl">
            <Image
              source={BannerBackground}
              contentFit="cover"
              className="absolute top-0 left-0 w-full h-full"
            />
          </View>
          <View className="gap-y-1 relative flex flex-col p-6">
            <Image
              source={image}
              className="w-20 h-20 absolute right-6 -top-8"
            />
            <Text
              className="text-xl text-white"
              style={{ fontFamily: "PlusJakartaSans_700Bold" }}
            >
              Nutrition Summary
            </Text>
            <Text className="text-white">{nutrition.description}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
