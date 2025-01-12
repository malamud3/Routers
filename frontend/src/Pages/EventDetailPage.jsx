import { redirect, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';
import { getAuthToken } from '../util/auth';
const EventDetailPage = () => {
  const data = useRouteLoaderData('event-detail').event;

  return (
    <>
      <EventItem event={data} />
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

export const deleteEventAction = async ({ params }) => {
  const eventId = params.eventId;
  const token = getAuthToken();
  const res = await fetch('http://localhost:8080/events/' + eventId, {
    method: 'delete',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  if (!res.ok) {
    throw new Response(JSON.stringify({ massege: 'delete event failled!' }), {
      status: 500,
    });
  } else {
    return redirect('/events');
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
