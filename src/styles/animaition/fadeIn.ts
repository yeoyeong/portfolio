import { keyframes } from "styled-components";

export const visibilityAnimationReverse = keyframes`
   0% {
     opacity: 0;
   }
   100%{
     opacity: 1;
   }
 `;

export const curtainAnimationLeft = keyframes`
   to {
    transform:translateX(-100%)
   }
 `;

export const curtainAnimationRight = keyframes`
to{
  transform:translateX(100%)
}
`;

export const IndexBoxAnimation = keyframes`
to{
  transform:translate(57%,-50%)
}
`;

export const scrollDownAnimation = keyframes`
0%{
  transform:translate(-50%, 0%);
}
50%{
  transform:translate(-50%, 20%);
}

`;
