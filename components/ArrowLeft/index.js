import Link from "next/link";
import { StyledArrow } from "./ArrowLeft.styles";

export default function ArrowLeft() {
  return (
    <StyledArrow>
      <Link href="../">⬅️</Link>
    </StyledArrow>
  );
}
