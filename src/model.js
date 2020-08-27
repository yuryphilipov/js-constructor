import {
  TitleBlock,
  ImageBlock,
  TextBlock,
  TextColumnsBlock,
} from "./classes/blocks";

import { css } from "./utils";

export const model = [
  new TitleBlock("Test Title", {
    tag: "h2",
    styles: css({
      background: "darkred",
      color: "#fff",
      padding: "1.5rem",
      "text-align": "center",
    }),
    // styles: "background: darkred; color: #fff; text-align: center",
  }),
  new TextBlock(
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia",
    {
      styles: "background: darkblue; color: yellow",
    }
  ),
  new TextColumnsBlock(["1 text", "2 text", "3 text"], {
    styles: "padding: 1rem; text-align: center",
  }),
  new ImageBlock(
    "https://avatars.mds.yandex.net/get-pdb/199965/c18d93f6-0b6a-49fa-9b07-87c2589417c0/s1200",
    {
      styles: "",
      alt: "image",
      imageStyles: "width: 400px; height: auto",
    }
  ),
];
