import React from "react";

type Props = {
  name: string;
  description?: string;
  image: string;
};

function Class({ name, description, image }: Props) {
  return (
    <div>
      <div>{name}</div>
      <div>{description}</div>
      <img alt="Training-Class-Graphic" src={image} />
    </div>
  );
}

export default Class;
