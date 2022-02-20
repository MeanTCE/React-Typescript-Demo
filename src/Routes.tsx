import { useRoutes } from 'react-router-dom'
import Home from './pages/home/Home'
import FrontLayout from './components/layouts/FrontLayout'
import About from './pages/about/About';
import Team from './pages/team/Team';
import Project from './pages/project/Project';


const Routes: React.FC = (): JSX.Element => {
    const mainRoutes = useRoutes([
        {
        path: '/',
        element: <FrontLayout />,
        children: [{path: '/', element: <Home />}]
        },
        {
        path: '/about',
        element: <FrontLayout />,
        children: [{path: '/about', element: <About />}]
        },
        {
        path: '/teams',
        element: <FrontLayout />,
        children: [{path: '/teams', element: <Team />}]
        },
        {
        path: '/projects',
        element: <FrontLayout />,
        children: [{path: '/projects', element: <Project />}]
        }
    ])

return <>{mainRoutes}</>;

};

export default Routes