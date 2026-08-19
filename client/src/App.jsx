import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ExperienceEducation from "./pages/ExperienceEducation";
import ProjectsPublications from "./pages/ProjectsPublications";
import Contact from "./pages/Contact";
import { getProfile, getProjects } from "./api/client";
import { fallbackProfile, fallbackProjects } from "./data/fallback";

export default function App() {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);

  useEffect(() => {
    getProfile()
      .then(setProfile)
      .catch(() => setProfile(fallbackProfile));

    getProjects()
      .then((data) => setProjects(data.length ? data : fallbackProjects))
      .catch(() => setProjects(fallbackProjects))
      .finally(() => setLoadingProjects(false));
  }, []);

  const activeProfile = profile || fallbackProfile;

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Navbar name={activeProfile.name} />
      <main className="flex-1">
        <Home profile={activeProfile} />
        <ExperienceEducation profile={activeProfile} />
        <ProjectsPublications projects={projects} loading={loadingProjects} />
        <Contact profile={activeProfile} />
      </main>
      <Footer name={activeProfile.name} />
    </div>
  );
}
