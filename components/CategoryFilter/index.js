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
          key={category}
          $active={activeCategories.includes(category)}
          $category={category}
          onClick={() => onClick(category)}
        >
          {category}
        </Styled.FilterButton>
      ))}
    </Styled.CategoryFilterContainer>
  );
}
