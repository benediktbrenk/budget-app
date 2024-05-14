import * as Styled from "./CategoryFilter.styled";
import { categories } from "@/utils/categories";

export default function CategoryFilter({ search, onClick }) {
	return (
		<Styled.CategoryFilterContainer>
			{categories.map((category) => (
				<Styled.FilterButton
					key={category}
					active={search.category === category}
					category={category}
					onClick={() => onClick(category)}
				>
					{category}
				</Styled.FilterButton>
			))}
		</Styled.CategoryFilterContainer>
	);
}
