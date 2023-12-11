export class MenuResponseMapper {
    constructor() {}
  
    mapToSection(menu) {
      if (!menu || !Array.isArray(menu) || menu.length === 0) {
        throw new Error(
          "Invalid menu data. The input must be a non-empty array."
        );
      }
  
      const categoryMap = new Map();
  
      menu.forEach((item) => {
        const { category, ...rest } = item;
  
        if (!categoryMap.has(category)) {
          categoryMap.set(category, []);
        }
  
        categoryMap.get(category).push({ ...rest });
      });
  
      const sections = Array.from(categoryMap).map(([category, items]) => ({
        category,
        items,
      }));
  
      return sections;
    }
  }