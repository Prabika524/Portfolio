import { useState } from "react";
import { Mail, Link2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";
import DecoDots from "../components/DecoDots";
import { sendContactMessage } from "../api/client";

const socialIcon = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: Mail,
  other: Link2,
};

export default function Contact({ profile }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", error: "" });
  const social = profile?.social || {};

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "sending", error: "" });
    try {
      await sendContactMessage(form);
      setStatus({ state: "sent", error: "" });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus({
        state: "error",
        error: err?.response?.data?.message || "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24 border-t border-line">
      <DecoDots
        dots={[
          { size: 14, top: "18%", left: "6%" },
          { size: 10, top: "60%", right: "26%" },
          { size: 12, bottom: "10%", left: "42%" },
        ]}
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 py-20 sm:grid-cols-2">
        <div>
          <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">Connect with Me</h1>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-gray-500">
            This form is for contacting me about opportunities to work or collaborate. Please avoid
            general conversations.
          </p>
          <div className="mt-6 flex items-center gap-4">
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
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-[14px] font-medium text-ink">Full Name</label>
            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="mt-2 w-full rounded-md border border-line px-4 py-3 text-[14px] outline-none focus:border-ink"
            />
          </div>
          <div>
            <label className="text-[14px] font-medium text-ink">Email</label>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="youremail@gmail.com"
              className="mt-2 w-full rounded-md border border-line px-4 py-3 text-[14px] outline-none focus:border-ink"
            />
          </div>
          <div>
            <label className="text-[14px] font-medium text-ink">Message</label>
            <textarea
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Hi, I would like to reach out to you..."
              rows={5}
              className="mt-2 w-full rounded-md border border-line px-4 py-3 text-[14px] outline-none focus:border-ink"
            />
          </div>

          <button
            type="submit"
            disabled={status.state === "sending"}
            className="rounded-md bg-ink px-8 py-3 text-[13px] font-bold uppercase tracking-wide text-white transition hover:bg-black disabled:opacity-60"
          >
            {status.state === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status.state === "sent" && (
            <p className="text-[13px] font-medium text-okgreen">Thanks — your message has been sent.</p>
          )}
          {status.state === "error" && (
            <p className="text-[13px] font-medium text-red-600">{status.error}</p>
          )}
        </form>
      </div>
    </section>
  );
}
