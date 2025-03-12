import { Router } from './components/router/Router.jsx';
import { UserProvider } from './providers/UserProvider.jsx';
import { RecoilRoot } from 'recoil';

import './styles.css';

export default function App() {
    return (
        <RecoilRoot>
            <UserProvider>
                <Router />
            </UserProvider>
        </RecoilRoot>
    );
}
