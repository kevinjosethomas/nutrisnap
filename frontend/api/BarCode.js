import axios from "axios";

async function GetNutritionInformation(barcode) {
  const response = await axios.get(
    `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
  );

  return ParseNutrition(response.data);
}

function ParseNutrition(data) {
  const nutriments = data.product.nutriments || {
    carbohydrates: 0,
    carbohydrates_unit: "g",
    energy: 0,
    energy_unit: "kcal",
    fat: 0,
    fat_unit: "g",
    fiber: 0,
    fiber_unit: "g",
    proteins: 0,
    proteins_unit: "",
    salt: 0,
    salt_unit: "mg",
    sodium: 0,
    sodium_unit: "mg",
    sugars: 0,
    sugars_unit: "g",
  };
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
