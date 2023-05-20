import styled from "@emotion/styled";

export const ContentWrapper = styled.div`
    min-height: 100vh;

    @media(min-width:${({theme})=>theme.breakpoints.tablet} ) {
     min-height:calc(100vh-79px);
    }

    @media(min-width: ${({theme})=>theme.breakpoints.desktop}){
        min-height: calc(100vh-77px);
    }

    &:after{
        content: '';
        display: block;
        min-height: 0;

        @media(min-width: ${({theme})=>theme.breakpoints.desktop}){
            min-height: 79px;
        }

        @media(min-width: ${({theme})=>theme.breakpoints.desktop}){
            min-height: 77px;
        }
    }
`;




