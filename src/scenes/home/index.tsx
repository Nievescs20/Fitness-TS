import React from "react";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import homePageText from "@/assets/HomePageText.png";
import homePageGraphic from "@/assets/HomePageGraphic.png";
import sponsorRedBull from "@/assets/SponsorRedBull.png";
import sponsorForbes from "@/assets/SponsorForbes.png";
import sponsorFortune from "@/assets/SpongsorFortune.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreens = useMediaQuery("(min- width: 1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <div className="">
        {/* MAIN HEADER */}
        <div>
          {/* Headings */}
          <div>
            <div>
              <div>
                <img alt="home-page-text" src={homePageText} />
              </div>
            </div>
          </div>
        </div>
        {/* IMAGE */}
        <div></div>
      </div>
    </section>
  );
}

export default Home;
