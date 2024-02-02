import LetterDTO from '../models/letterDTO';
import EventDTO from '../models/eventDTO';
import { renderAsync } from '@react-email/render';
import { AstroTemplate } from './astroTemplate';

export const getEvents = async () => {
  const eventsResponseData = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/events?populate[speaker][populate]=photo&populate[banner]=*`, {
    method: 'GET',
    headers: {
      Authorization: `bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
    }
  });

  const eventsData = await eventsResponseData.json();  
  const events: {}[] = [];

  await Promise.all(
    eventsData.data.map(async (entry: {}) => {
      const event = new EventDTO(entry);
      const letter = new LetterDTO(event);
      const html = await renderAsync(AstroTemplate({
        agenda: event.agenda,
        agendaTitle: event.agendaTitle,
        banner: event.banner,        
        uuid: event.uuid,
        title: event.title,
        eventType: event.eventType,
        description: event.description,
        registrationUrl: event.registrationUrl,
        startDate: event.startDate,
        endDate: event.endDate,
        startTime: event.startTime,
        endTime: event.endTime,
        price: event.price,
        procurementPrice: event.procurementPrice,
        discountPercent: event.discountPercent,
        firstName: event.speaker.firstName,
        middleName: event.speaker.middleName,
        lastName: event.speaker.lastName,
        lastNameGenitive: event.speaker.lastNameGenitive,
        regalia: event.speaker.regalia,
        photo: event.speaker.photo,        
        subject: event.email.subject,
        sendDatetime: event.email.sendDatetime,
      }))
      letter.body = html;
      console.log(html);

      const status = await getCampaignStatus(event.uuid);
      if (status.response.msg.err_code === 0) {
        letter.status = status.response.data[0].status;
        letter.dashaId = status.response.data[0].id;        
      }

      events.push(letter);
    })  
  )

  // eventsData.data.map((entry: {}) => {
  //   const event = new EventDTO(entry);
  //   const letter = new LetterDTO(event);
  //   events.push(letter);
  // });  

  // await Promise.all(
  //   events.map(async (entry: Record<string, string>) => {
  //     entry.status = 'DRAFT';
  //     entry.dashaId = 'none';      
  //     const status = await getCampaignStatus(entry.uuid);
  //     if (status.response.msg.err_code === 0) {
  //       entry.status = status.response.data[0].status;
  //       entry.dashaId = status.response.data[0].id;        
  //     }
  //   })
  // );
  return events;  
};

export const scheduleCampaign = async (letter: Record<string, string>) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DASHAMAIL_BASE_URL}/?method=campaigns.get&api_key=${process.env.NEXT_PUBLIC_DASHAMAIL_API_KEY}`, {
    method: 'POST',
    body: JSON.stringify({
      list_id: [process.env.NEXT_PUBLIC_DASHAMAIL_LIST_ID],
      name: letter.subject,
      subject: letter.subject,
      external_campaign_id: letter.uuid,
      html: letter.body,
      from_name: process.env.NEXT_PUBLIC_FROM_NAME,
      from_email: process.env.NEXT_PUBLIC_FROM_EMAIL,        
    }),
  });
  const data = await res.json();

  return data;
};

export const getCampaignStatus = async (uuid: string) => {
  const statusResponse = await fetch(`${process.env.NEXT_PUBLIC_DASHAMAIL_BASE_URL}/?method=campaigns.get&api_key=${process.env.NEXT_PUBLIC_DASHAMAIL_API_KEY}`, {
    method: 'POST',
    body: JSON.stringify({
      external_campaign_id: uuid,
    })        
  })
  const status = await statusResponse.json();

  return status;
};
