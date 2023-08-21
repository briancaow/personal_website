export default function Section(props: any) {
  return (
    <div className="flex flex-col py-3 px-3 m-3 items-center">
      <h2 className="pb-2">{props.title}</h2>
      {props.children}
    </div>
  );
}
