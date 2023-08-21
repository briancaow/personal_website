"use client";
import Image from "next/image";
import Section from "./components/section";
import GitHubCalendar, { Props } from "react-github-calendar";
import AmethystCarousel from "./components/amethyst_carousel";
import QuikSwitchCarousel from "./components/quik_switch_carousel";
import HackathonCarousel from "./components/hackathon_carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import LavinCarousel from "./components/lavin_carousel";
import { useRef } from "react";
import next from "next/types";

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

  const handleScroll = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const amethystRef = useRef(null);
  const quikSwitchRef = useRef(null);
  const surfRef = useRef(null);
  const nextRef = useRef(null);
  const lavinRef = useRef(null);

  return (
    <main className="flex flex-col py-10 min-h-screen items-center justify-start">
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
                alt="linkedIn Logo"
                width={40}
                height={40}
                className="hover:opacity-75"
              />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/BrianCaoo"
              rel="noopener noreferrer"
            >
              <Image
                src="/x.png"
                alt="X Logo"
                width={50}
                height={50}
                className="hover:opacity-75"
              />
            </a>

            <a
              target="_blank"
              href="https://github.com/briancaow"
              rel="noopener noreferrer"
            >
              <Image
                src="/github.png"
                alt="GitHub Logo"
                width={40}
                height={40}
                className="hover:opacity-75"
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
              <button
                className="underline"
                onClick={() => {
                  handleScroll(amethystRef);
                }}
              >
                Amethyst
              </button>{" "}
              <br />
              <button
                className="underline"
                onClick={() => {
                  handleScroll(quikSwitchRef);
                }}
              >
                QuikSwitch
              </button>
              <br />
            </p>
          </div>
        </Section>
        <Section title="Activities">
          <div>
            <p>
              <button
                className="underline"
                onClick={() => {
                  handleScroll(surfRef);
                }}
              >
                Surf AI 2.0 Hackathon Win
              </button>
              <br />
              <button
                className="underline"
                onClick={() => {
                  handleScroll(nextRef);
                }}
              >
                DubHacks NEXT
              </button>
              <br />
              <button
                className="underline"
                onClick={() => {
                  handleScroll(lavinRef);
                }}
              >
                Lavin Entrepreneurship Program
              </button>
            </p>
          </div>
        </Section>
      </div>
      <div className="flex flex-col items-center mx-5 space-y-6 lg:px-10">
        <div
          ref={amethystRef}
          className="flex flex-col lg:flex-row lg:justify-center w-full items-center flex-wrap space-y-10"
        >
          <div className="flex flex-col lg:px-6 items-center space-y-3 mb-3 lg:w-2/6 md:w-full lg:items-start">
            <p className="opacity-75 italic">
              First Place Surf AI 2.0 Hackathon Winner
            </p>
            <div className="flex flex-row space-x-3 items-center">
              <Image
                src="/AmethystLogo.png"
                alt="Amethyst Logo"
                width={30}
                height={30}
              />
              <h2>Amethyst</h2>
            </div>
            <h3 className="opacity-75 italic">
              What if learning happened where we consumed information?
            </h3>
            <p>
              With Amethyst, anyone from students to knowledge-workers will be
              able to discover, understand, and retain relevant information
              without leaving their browser.
            </p>
          </div>
          <AmethystCarousel />
        </div>
        <div
          ref={quikSwitchRef}
          className="flex flex-col lg:flex-row-reverse lg:justify-center w-full items-center flex-wrap"
        >
          <div className="flex flex-col lg:px-6 items-center space-y-3 mb-3 lg:w-2/6 md:w-full lg:items-start">
            <p className="opacity-75 italic">
              Prev. Top 50 Paid Productivity App | Featured on{" "}
              <a href="https://www.geekwire.com/2023/univ-of-washington-students-show-off-their-startup-ideas-at-dubhacks-next-demo-day/">
                GeekWire
              </a>
            </p>
            <div className="flex flex-row space-x-3 items-center">
              <Image
                src="/QS_256.png"
                alt="QuikSwitch Logo"
                width={60}
                height={60}
              />
              <h2>QuikSwitch</h2>
            </div>
            <h3 className="opacity-75 italic">
              What if we could switch between multiple apps at once?
            </h3>
            <p>
              Tired of manually switching between and organizing multiple apps
              at once? With QuikSwitch, anyone who values efficiency and
              productivity can streamline their workflow like never before.
            </p>
          </div>
          <QuikSwitchCarousel />
        </div>

        <h2 ref={surfRef}>Surf AI 2.0 Hackathon Win</h2>
        <HackathonCarousel />
        <div className="flex flex-col items-center lg:w-[900px] md:w-[700px]">
          <p className="italic">April, 2023</p>
          <p>
            Participated and won first place in an AI hackathon with my friend
            Parsa and over 200 tech enthusiasts in Seattle. Developed an
            application we called Amethyst that could break any topic down into
            subtopics recursively, quiz users on that topic, and explain that
            topic in different learning styles. <br />
            <br />
            Our first place prize included: <br />
            <ol className="list-decimal">
              <li>
                A formal interview with AI2 incubator partners to explore a
                potential investment of up to $500,000
              </li>
              <li>90 minute pitch coaching session with Pitch4Impact</li>
              <li>
                SWOT debriefing with Mossy Ventures and free entry into the most
                relevant Mossy Ventures angel conference program
              </li>
              <li>
                1 hour consultation every other week for 90 days and a 1 page
                website from The Briarwood Group
              </li>
              <li>A 90-day hot desk package at SURF Incubator</li>
              <li>
                A $200 gift card to Ciudad Grill restaurant from Ascend VC
              </li>
              <li>
                A pitch recording for Y-combinator submission from Passion Fruit
              </li>
              <li>$2,500 in OpenAI credits from OpenAI</li>
            </ol>
          </p>
        </div>
        <h2 ref={nextRef}>DubHacks NEXT</h2>
        <Image
          className="rounded-lg overflow-hidden"
          src="/next_1.jpg"
          alt="next Pic 1"
          width={900}
          height={900}
        />
        <div className="flex flex-col items-center lg:w-[900px] md:w-[700px]">
          <p className="italic">April, 2023</p>
          <p>
            Participated as an EiR (Entrepreneur in Residence) in{" "}
            <a href="https://next.dubhacks.co/">Dubhacks NEXT</a>&apos;s batch 2
            &mdash; a 16-week incubator for founders and
            Entrepreneurs-in-Residence (EiR), that works with prominent
            organizations in the area to put on workshops, speakers, networking
            events, and more to connect members with the resources, knowledge,
            and people they need to take their project to the next level.
            <br />
            <br />
            Developed a MacOS application called QuikSwitch that helps mac users
            efficently organize and switch multiple application windows. <br />
            <br />
            Previously ranked in the top 50 paid productivity apps in the mac
            app store and was featured in{" "}
            <a href="https://www.geekwire.com/2023/univ-of-washington-students-show-off-their-startup-ideas-at-dubhacks-next-demo-day/">
              GeekWire
            </a>
            .
          </p>
        </div>
        <h2 ref={lavinRef}>Lavin Entrepreneurship Program</h2>
        <LavinCarousel />
        <div className="flex flex-col items-center lg:w-[900px] md:w-[700px]">
          <p className="italic">May, 2023</p>
          <p>
            Member of the{" "}
            <a href="https://foster.uw.edu/centers/buerk-ctr-entrepreneurship/undergraduate-entrepreneurship/lavin-entrepreneurship-program/">
              Lavin Entrepreneurship Program
            </a>{" "}
            &mdash; a highly-competitive program for undergraduate entrepreneurs
            from all majors and disciplines across the UW campus.
          </p>
        </div>
        <h2>Let&apos;s Connect!</h2>
        <p>Email: briancao02@gmail.com</p>
        <div className="flex flex-row items-center">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/bcao/"
            rel="noopener noreferrer"
          >
            <Image
              src="/linkedIn.png"
              alt="linkedIn Logo"
              width={40}
              height={40}
              className="hover:opacity-75"
            />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/BrianCaoo"
            rel="noopener noreferrer"
          >
            <Image
              src="/x.png"
              alt="X Logo"
              width={50}
              height={50}
              className="hover:opacity-75"
            />
          </a>

          <a
            target="_blank"
            href="https://github.com/briancaow"
            rel="noopener noreferrer"
          >
            <Image
              src="/github.png"
              alt="GitHub Logo"
              width={40}
              height={40}
              className="hover:opacity-75"
            />
          </a>
        </div>
      </div>
    </main>
  );
}
