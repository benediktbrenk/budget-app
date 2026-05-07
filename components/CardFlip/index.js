import styled from "styled-components";

const FlipContainer = styled.div`
  perspective: 1000px;
  position: relative;
`;

const FlipInner = styled.div`
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${({ $isFlipped }) =>
    $isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

const FlipFront = styled.div`
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  position: ${({ $isFlipped }) => ($isFlipped ? "absolute" : "relative")};
  top: 0;
  left: 0;
  width: 100%;
`;

const FlipBack = styled.div`
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  position: ${({ $isFlipped }) => ($isFlipped ? "relative" : "absolute")};
  top: 0;
  left: 0;
  width: 100%;
  transform: rotateY(180deg);
`;

export default function CardFlip({ isFlipped, children }) {
  const [front, back] = children;

  return (
    <FlipContainer>
      <FlipInner $isFlipped={isFlipped}>
        <FlipFront $isFlipped={isFlipped}>{front}</FlipFront>
        <FlipBack $isFlipped={isFlipped}>{back}</FlipBack>
      </FlipInner>
    </FlipContainer>
  );
}
