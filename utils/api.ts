import { IEventsProps, IEventsPropAttributes } from "../types/IEventsProps";

export const getData = async () => {    
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/events?populate[speaker][populate]=photo&populate[banner]=*`, {
      method: 'GET',
      headers: {
        Authorization: `bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      }
    });
    const data = await res.json();
    let events: {}[] = [];
    data.data.map((item: IEventsProps) => {
      events.push({
        startDate: item.attributes.start_date,
        title: item.attributes.title,
        uuid: item.attributes.uuid,
      })
    })
    
  } catch (error) {
    console.log(error);
  }
};