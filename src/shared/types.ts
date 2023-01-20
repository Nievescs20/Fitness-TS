export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface BenefitObject {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassObject {
  name: string;
  description?: string;
  image: string;
}
