import { useState } from "react";
import * as Styled from "./CategoryFilter.styled";
import { categories } from "@/utils/categories";

export default function CategoryFilter() {
	const [filter, setFilter] = useState(categories);

	function handleResetFilters() {
		setFilter([]);
	}

	function handleToggleOption(option) {
		if (filter.categories.includes(option)) {
			setFilter({
				...filter,
				categories: filter.categories.filter((category) => category !== option),
			});
		} else {
			setFilter({
				...filter,
				categories: [...filter.categories, option],
			});
		}
	}
	return (
		<Styled.CategoryFilterContainer>
			{categories.map((category, index) => (
				<Styled.FilterButton
					key={category}
					category={category}
					index={index}
					totalCategories={categories.length}
					onClick={() => handleToggleOption(category)}
				>
					{category}
				</Styled.FilterButton>
			))}
		</Styled.CategoryFilterContainer>
	);
}
