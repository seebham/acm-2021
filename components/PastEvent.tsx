const PastEvent = ({
  title,
  date,
  speaker,
  desc,
  attendees,
  type,
}: PastEventComponentType) => {
  return (
    <div className="py-8 flex flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="font-semibold title-font text-gray-700">{type}</span>
        <span className="mt-1 text-gray-500 text-sm">{date}</span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
          {title}
        </h2>
        <p className="leading-relaxed">{desc}</p>
        <div className="flex flex-row flex-wrap md:flex-nowrap gap-8 mt-4">
          <div className="inline-flex items-center">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 mr-2 text-indigo-500"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            {speaker}
          </div>
          <div className="inline-flex items-center">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 mr-2 text-indigo-500"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            {attendees}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastEvent;
