import { Route, Routes } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
import ErrorBoundary from '../error-boundries/ErrorBoundry';

const Routing = () => (<Routes>
    <Route path='' element={<ErrorBoundary><Dashboard /></ErrorBoundary>}>
    </Route>
    <Route path="*" element={<ErrorBoundary><Dashboard /></ErrorBoundary>}>
    </Route>
</Routes>);

export default Routing;
