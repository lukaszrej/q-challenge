import styled from 'styled-components';

export const Categories = styled.main`
    & header {
        justify-content: flex-start;
        font-size: 16px;
        text-transform: capitalize;
        border-bottom: 1px solid gainsboro;
        padding-bottom: 12px;
    }

    & section:first-of-type {
        margin-top: 24px;
    }

    & section {
        margin-bottom: 18px;
        font-weight: bold;
        font-size: 30px;
    }
`;
