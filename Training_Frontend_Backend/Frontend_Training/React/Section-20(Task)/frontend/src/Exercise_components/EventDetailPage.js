import { Await, defer, json, redirect, useLoaderData, useRouteLoaderData} from "react-router-dom";
import EventItem from "../components/EventItem";
import { Suspense } from "react";
import EventsList from "../components/EventsList";

function EventDetailPage() {
  // const params=useParams();
  const {event,events} = useRouteLoaderData('event-id');

  return  <>
  <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
    <Await resolve={event}>
      {(loadedEvent) => <EventItem event={loadedEvent} />}
    </Await>
  </Suspense>
  <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
    <Await resolve={events}>
      {(loadedEvents) => <EventsList events={loadedEvents} />}
    </Await>
  </Suspense>
</>
}
export default EventDetailPage;



async function loadEvent(id) {
  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });
    throw json(
      { message: 'Could not fetch events.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export async function loader({ request, params }) {
  const id = params.Id;

  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  });
}

export async function action({ params, request }) {
  const eventId = params.Id;
  const response = await fetch('http://localhost:8080/events/' + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      { message: 'Could not delete event.' },
      {
        status: 500,
      }
    );
  }
  return redirect('/events');
}

// export async function loader({ request, params }) {
//   const id = params.Id;
//   const response = await fetch("http://localhost:8080/events/" + id);

//   if (!response.ok) {
   
//     return json(
//       { message: "Could not fetch details for selected id" },
//       { status: 500 }
//     );
//   } else {
//     const Data = await response.json();
//     return Data;
//   }
// }

// export async function action({request,params}){
//     const id=params.Id;
//     const response=await fetch("http://localhost:8080/events/" + id,{
//         method:request.method
//       });
//     if(!response.ok){
//         throw json({message:'could not delete event'},{status:500});
//     }
//     return redirect('/events');

// }
