export default function Section(props: any) {
  return (
    <div className="flex flex-col p-3 space-y-3 items-center bg-blue-100 rounded-lg">
      {props.children}
    </div>
  );
}
