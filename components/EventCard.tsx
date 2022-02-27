const EventCard = ({
  date,
  title,
  speaker,
  desc,
  attendees,
}: EventCardComponentType) => {
  return (
    <div className=" border-2 border-gray-500 rounded-lg p-6 shadow-md">
      {/* Event Title */}
      <div className="text-lg font-semibold">{title}</div>

      {/* Event Details */}
      <div className="flex flex-col gap-2 md:flex-row justify-between mt-2">
        <div className="inline-flex">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          {speaker}
        </div>
        <div className="inline-flex gap-6">
          {attendees && (
            <div className="inline-flex">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              {attendees}
            </div>
          )}
          <div className="inline-flex">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            {date}
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-4 text-base text-justify">{desc}</div>
    </div>
  );
};

export default EventCard;
