import * as Styled from "./CategoryFilter.styled";
import { categories } from "@/utils/categories";

export default function CategoryFilter({ onSearch, search }) {
	return (
		<Styled.CategoryFilterContainer>
			{categories.map((category) => (
				<Styled.FilterButton
					key={category}
					category={category}
					onClick={() => onSearch({ ...search, category: category })}
				>
					{category}
				</Styled.FilterButton>
			))}
		</Styled.CategoryFilterContainer>
	);
}
