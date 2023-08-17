export default function DemoVideo(props: any) {
  return (
    <video
      playsInline
      autoPlay
      muted
      controls
      loop
      className="w-full rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
    >
      <source src={props.source} type="video/mp4" />
    </video>
  );
}
