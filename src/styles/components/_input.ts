import styled from 'styled-components';

export const Input = styled.input`
    color: #333;
    font-size: 1.2rem;
    padding: 16px 12px;
    border-radius: 4px;
    background: #F8F8F8;
    border: none;
    width: 90%;
    display: block;
    transition: all 0.3s;
    box-sizing: border-box;
    width: 100%;

    &:focus {
        outline: 0.1rem solid #115293;
    }
`;
