import styled from "styled-components"

export const StyledPaper = styled.div`
    flex: 1;
    box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.12);
    min-height: 411px;
    width: 100%;
    padding: 1rem;
    transition: 300ms ease-in-out;

    .MuiBox-root {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        gap: 27px;
    }

    &:hover {
        cursor: pointer;
        box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.2);
    }
`
