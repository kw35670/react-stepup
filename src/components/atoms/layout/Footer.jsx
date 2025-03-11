import { Link } from 'react-router-dom/cjs/react-router-dom';
import styled from 'styled-components';

export const Footer = () => {
    return <SFooter>&copy; 2021 test Inc.</SFooter>;
};

const SFooter = styled.footer`
    width: 100%;
    background-color: #11999e;
    color: #fff;
    text-align: center;
    padding: 8px 0;
    position: fixed;
    bottom: 0;
`;

const SLink = styled(Link)`
    margin: 0 8px;
`;
