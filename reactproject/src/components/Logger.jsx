export function Logger(props) {
  const date = new Date();
  console.log(`komponent stworzony o: ${date.getHours()}:${date.getMinutes()}`);
  return <>{props.children}</>;
}
