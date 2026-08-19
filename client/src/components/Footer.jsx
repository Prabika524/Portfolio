export default function Footer({ name = "Prabika Rai" }) {
  return (
    <footer className="border-t border-line bg-paper py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-[13px] text-gray-400 sm:flex-row">
        <span>© {new Date().getFullYear()} {name}. All rights reserved.</span>
        <span>Built with the MERN stack.</span>
      </div>
    </footer>
  );
}
