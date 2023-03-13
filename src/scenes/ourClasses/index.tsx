import React from "react";
import { motion } from "framer-motion";
import { SelectedPage, ClassObject } from "@/shared/types";
import { classes } from "@/data";
import HText from "@/shared/HText";
import Class from "./Class";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ourClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Aliquam augue quam, malesuada ac nisi non, ultrices vestibulum
              nulla. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Cras venenatis elit ut dignissim.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className=" w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassObject, idx) => (
              <Class
                key={`${item.name}-${idx}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default ourClasses;
