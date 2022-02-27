type EventCardComponentType = {
  date: string;
  title: string;
  speaker: string;
  desc: string;
  attendees?: number;
};

type PastEventComponentType = {
  date: string;
  title: string;
  speaker: string;
  desc: string;
  attendees: number;
  type: string;
};
