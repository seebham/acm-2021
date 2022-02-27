import EventCard from "./EventCard";
import upcoming_events from "../data/upcoming_events";
import PastEvent from "./PastEvent";
import past_events from "../data/past_events";

const EventSection = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-semibold">Events</h2>
        {upcoming_events.length > 0 && (
          <>
            <h4 className="text-2xl border-b-2 mt-4">Upcoming events</h4>
            <div className="mt-4 md:mt-6 flex flex-col justify-center items-center md:w-1/2 md:pl-4 gap-4 md:gap-4">
              <EventCard
                date="22-11-2020"
                title="16 Hours SDP on ReactJS and NodeJS"
                speaker={"Mr. Ahfaz Rahman"}
                desc="16 Hrs SDP on React and Node JS was organised by the department. Mr. Ahafaz Rahaman from TCS Nagpur was the resource person"
                attendees={90}
              />
            </div>
          </>
        )}
        <h4
          className={`text-2xl border-b-2 ${
            upcoming_events.length > 0 ? "mt-8 md:mt-10" : "mt-4"
          }`}
        >
          Past Events
        </h4>
        <div className="mt-4 -my-8 divide-y-2 divide-gray-100">
          {past_events.map((event) => {
            return (
              <PastEvent
                title={event.title}
                date={event.date}
                desc={event.desc}
                attendees={event.attendees}
                speaker={event.speaker}
                type={event.type}
                key={event.date}
              />
            );
          })}
          {/* <PastEvent
            title="Career Opportunities Abroad"
            date="03-06-2020"
            type="Webinar"
            desc="A counselling seminar about how students will get an opportunity for having career abroad"
            attendees={82}
            speaker="Mr.Swarup Gandewar - ICAD, Nagpur, Mr.Swarup Gandewar - ICAD, Nagpur, Mr.Swarup Gandewar - ICAD, Nagpur, Mr.Swarup Gandewar - ICAD, Nagpur, Mr.Swarup Gandewar - ICAD, Nagpur"
          />
          <PastEvent />
          <PastEvent /> */}
        </div>
      </div>
    </div>
  );
};

export default EventSection;
