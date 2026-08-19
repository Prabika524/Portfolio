import { ArrowRight, Mail, Link2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";
import DecoDots from "../components/DecoDots";

const socialIcon = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: Mail,
  other: Link2,
};

export default function Home({ profile }) {
  const social = profile?.social || {};
  const initials = (profile?.name || "PR")
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div id="home">
      {/* Hero */}
      <section className="relative overflow-hidden scroll-mt-24">
        <DecoDots
          dots={[
            { size: 14, top: "8%", left: "6%" },
            { size: 10, top: "30%", left: "48%" },
            { size: 12, top: "58%", right: "6%" },
          ]}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-col items-start gap-10 sm:flex-row">
            <div className="w-full max-w-[280px] shrink-0 overflow-hidden rounded-md bg-gray-100">
              {profile?.heroImage ? (
                <img src={profile.heroImage} alt={profile.name} className="h-full w-full object-cover" />
              ) : (
                <div className="flex aspect-[4/5] items-center justify-center bg-gray-100 text-6xl font-bold text-gray-300">
                  {initials}
                </div>
              )}
            </div>

            <div className="max-w-xl pt-1">
              <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                {(profile?.name || "").toUpperCase()}
              </h1>
              <p className="mt-3 text-[15px] text-gray-500">{profile?.role}</p>
              {profile?.subtitle && (
                <p className="text-[15px] text-gray-500">{profile.subtitle}</p>
              )}

              {profile?.greeting && (
                <div className="mt-5 inline-block rounded-full bg-gray-100 px-4 py-2 text-[14px] text-ink">
                  {profile.greeting}
                </div>
              )}

              <div className="mt-5 flex items-center gap-4">
                {Object.entries(social).map(([key, url]) => {
                  if (!url) return null;
                  const Icon = socialIcon[key] || Link2;
                  const colorClasses = {
                    github: "text-[#333333] hover:text-[#000000]",
                    linkedin: "text-[#0A66C2] hover:text-[#004182]",
                    email: "text-[#EA4335] hover:text-[#C5221F]",
                    other: "text-[#4F46E5] hover:text-[#4338CA]",
                  };
                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className={`transition ${colorClasses[key] || "text-gray-700 hover:text-ink"}`}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>

              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-gray-600">
                {profile?.bio}
              </p>

              {/* About section removed — 'Learn more' link omitted */}
            </div>
          </div>
        </div>
      </section>

      {/* Hello, world! */}
      <section className="relative border-t border-line">
        <DecoDots dots={[{ size: 10, top: "20%", right: "4%" }, { size: 12, top: "45%", left: "45%" }]} />
        <div className="relative mx-auto max-w-4xl px-6 py-20">
          <h2 className="font-display text-3xl font-bold text-ink">Hello, world!</h2>
          <div className="mt-5 space-y-4">
            {(profile?.bioParagraphs || []).map((p, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-gray-600">
                {p}
              </p>
            ))}
          </div>

          <hr className="my-12 border-line" />

          <h2 className="font-display text-3xl font-bold text-ink">Lately</h2>
          <div className="mt-5 space-y-4">
            {(profile?.latelyParagraphs || []).map((p, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-gray-600">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
