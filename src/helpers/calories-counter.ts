import { Food } from "../shared"

export async function calculateCalories (foods: Food[]): Promise<number> {
  let total = 0
  const batchSize = 1000

  for (let idx = 0; idx < foods.length; idx += batchSize) {
    const chunk = foods.slice(idx, idx + batchSize)
    await Promise.all(chunk.map(async (food) => {
      total += +food.kilocalories
    }))
  }
  return total
}
