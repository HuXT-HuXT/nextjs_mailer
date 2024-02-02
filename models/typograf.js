import Typograf from "typograf";

const typograf = new Typograf({ locale: ["ru", "en-US"] });
typograf.disableRule("common/symbols/cf");

export default typograf;
