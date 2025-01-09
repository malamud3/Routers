import { useRouteLoaderData } from 'react-router-dom';
import EventForm from '../components/EventForm';

const EditEventPage = () => {
  const data = useRouteLoaderData('event-detail').event;

  return <EventForm event={data} />;
};
export default EditEventPage;
