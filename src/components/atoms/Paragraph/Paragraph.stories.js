import React from "react";
import Paragraph from "./Paragraph";

export default {
  component: Paragraph,
  title: "atoms/Paragraph",
};

export const paragraphSmall = () => <Paragraph>HSDataBase</Paragraph>;
export const paragraphNormal = () => <Paragraph normal>HSDataBase</Paragraph>;
export const paragraphBig = () => <Paragraph big>HSDataBase</Paragraph>;
