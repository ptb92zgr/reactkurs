export function HeadingItalic(props) {
  console.log('HI', props);
  return (
    <h1>
      <i>{props.children}</i>
    </h1>
  );
}
