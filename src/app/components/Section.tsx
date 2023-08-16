export default function Section(props: any) {
  return (
    <div className="flex flex-col p-3 m-2 items-center rounded-lg border-2 shadow-md">
      {props.children}
    </div>
  );
}
