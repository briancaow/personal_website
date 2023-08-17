import Carousel from "react-bootstrap/Carousel";
import DemoVideo from "./DemoVideo";

export default function QuikSwitchCarousel(props: any) {
  return (
    <div className="flex flex-row justify-center lg:w-2/3 bg-purple-500">
      <Carousel interval={null} variant="dark" indicators={false} slide={false}>
        <Carousel.Item>
          <div className="flex flex-col items-center justify-center w-4/5 mx-auto bg-green-500">
            <DemoVideo source="/2xQuikSwitch_Switch_Demo.mp4" />
            <h3>Switch Between Workspaces</h3>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="flex flex-col items-center justify-center w-4/5 mx-auto bg-green-500">
            <DemoVideo source="/2xQuikSwitch_Add_Demo.mp4" />
            <h3>Add and Edit Workspaces</h3>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
