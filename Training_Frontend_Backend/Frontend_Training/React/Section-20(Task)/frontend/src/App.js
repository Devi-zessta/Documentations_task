// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active------
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Exercise_components/HomePage";
import EventsPage from "./Exercise_components/EventsPage";
import EventDetailPage from "./Exercise_components/EventDetailPage";
import NewEventPage from "./Exercise_components/NewEventPage";
import EditEventPage from "./Exercise_components/EditEventPage";
import Root from "./Exercise_components/Root";
import RootLayout from "./Exercise_components/RootLayout";
import { loader as eventsLoader } from "./Exercise_components/EventsPage";
import ErrorElement from "./Exercise_components/ErrorElement";
import { loader as eventDetailLoader } from "./Exercise_components/EventDetailPage";
import {action as ManipulateAction} from './components/EventForm';
import {action as EventDeleteAction} from './Exercise_components/EventDetailPage';
import NewsletterPage from "./components/NewsLetter";
import  { action as newsletterAction } from './components/NewsLetter';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorElement />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "events",
          element: <RootLayout />,
          children: [
            {
              index: true,
              element: <EventsPage />,
              loader: eventsLoader,
            },
            {
              path: ":Id",
              loader: eventDetailLoader,
              id:'event-id',
              children: [
                { path: "edit", element: <EditEventPage /> ,action:ManipulateAction},
                {
                  index: true,
                  element: <EventDetailPage />,
                  action:EventDeleteAction,
                },
              ],
            },

            { path: "new", element: <NewEventPage /> ,action:ManipulateAction},
          ],
        },
        {
          path: 'newsletter',
          element: <NewsletterPage />,
          action: newsletterAction,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
