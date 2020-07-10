import React from "react";
import Button from "./Button";

export default {
  component: Button,
  title: "atoms/Button",
};

export const ButtonGoIn = () => <Button>Przejdź dalej</Button>;
export const ButtonMore = () => <Button moreBtn>Zobacz więcej</Button>;
export const ButtonBack = () => <Button backBtn>wstecz</Button>;
