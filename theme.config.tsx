import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: "Lion Guide",
    };
  },
  navigation: {
    prev: false,
    next: false,
  },
  primaryHue: 42,
  primarySaturation: 81,
  docsRepositoryBase:
    "https://github.com/L0stedMrlion/lion_recoil/blob/main/config.lua",
  logo: <span>🦁 Lion Guide</span>,
  project: {
    link: "https://github.com/L0stedMrlion/lion_recoil",
  },
  chat: {
    link: "https://discord.gg/dNrayyRZ9j",
  },
  footer: {
    text: "🦁 Lion's Project™",
  },
};

export default config;
