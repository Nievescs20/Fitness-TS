import { BenefitObject } from "./shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const benefits: BenefitObject[] = [
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

export default benefits;
