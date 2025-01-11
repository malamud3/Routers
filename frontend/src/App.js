import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventsPage, { eventsLoader } from './pages/EventsPage';
import EventDetailPage, { eventDetailLoader } from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import RootLayout from './routers/RootLayout';
import EventRoot from './routers/EventRoot';
import ErrorPage from './pages/ErrorPage';
import newEventHandler from './pages/NewEventPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
              },
              { path: 'edit', element: <EditEventPage /> },
            ],
          },
          { path: 'new', element: <NewEventPage />, action: newEventHandler },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
