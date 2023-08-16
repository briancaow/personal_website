"use client";
import Image from "next/image";
import Section from "./components/Section";
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
    <main className="px-9">
      <div className="flex flex-row flex-wrap min-h-screen items-center justify-center space-x-3">
        <div className="flex flex-col max-w-[800px] items-end justify-center space-y-3 bg-red-500">
          <Section>
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
                Passionate about making indie-projects and building cool things.{" "}
                <br /> Current Junior studying computer science at the
                University of Washington
              </p>
            </div>
          </Section>

          <div className="max-w-[400px]">
            <Section>
              <h1>GitHub</h1>
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
          </div>
        </div>

        <div className="flex flex-row flex-wrap w-[700px] justify-center space-y-3 space-x-3 bg-blue-500">
          <div className="">
            <Section>
              <h1>About Me</h1>
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
          </div>

          <div className="">
            <Section>
              <h1>Activities</h1>
              <div>
                <h2>DubHacks NEXT</h2>
                <h2>Lavin Entrepreneurship Program</h2>
              </div>
            </Section>
          </div>

          <div className="">
            <Section>
              <h1>My Projects</h1>
              <div>
                <h2>Amethyst</h2>
                <p>What if learning happened where we consumed information?</p>
                <h2>QuikSwitch</h2>
                <p>What if we could Switch between multiple apps at once?</p>
                <h2>BuildLapse</h2>
                <p>What if we could market our products by building them?</p>
                <h2>BarBouncer</h2>
                <p>What if I made a IOS app?</p>
              </div>
            </Section>
          </div>

          <div>
            <Section>
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
                  width={40}
                  height={40}
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
            </Section>
          </div>
        </div>
        <div className="flex flex-col w-[300px] h-[550px] flex-none justify-center space-y-3 bg-yellow-500">
          <Section>
            <h1>Resume</h1>
          </Section>
          <Section>
            <h1>Contact</h1>
            <p>Email: briancao02@gmail.com</p>
          </Section>
        </div>
      </div>
    </main>
  );
}
