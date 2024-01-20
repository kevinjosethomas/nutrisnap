async function GetNutritionInformation(barcode) {
  try {
    const response = await axios.get(
      `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
    );

    return [ParseNutrition(response.data), null];
  } catch (e) {
    return [null, e];
  }
}

function ParseNutrition(data) {
  const ingredients =
    data.product.ingredients_text_en || data.product.ingredients_text;
  const nutriments = data.product.nutriments;

  return {
    ingredients,
    nutriments,
  };
}

export { GetNutritionInformation, ParseNutrition };
