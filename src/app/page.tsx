"use client";
import Image from "next/image";
import Section from "./components/Section";
import DemoVideo from "./components/DemoVideo";
import GitHubCalendar, { Props } from "react-github-calendar";

export default function Home() {
  const selectLastHalfYear: Props["transformData"] = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  const getAge = () => {
    const now = new Date();
    const bday = new Date(2002, 10, 22);
    var diff = (now.getTime() - bday.getTime()) / 1000;
    diff /= 60 * 60 * 24;
    return Math.floor(diff / 365.25);
  };

  return (
    <main className="flex flex-col pt-10 min-h-screen items-center justify-start">
      <div className="w-[310px] md:w-[400px] lg:w-[600px]">
        <div className="flex flex-col py-3 px-3 m-3 items-center space-y-3">
          <div className="rounded-full overflow-hidden">
            <Image
              src="/BrianCao.jpg"
              alt="Picture of author"
              width={100}
              height={100}
            />
          </div>
          <h1>Brian Cao</h1>
          <div className="text-center">
            <p>
              Passionate about making Indie-projects and building cool things.
              Current Junior studying computer science at the University of
              Washington.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-center items-start">
        <Section title="About Me">
          <ul>
            <li>
              <p>👴 {getAge()} years old</p>
            </li>
            <li>
              <p>🇻🇳 Vietnamese</p>
            </li>
            <li>
              <p>🎓 University of Washington</p>
            </li>
            <li>
              <p>💻 Computer Science</p>
            </li>
            <li>
              <p>🙏 Looking for work</p>
            </li>
            <li>
              <p>🏂 Snowboarding {">"} Skiing</p>
            </li>
          </ul>
        </Section>

        <Section title="GitHub">
          <div>
            <GitHubCalendar
              username={"briancaow"}
              transformData={selectLastHalfYear}
              hideColorLegend
              fontSize={16}
              labels={{
                totalCount: "{{count}} contributions in the last half year",
              }}
            />
          </div>
        </Section>
        <Section title="Projects">
          <ul>
            <li>
              <p>Amethyst</p>
            </li>
            <li>
              <p>QuikSwitch</p>
            </li>
            <li>
              <p>BuildLapse</p>
            </li>
            <li>
              <p>BarBouncer</p>
            </li>
          </ul>
        </Section>
      </div>
      <div className="flex flex-col items-center mx-5 bg-yellow-500">
        <div className="flex flex-col lg:flex-row lg:justify-center w-full items-center flex-wrap bg-red-500">
          <div className="flex flex-col lg:px-6 items-center space-y-3 mb-3 lg:w-2/6 md:w-full lg:items-start bg-blue-500">
            <div className="flex flex-row space-x-3 items-center">
              <Image
                src="/AmethystLogo.png"
                alt="Amethyst Logo"
                width={30}
                height={30}
              />
              <h2>Amethyst</h2>
            </div>
            <p>What if learning happened where we consumed information?</p>
          </div>
          <div className="flex flex-col items-center justify-center lg:w-4/6">
            <DemoVideo source="/2xAmethyst_CreateFlashcard_Demo.mp4" />
            <h3>Create Flashcards</h3>
          </div>
          <div className="bg-green-500 w-full md:w-2/3 lg:1/3 px-3 pt-3">
            <p>
              The #1 source of up to date and relevant information is found
              through the browser. Despite this, there is little to no
              infrastructure for retaining or referencing that information.
              <br />
              <br />
              However, with Amethyst, anyone from students to knowledge-workers
              will be able to discover, understand, and retain relevant
              information.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center lg:w-2/3">
          <DemoVideo source="/2xAmethyst_SelectDeck_Demo.mp4" />
          <h3>Select From Nested Decks</h3>
        </div>
        <div className="flex flex-col items-center justify-center lg:w-2/3">
          <DemoVideo source="/2xAmethyst_Edit_Demo.mp4" />
          <h3>Edit with Rich Text</h3>
        </div>
        <h2>QuikSwitch</h2>
        <p>What if we could Switch between multiple apps at once?</p>
        <h2>BuildLapse</h2>
        <p>What if we could market our products by building them?</p>
        <h2>BarBouncer</h2>
        <p>What if I made a IOS app?</p>
      </div>

      <Section title="Activities">
        <div>
          <h2>Surf AI 2.0 hackathon Win</h2>
          <h2>DubHacks NEXT</h2>
          <h2>Lavin Entrepreneurship Program</h2>
        </div>
      </Section>
      <Section>
        <h1>Resume</h1>
      </Section>
      <Section>
        <div className="flex flex-row items-center">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/bcao/"
            rel="noopener noreferrer"
          >
            <Image
              src="/linkedIn.png"
              alt="Picture of author"
              width={40}
              height={40}
            />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/BrianCaoo"
            rel="noopener noreferrer"
          >
            <Image
              src="/x.png"
              alt="Picture of author"
              width={50}
              height={50}
            />
          </a>

          <a
            target="_blank"
            href="https://github.com/briancaow"
            rel="noopener noreferrer"
          >
            <Image
              src="/github.png"
              alt="Picture of author"
              width={40}
              height={40}
            />
          </a>
        </div>
      </Section>

      <Section>
        <h1>Contact</h1>
        <p>Email: briancao02@gmail.com</p>
      </Section>
    </main>
  );
}
