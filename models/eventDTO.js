class EventDTO {
  constructor(entry) {
    this.uuid = entry.attributes.uuid;
    this.title = entry.attributes.title;
    this.eventType = entry.attributes.event_type;
    this.description = entry.attributes.description;
    this.agenda = entry.attributes.agenda ? entry.attributes.agenda.split("\n") : null;
    this.agendaTitle = entry.attributes.agenda_title;
    this.registrationUrl = entry.attributes.registration_url;
    this.banner = entry.attributes.banner.data.attributes.url;
    this.startDate = entry.attributes.start_date;
    this.endDate = entry.attributes.end_date;
    this.startTime = entry.attributes.start_time;
    this.endTime = entry.attributes.end_time;
    this.price = entry.attributes.price;
    this.procurementPrice = entry.attributes.procurement_price;
    this.discountPercent = entry.attributes.discount_percent;
    this.speaker = {
      firstName: entry.attributes.speaker.data.attributes.first_name,
      middleName: entry.attributes.speaker.data.attributes.middle_name,
      lastName: entry.attributes.speaker.data.attributes.last_name,
      lastNameGenitive: entry.attributes.speaker.data.attributes.last_name_genitive,
      regalia: entry.attributes.speaker.data.attributes.regalia,
      photo: entry.attributes.speaker.data.attributes.photo.data.attributes.url,
    };
    this.upcomingEvents = [];
    this.email = {
      subject: entry.attributes.email_subject,
      sendDatetime: entry.attributes.email_send_datetime,
    };
  }
}

export default EventDTO;
