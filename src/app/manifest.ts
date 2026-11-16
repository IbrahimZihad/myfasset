import type { MetadataRoute } from "next";
import { content } from "@/data/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "myfasset",
    short_name: "myfasset",
    description: content.en.meta.description,
    start_url: "/en",
    scope: "/",
    display: "standalone",
    background_color: "#F3F5FA",
    theme_color: "#0A2A66",
    lang: "en",
    icons: [
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
