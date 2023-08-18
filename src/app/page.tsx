"use client";
import Image from "next/image";
import Section from "./components/section";
import GitHubCalendar, { Props } from "react-github-calendar";
import AmethystCarousel from "./components/amethyst_carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import QuikSwitchCarousel from "./components/quik_switch_carousel";

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
          <h2>Brian Cao</h2>
          <div className="text-center">
            <p>
              Passionate about making indie projects and building cool things.
              Current Junior studying computer science at the University of
              Washington.
            </p>
          </div>
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
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-center items-start">
        <Section title="About Me">
          <p>
            👴 {getAge()} years old <br />
            🇻🇳 Vietnamese <br />
            🎓 University of Washington <br />
            💻 Computer Science <br />
            🙏 Looking for work <br />
            🏂 Snowboarding {">"} Skiing <br />
          </p>
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
          <div>
            <p>
              Amethyst <br />
              QuikSwitch <br />
              BuildLapse <br />
              BarBouncer <br />
            </p>
          </div>
        </Section>
      </div>
      <div className="flex flex-col items-center mx-5 space-y-6 bg-yellow-500">
        <div className="flex flex-col lg:flex-row lg:justify-center w-full items-center flex-wrap space-y-10 bg-red-500">
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
            <p>
              What if learning happened where we consumed information? <br />
              <br />
              With Amethyst, anyone from students to knowledge-workers will be
              able to discover, understand, and retain relevant information
              without leaving their browser.
            </p>
          </div>
          <AmethystCarousel />
        </div>
        <div className="flex flex-col lg:flex-row-reverse lg:justify-center w-full items-center flex-wrap bg-orange-500">
          <div className="flex flex-col lg:px-6 items-center space-y-3 mb-3 lg:w-2/6 md:w-full lg:items-start bg-blue-500">
            <div className="flex flex-row space-x-3 items-center">
              <Image
                src="/QS_256.png"
                alt="QuikSwitch Logo"
                width={60}
                height={60}
              />
              <h2>QuikSwitch</h2>
            </div>
            <p>What if we could switch between multiple apps at once?</p>
          </div>
          <QuikSwitchCarousel />
        </div>

        <h2>BuildLapse</h2>
        <p>What if we could market our products by building them?</p>
        <h2>BarBouncer</h2>
        <p>What if I made an IOS app?</p>
      </div>

      <Section title="Activities">
        <div>
          <h2>Surf AI 2.0 Hackathon Win</h2>
          <h2>DubHacks NEXT</h2>
          <h2>Lavin Entrepreneurship Program</h2>
        </div>
      </Section>
      <Section>
        <h1>Resume</h1>
      </Section>
      <Section>
        <h1>Contact</h1>
        <p>Email: briancao02@gmail.com</p>
      </Section>
    </main>
  );
}
