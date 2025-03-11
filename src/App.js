import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.js';
import { PrimaryButton } from './components/atoms/button/PrimaryButton.jsx';
import { SecondaryButton } from './components/atoms/button/SecondaryButton.jsx';
import { SearchInput } from './components/molecules/SearchInput.jsx';
import { UserCard } from './components/organisms/user/UserCard.jsx';
import { HeaderOnly } from './components/templates/HeaderOnly.jsx';
import { DefaultLayout } from './components/templates/DefaultLayout.jsx';
import { Router } from './components/router/Router.jsx';

import './styles.css';

export default function App() {
    return <Router />;
}
