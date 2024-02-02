import axios from "axios";
import EventDTO from "./eventDTO.js";

class EventFetcher {
  constructor(baseURL, token) {
    this.HTTPClient = axios.create();
    this.HTTPClient.defaults.baseURL = baseURL;
    this.HTTPClient.defaults.headers.common = {
      Authorization: `bearer ${token}`,
    };  }

  async getEvents() {
    const eventsResponseData = await this.HTTPClient.get(
      "/api/events?populate[speaker][populate]=photo&populate[banner]=*"
    );

    const eventsData = eventsResponseData.data.data;
    const events = [];
    
    eventsData.map((entry) => {      
      events.push(new EventDTO(entry));
    });    

    return events;
  }

  async getEventByUUID(uuid) {
    const eventResponseData = await this.HTTPClient.get(
      `/api/events?filters[uuid][$eq]=${uuid}&populate[speaker][populate]=photo&populate[banner]=*`
    );
    const entry = eventResponseData.data.data[0]
    
    return new EventDTO(entry);
  }
}

export default EventFetcher;
