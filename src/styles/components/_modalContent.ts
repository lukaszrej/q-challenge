import styled from 'styled-components';

export const ModalContent = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    min-width: 60vw;
    min-height: 60vh;

    display: flex;
    flex-direction: column;
    background: white;

    & header {
        width: 100%;
        display: flex;
        justify-content: center;

        button {
            margin-left: auto;
        }
    }
`;
