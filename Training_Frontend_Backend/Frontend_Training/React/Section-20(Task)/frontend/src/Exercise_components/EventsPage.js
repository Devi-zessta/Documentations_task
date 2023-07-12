import { Await, defer, json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const {events} = useLoaderData();
  // if(fetchedEvents.IsError){
  //   return(
  //     <p>{fetchedEvents.message}</p>
  //   )
  // }

  return (
    <Suspense fallback={<p style={{textAlign:'center'}}>Loading........</p>}>
    <Await resolve={events}>
        {(loadedEvents)=><EventsList events={loadedEvents} />}

      </Await>
    </Suspense>
      
    
  );
}

export default EventsPage;

export async function EventLoader(){
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { IsError:true,message:'could not fetch details'};
    //  throw new Response(JSON.stringify({message:'could not fetch events!!!!...'}),{status:500});
    return json({ message: "could not fetch events" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
 return defer({
    events:EventLoader(),
  })
  
}

// import { Link } from "react-router-dom";

// const EVENTDETAILS = [
//   { id: "Event1", title: "EventDetail-1" },
//   { id: "Event2", title: "EventDetail-2" },
//   { id: "Event3", title: "EventDetail-3" },
//   { id: "Event4", title: "EventDetail-4" },
// ];

// function EventsPage() {
//   return (
//     <>
//       <h1>Welcome To EventsPage</h1>
//       <ul>
//         {EVENTDETAILS.map((event) => (
//           <li>
//             <Link to={`/events/${event.id}`}>{event.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default EventsPage;
