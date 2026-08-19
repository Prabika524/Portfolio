import { CheckCircle2 } from "lucide-react";
import DecoDots from "../components/DecoDots";

function TimelineColumn({ title, items }) {
  return (
    <div>
      <h3 className="font-display text-xl font-bold text-ink">{title}</h3>
      <div className="mt-6 space-y-8">
        {items.map((item, i) => (
          <div key={i} className="relative border-l border-line pl-5">
            <span className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full bg-okgreen" />
            <p className="font-semibold text-[15px] text-ink">{item.title}</p>
            {(item.subtitle || item.period) && (
              <p className="mt-0.5 text-[13.5px] text-gray-500">
                {[item.subtitle, item.period].filter(Boolean).join(" · ")}
              </p>
            )}
            {item.description && (
              <p className="mt-2 text-[14px] leading-relaxed text-gray-600">{item.description}</p>
            )}
          </div>
        ))}
        {items.length === 0 && <p className="text-[14px] text-gray-400">Nothing added yet.</p>}
      </div>
    </div>
  );
}

function ChecklistColumn({ title, items }) {
  return (
    <div>
      <h3 className="font-display text-xl font-bold text-ink">{title}</h3>
      <div className="mt-6 space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-okgreen" />
            <p className="text-[14.5px] leading-relaxed text-gray-700">{item.text}</p>
          </div>
        ))}
        {items.length === 0 && <p className="text-[14px] text-gray-400">Nothing added yet.</p>}
      </div>
    </div>
  );
}

export default function ExperienceEducation({ profile }) {
  return (
    <section id="experience" className="relative scroll-mt-24 border-t border-line">
      <DecoDots dots={[{ size: 14, top: "10%", left: "48%" }]} />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <h1 className="font-display text-center text-3xl font-bold text-ink sm:text-4xl">
          Experience & Education
        </h1>
        <hr className="mt-10 border-line" />

        <div className="mt-12 grid grid-cols-1 gap-14 sm:grid-cols-2">
          <TimelineColumn title="Education" items={profile?.education || []} />
          <TimelineColumn title="Experience" items={profile?.experience || []} />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-14 sm:grid-cols-2">
          <TimelineColumn title="Hackathons" items={profile?.hackathons || []} />
          <TimelineColumn title="Volunteer Experience" items={profile?.volunteerExperience || []} />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-14 sm:grid-cols-2">
          <ChecklistColumn title="Certifications" items={profile?.certifications || []} />
        </div>
      </div>
    </section>
  );
}
