import React from "react";
import { SelectedPage } from "@/shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = (setSelectedPage: Props) => {
  return <div id="contactus">ContactUs</div>;
};

export default ContactUs;
