import { model } from "./model";
import { Site } from "./classes/site";
import { Sidebar } from "./classes/sidebar";
import "./styles/main.css";

const updateCallback = (newBlock) => {
  model.push(newBlock);
  site.render(model);
};

const site = new Site("#site");

new Sidebar("#panel", updateCallback);

site.render(model);
