export default function Section(props: any) {
  return (
    <div className="flex flex-col p-3 space-y-3 items-center bg-purple-300 rounded-lg shadow-2xl">
      {props.children}
    </div>
  );
}
