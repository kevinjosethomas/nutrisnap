import { Image } from "expo-image";
import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import BannerBackground from "../assets/banner-background.png";

//Carbs 225-325 grams
//Fat 44-78 grams
//Fiber 25-30 grams
//Proteins 60 grams or 0.8 x bodyweight (kg)
//Salt 2000mg 
//sugar 25-36 depending on male/female


export default function NutritionPage() {
  const route = useRoute();
  const nutrition = route.params;

  console.log(nutrition);

  return (
    <View className="absolute gap-y-4 px-6 w-screen h-screen top-0 left-0 z-10 flex-1 flex-col justify-start items-center bg-white">
      <View className="flex flex-row items-center justify-between">
        <Text
          className="font-bold text-2xl"
          style={{ fontFamily: "PlusJakartaSans_700Bold" }}
        >
          Nutrition
        </Text>
      </View>
      <View className="relative flex flex-col overflow-hidden w-full bg-g-700 rounded-2xl">
        <Image
          source={BannerBackground}
          contentFit="cover"
          className="absolute top-0 left-0 w-full h-full"
        />
        <View className="gap-y-1 flex flex-col p-6">
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
  );
}
