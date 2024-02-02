import mjml2html from "mjml";
import template from "../templates/_base.js";
import typograf from "./typograf.js";

class EventLetter {
  static renderHTML(event) {
    const mjmlTemplate = template(event);
    const htmlTemplate = mjml2html(mjmlTemplate);
    const emailBody = typograf.execute(htmlTemplate.html);
    return emailBody;
  }
}

export default EventLetter;
