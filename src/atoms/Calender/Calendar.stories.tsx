import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Calender from "./Calender";

export default {
  title: "Pages/Calender",
  component: Calender,
} as Meta<typeof Calender>;

const Template: StoryFn<typeof Calender> = () => <Calender />;

export const Default = Template.bind({});
