import { Link } from 'react-router-dom';

const DUMMY_DATA = [
  {
    id: '1',
    title: 'e1',
  },
  {
    id: '2',
    title: 'e2',
  },
  {
    id: '3',
    title: 'e3',
  },
  {
    id: '3',
    title: 'e3',
  },
];

const EventsPage = () => {
  return (
    <>
      <h1>Event Page</h1>
      <ul>
        {DUMMY_DATA.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default EventsPage;
