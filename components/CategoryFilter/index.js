import * as Styled from "./CategoryFilter.styled";
import { categories } from "@/utils/categories";

export default function CategoryFilter({
  search,
  onSelectCategory,
  onFilter,
  mode,
}) {
  const activeCategories = search.categories
    ? search.categories
    : [search.category];

  return (
    <Styled.CategoryFilterContainer>
      {categories.map((category) => (
        <Styled.FilterButton
          key={category.name}
          $active={activeCategories.some(
            (activeCategory) => activeCategory.name === category.name,
          )}
          $category={category.name}
          $color={category.color}
          onClick={() => onSelectCategory(category.name)}
        >
          {category.name}
        </Styled.FilterButton>
      ))}
      {mode === "report" && (
        <Styled.FilterButton
          $color="var(--color-primary)"
          onClick={() => onFilter({ ...search, categories: categories })}
        >
          All
        </Styled.FilterButton>
      )}
    </Styled.CategoryFilterContainer>
  );
}
