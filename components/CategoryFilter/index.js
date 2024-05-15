import * as Styled from "./CategoryFilter.styled";
import { categories } from "@/utils/categories";

export default function CategoryFilter({ search, onClick }) {
  const activeCategories = search.categories
    ? search.categories
    : [search.category];

  return (
    <Styled.CategoryFilterContainer>
      {categories.map((category) => (
        <Styled.FilterButton
          key={category.name}
          $active={activeCategories.includes(category.name)}
          $category={category.name}
          $color={category.color}
          onClick={() => onClick(category.name)}
        >
          {category.name}
        </Styled.FilterButton>
      ))}
    </Styled.CategoryFilterContainer>
  );
}
