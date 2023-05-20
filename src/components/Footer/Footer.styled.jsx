import styled from "@emotion/styled";

export const FooterWrapper = styled.div`
min-width: 100vw;
min-height: 0;

@media(min-width: ${({theme})=>theme.breakpoint.tablet}){
    min-height: 79px;
}

@media(min-width: ${({theme})=>theme.breakpoint.desktop}){
    min-height: 77px;
}
`;