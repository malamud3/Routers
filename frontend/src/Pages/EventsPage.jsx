import { Await, useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';
import { Suspense } from 'react';

function EventsPage() {
  const data = useLoaderData().events;
  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={data}>
        {(loaedEvents) => <EventsList events={loaedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

// function EventsPage() {
//   const {data} = useLoaderData();

//   const events = data.events;

//   // return <EventsList events={events} />;
// }

// export default EventsPage;

const eventsFetch = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw new Response(JSON.stringify({ massege: 'fetch events failled!' }), {
      status: 500,
    });
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

export const eventsLoader = async () => {
  return {
    events: eventsFetch(),
  };
};

// import { useLoaderData } from 'react-router-dom';
// import EventsList from '../components/EventsList';

// function EventsPage() {
//   const data = useLoaderData();
//   if (data.isErr) {
//     return <p>{data.message}</p>;
//   }
//   const events = data.events;

//   return <EventsList events={events} />;
// }

// export default EventsPage;

// export const eventsLoader = async () => {
//   const response = await fetch('http://localhost:8080/events');

//   if (!response.ok) {
//     return { isErr: true, message: 'fetch faill' };
//   } else {
//     return response;
//   }
// };
