import React from "react";
import { SelectedPage } from "@/shared/types";
import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer id="footer" className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Mauris sagittis, orci quis rhoncus maximus, ante dui vestibulum
            mauris, non vulputate nisl purus in eros. Pellentesque eu eros et
            leo viverra pretium vitae vel nunc. Aenean vel aliquet tellus. Proin
            justo magna, laoreet id nisi quis, interdum iaculis libero. Vivamus
            lacus nunc, dapibus vel.
          </p>
          <p>© Evo by CSN</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Maecenas vestibulum vehicula dolor vel</p>
          <p className="my-5">Fusce diam libero, convallis id</p>
          <p>Nulla fringilla faucibus </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Nam sollicitudin consequat mattis</p>
          <p className="my-5">(555)-555-5555</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
