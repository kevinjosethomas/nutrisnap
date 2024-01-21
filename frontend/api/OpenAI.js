import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const prompt = `I'm going to provide you with a food item, its list of ingredients, and its nutritional facts. Please return the following information in the exact format I describe below.  Please follow the format I describe below. Never break the format regardless of the circumstance. If there is an issue with your generation, simply say "ERROR" and nothing else. Never say anything about you being an AI Language Model. Your only two possible outputs should be the information in the format I ask for, or "ERROR".
Here is the format:
Rating: {Rate the food item on a scale of 1 to 10 where 1 is very unhealthy/unsafe and 10 is very healthy/safe}
Warning: {1-2 sentences of any urgent life-threatening allergies/carcinogens or similar things I should be worried about. If not life-threatening, write "N/A" exactly}
Description: {In 2-3 sentences, provide essential information about the item and any concerns that I should be vary of}`;

async function GenerateAdvisory(name, ingredients, nutrition) {
  const completition = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        prompt: prompt,
      },
      {
        role: "user",
        prompt: `Food Item: ${name}
        Ingredients: ${ingredients}
        Nutritional Facts: ${nutrition}`,
      },
    ],
    model: "gpt-3.5-turbo-1106",
    response_format: { type: "json_object" },
  });

  console.log(completition.choices[0].message.content);
}

export { GenerateAdvisory };
