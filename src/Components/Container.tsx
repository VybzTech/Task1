type ContainerProps = { heading: string; body: JSX.Element };
const Container = (props: ContainerProps) => {
  return (
    <div className="Container">
      <div className="top">{props.heading}</div>
      <div className="content">{props.body}</div>
    </div>
  );
};

export default Container;
