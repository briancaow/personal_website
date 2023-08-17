export default function Section(props: any) {
  return (
    <div className="flex flex-col py-3 px-3 rounded-lg m-3 items-center space-y-3">
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
}
