import Link from "next/link";
import * as Styled from "./ArrowLeft.styled";
import { FaAngleLeft } from "react-icons/fa6";

export default function ArrowLeft() {
	return (
		<Styled.Arrow>
			<Link href="/">
				<FaAngleLeft />
			</Link>
		</Styled.Arrow>
	);
}
