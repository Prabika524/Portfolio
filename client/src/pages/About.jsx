import { getIcon, accentMap } from "../utils/icons";
import DecoDots from "../components/DecoDots";

export default function About({ profile }) {
  const skills = profile?.skills || [];

  return (
    <section id="about" className="relative scroll-mt-24 border-t border-line">
      <DecoDots dots={[{ size: 12, top: "8%", right: "10%" }]} />
      <div className="relative mx-auto max-w-4xl px-6 py-20">
        <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">About</h1>

        <div className="mt-6 space-y-4">
          {(profile?.bioParagraphs?.length ? profile.bioParagraphs : [profile?.bio]).map((p, i) => (
            <p key={i} className="text-[15px] leading-relaxed text-gray-600">
              {p}
            </p>
          ))}
        </div>

        <hr className="my-12 border-line" />

        <h2 className="font-display text-xl font-bold text-ink">What I work with</h2>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {skills.map((skill) => {
            const Icon = getIcon(skill.iconKey);
            const accent = accentMap[skill.accentColor] || accentMap.purple;
            return (
              <div key={skill.label} className="flex items-start gap-3 rounded-md border border-line p-4">
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${accent.solid} text-white`}>
                  <Icon size={17} />
                </span>
                <div>
                  <p className="text-[14.5px] font-semibold text-ink">{skill.label}</p>
                  <p className="text-[13px] text-gray-500">{skill.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
