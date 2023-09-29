import React from "react";
type ContainerProps = { heading: string; body: JSX.Element };
const Container = (props: ContainerProps) => {
  return (
    <div>
      <div className="top">{props.heading}</div>
      <>{props.body}</>
    </div>
  );
};

export default Container;
