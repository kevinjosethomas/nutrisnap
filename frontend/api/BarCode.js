async function GetNutritionInformation(barcode) {
  try {
    const response = await axios.get(
      `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
    );

    return [response.data, null];
  } catch (e) {
    return [null, e];
  }
}

export { GetNutritionInformation };
