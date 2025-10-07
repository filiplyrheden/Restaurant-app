import { Meta } from "@storybook/nextjs";

import Stars from "./Stars";

export default {
  title: "Molecules/Stars",
  component: Stars,
  tags: ["autodocs"],
} satisfies Meta;

export const Default = {
  args: {
    count: 3,
  },
};
