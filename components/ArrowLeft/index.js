import Link from "next/link";
import { StyledArrow } from "./ArrowLeft.styles";
import { FaAngleLeft } from "react-icons/fa6";

export default function ArrowLeft() {
  return (
    <StyledArrow>
      <Link href="/">
        <FaAngleLeft />
      </Link>
    </StyledArrow>
  );
}
