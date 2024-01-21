import axios from "axios";

async function GetNutritionInformation(barcode) {
  const response = await axios.get(
    `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
  );

  return ParseNutrition(response.data);
}

function ParseNutrition(data) {
  const nutriments = data.product.nutriments;
  const nutrition = {
    carbohydrates: [nutriments.carbohydrates, nutriments.carbohydrates_unit],
    energy: [nutriments.energy, nutriments.energy_unit],
    fat: [nutriments.fat, nutriments.fat],
    fiber: [nutriments.fiber, nutriments.fiber_unit],
    proteins: [nutriments.proteins, nutriments.proteins_unit],
    salt: [nutriments.salt, nutriments.salt_unit],
    sodium: [nutriments.sodium, nutriments.sodium_unit],
    sugars: [nutriments.sugars, nutriments.sugars_unit],
  };

  let nutritionString = "";
  for (const [key, value] of Object.entries(nutrition)) {
    nutritionString += `${key}: ${value.join("")} `;
  }

  return {
    name: data.product.product_name,
    ingredients:
      data.product.ingredients_text_en || data.product.ingredients_text,
    nutrition,
    nutritionString,
  };
}

export { GetNutritionInformation, ParseNutrition };
