import Carousel from "react-bootstrap/Carousel";
import DemoVideo from "./demo_video";

export default function AmethystCarousel(props: any) {
  return (
    <div className="flex flex-row justify-center lg:w-2/3 bg-purple-500">
      <Carousel interval={null} variant="dark" indicators={false} slide={true}>
        <Carousel.Item>
          <div className="flex flex-col items-center justify-center w-4/5 mx-auto bg-green-500">
            <DemoVideo source="/2xAmethyst_Add_Demo.mp4" />
            <h3>Create Flashcards</h3>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="flex flex-col items-center justify-center w-4/5 mx-auto bg-green-500">
            <DemoVideo source="/2xAmethyst_Select_Demo.mp4" />
            <h3>Select From Nested Decks</h3>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="flex flex-col items-center justify-center w-4/5 mx-auto bg-green-500">
            <DemoVideo source="/2xAmethyst_Edit_Demo.mp4" />
            <h3>Edit with Rich Text</h3>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
