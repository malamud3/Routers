import { useLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

const EventDetailPage = () => {
  const data = useLoaderData();
  const eventDetail = data.event;

  return (
    <>
      <EventItem event={eventDetail} />
    </>
  );
};
export default EventDetailPage;

export const eventDetailLoader = async ({ req, params }) => {
  const id = params.eventId;

  const res = await fetch('http://localhost:8080/events/' + id);
  if (!res.ok) {
    throw new Response(
      JSON.stringify({ massege: 'fetch eventDetail failled!' }),
      {
        status: 500,
      }
    );
  } else {
    return res;
  }
};

// import { useParams } from 'react-router-dom';

// const EventDetailPage = () => {
//   const params = useParams();

//   return (
//     <>
//       <h1>EventDetailPage</h1>
//       <p>Event ID: {params.eventId}</p>
//     </>
//   );
// };
// export default EventDetailPage;
