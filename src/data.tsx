import { BenefitObject, ClassObject } from "./shared/types";

import img1 from "@/assets/image1.png";
import img2 from "@/assets/image2.png";
import img3 from "@/assets/image3.png";
import img4 from "@/assets/image4.png";
import img5 from "@/assets/image5.png";
import img6 from "@/assets/image6.png";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

export const benefits: BenefitObject[] = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "In blandit tellus augue. Integer fermentum nibh accumsan tempor mollis. Mauris eu metus eros. Praesent euismod, nisl non mollis ultrices.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Proin ac mauris quis ligula maximus malesuada eu et metus. Sed a maximus mi. Cras eu nisi quis nunc venenatis.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Duis ac sollicitudin metus, vitae fringilla augue. Cras at volutpat sapien, vel posuere risus. Aliquam gravida dui risus, sit amet.",
  },
];

export const classes: ClassObject[] = [
  {
    name: "Weight Training Classes",
    description:
      "Suspendisse sed dolor ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec et leo pellentesque, pulvinar est eget, sollicitudin odio.",
    image: img1,
  },
  {
    name: "Yoga Classes",
    description:
      "Suspendisse sed dolor ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec et leo pellentesque, pulvinar est eget, sollicitudin odio.",
    image: img2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Suspendisse sed dolor ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec et leo pellentesque, pulvinar est eget, sollicitudin odio.",
    image: img3,
  },
  {
    name: "Adventure Classes",
    image: img4,
  },
  {
    name: "Fitness Classes",
    description:
      "Suspendisse sed dolor ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec et leo pellentesque, pulvinar est eget, sollicitudin odio.",
    image: img5,
  },
  {
    name: "Training Classes",
    image: img6,
  },
];
