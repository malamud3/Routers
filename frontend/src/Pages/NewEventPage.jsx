import EventForm from '../components/EventForm';

const newEventPage = () => {
  return <EventForm />;
};
export default newEventPage;

// data via Form element in EventForm
export const newEventHandler = async ({ request, params }) => {
  const data = await request.fromData();

  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  };

  const res = await fetch('http://localhost:8080/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  });
  if (!res.ok) {
    throw new Response(JSON.stringify({ massege: 'Post new event failled!' }), {
      status: 500,
    });
  }
};
