
export function evaluate(lat: number, lon: number): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        total_population: Math.floor(Math.random() * 1000000),
        total_area: Math.floor(Math.random() * 100000),
        median_income: Math.floor(Math.random() * 100000),
        percent_children: Math.floor(Math.random() * 100),
        restaurants_spent: Math.floor(Math.random() * 100000),
      });
    }, 1000);
  });
}
