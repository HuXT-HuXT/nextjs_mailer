import Handlebars from "handlebars";
import { marked } from "marked";
import Head from "./head.js";
import Header from "./header.js";
import Banner from "./banner.js";
import Announce from "./announce.js";
import Divider from "./divider.js";
import Agenda from "./agenda.js";
import Description from "./description.js";
import Speaker from "./speaker.js";
import Price from "./price.js";
import Footer from "./footer.js";
import LegalNotice from "./legal-notice.js";
import UpcomingEvents from "./upcoming-events.js";

Handlebars.registerHelper("getFirstLetter", function (str) {
    return str ? str[0] + "." : "";
});

Handlebars.registerHelper("capitalizeFirstLetter", function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
    
});

Handlebars.registerHelper("getMonth", function (dateStr) {
    let date = new Date(dateStr);
    return date.toLocaleDateString("ru-ru", { month: "long" });
});

Handlebars.registerHelper("getDay", function (dateStr) {
    let date = new Date(dateStr);
    return date.toLocaleDateString("ru-ru", { day: "numeric" });
});

Handlebars.registerHelper("getDayAndMonth", function (dateStr) {
    let date = new Date(dateStr);
    return date.toLocaleDateString("ru-ru", { month: "long", day: "numeric" });
});

Handlebars.registerHelper("getTime", function (timeStr) {
    let time = timeStr.split(":");
    return time[0] + ":" + time[1];
});

Handlebars.registerHelper("markdown", function (str) {
    return marked.parse(str);
});

Handlebars.registerHelper("raw", function (str) {
    return str.fn();
});

Handlebars.registerPartial("Head", Head);
Handlebars.registerPartial("Header", Header);
Handlebars.registerPartial("Banner", Banner);
Handlebars.registerPartial("Announce", Announce);
Handlebars.registerPartial("Divider", Divider);
Handlebars.registerPartial("Description", Description);
Handlebars.registerPartial("Agenda", Agenda);
Handlebars.registerPartial("Speaker", Speaker);
Handlebars.registerPartial("Price", Price);
Handlebars.registerPartial("Footer", Footer);
Handlebars.registerPartial("LegalNotice", LegalNotice);
Handlebars.registerPartial("UpcomingEvents", UpcomingEvents);


const Base = `
<mjml lang="ru">

  <mj-head>
      <mj-title>{{ title }}</mj-title>
      {{> Head}}
  </mj-head>

  <mj-body background-color="#eee">
      {{> Header}}
      {{> Banner}}
      {{> Announce}}
      {{#if description}}
          {{> Divider}}
          {{> Description}}
      {{/if}}
      {{#if agenda}}
          {{> Divider}}
          {{> Agenda}}
      {{/if}}
      {{> Divider}}
      {{> Speaker}}
      {{> Divider}}
      {{> Price}}
      {{#if upcomingEvents}}
          {{> Divider}}
          {{> UpcomingEvents}}
      {{/if}}
      {{> Footer}}
      {{> LegalNotice}}
  </mj-body>

</mjml>
`;

const template = Handlebars.compile(Base);
export default template;
