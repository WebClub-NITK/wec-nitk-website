import React, { useEffect, useState } from "react";
import { Globe, Twitter, Linkedin, FileText, MessageCircle, ExternalLink } from "lucide-react";

export default function Linktree({
  profile = {
    name: "Web Club NITK",
    role: "Students' Web Club",
    avatar: "/default-og-image.png",
    bio: "Official Web Club link hub — events, socials and resources.",
  },
  links = [
    { id: 1, title: "Hackathon 104 Session PPT", href: "https://www.canva.com/design/DAG00RzUgr8/ba6EOIxch6kJDaD8iho5KA/edit", external: true },
    { id: 2, title: "HackClub NITK Whatsapp", href: "https://chat.whatsapp.com/FPMWvRrJwrm3RxzscT9OfP", external: true },
    { id: 3, title: "HackClub NITK Twitter", href: "https://x.com/HackClubNITK", external: true },
    { id: 4, title: "ML League Whatsapp", href: "https://chat.whatsapp.com/HWld9laFTBn7LS8gDx19mw", external: true },
    { id: 5, title: "Website", href: "https://webclub.nitk.ac.in/", external: true },
    { id: 6, title: "Linkedin", href: "https://www.linkedin.com/school/web-enthusiasts-club-nitk/?originalSubdomain=in", external: true },
    { id: 7, title: "Twitter", href: "https://x.com/wecnitk", external: true },
  ],
}) {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState(null);
  const [copied, setCopied] = useState(false);
  const STORAGE_KEY = "wec_linktree_subscribers";

  useEffect(() => {
    if (copied) {
      const t = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(t);
    }
  }, [copied]);

  function validateEmail(e) {
    return /^\S+@\S+\.\S+$/.test(e);
  }

  function handleSubscribe(ev) {
    ev.preventDefault();
    if (!validateEmail(email)) {
      setMsg({ type: "error", text: "Please enter a valid email." });
      return;
    }
    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      if (existing.includes(email)) {
        setMsg({ type: "info", text: "You're already subscribed." });
        return;
      }
      existing.push(email);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
      setMsg({ type: "success", text: "Subscribed successfully! (saved locally)" });
      setEmail("");
    } catch (err) {
      setMsg({ type: "error", text: "Failed to subscribe locally." });
    }
  }

  // map title keywords to icons
  const getIcon = (title) => {
    if (title.toLowerCase().includes("ppt")) return <FileText className="w-5 h-5 text-indigo-500" />;
    if (title.toLowerCase().includes("twitter")) return <Twitter className="w-5 h-5 text-sky-500" />;
    if (title.toLowerCase().includes("whatsapp")) return <MessageCircle className="w-5 h-5 text-green-500" />;
    if (title.toLowerCase().includes("linkedin")) return <Linkedin className="w-5 h-5 text-blue-600" />;
    if (title.toLowerCase().includes("website")) return <Globe className="w-5 h-5 text-gray-600" />;
    return <Globe className="w-5 h-5 text-gray-500" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-200 via-slate-50 to-slate-100 flex items-center justify-center p-24">
      <main className="w-full max-w-md mx-auto">
        {/* Glass card */}
        <div className="backdrop-blur-lg bg-blue/30 border border-white/40 shadow-xl rounded-2xl p-6 text-center">
          {/* Profile photo */}
          <img
            src={profile.avatar}
            alt="avatar"
            className="mx-auto h-24 w-24 rounded-full object-cover border-2 border-white shadow-md"
          />

          <h1 className="mt-4 text-2xl font-semibold text-gray-900">{profile.name}</h1>
          <p className="text-sm text-gray-600 mt-1">{profile.role}</p>
          {profile.bio && <p className="text-sm text-gray-700 mt-3">{profile.bio}</p>}

          {/* Links list */}
          <section className="mt-6 space-y-3 bg-black">
            {links.map((l) => (
              <a
                key={l.id}
                href={l.href}
                target={l.external ? "_blank" : "_self"}
                rel={l.external ? "noreferrer noopener" : undefined}
                className="block w-full px-4 py-3 rounded-xl border border-white/40 bg-white/30 backdrop-blur-md hover:bg-white/50 transition-all shadow-sm hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  {/* Left icon */}
                  <div className="flex items-center gap-3">
                    {getIcon(l.title)}
                    <span className="font-medium text-gray-800">{l.title}</span>
                  </div>

                  {/* Right external icon */}
                  {l.external && (
                    <ExternalLink className="w-4 h-4 text-gray-500 opacity-70 hover:opacity-100" />
                  )}
                </div>
              </a>
            ))}
          </section>

          {/* Subscribe */}
          <form onSubmit={handleSubscribe} className="mt-6">
            <label className="sr-only">Email</label>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email to subscribe"
                className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
              <button
                type="submit"
                className="border border-gray-200 px-3 py-2 rounded-md bg-red-600"
              >
                Subscribe
              </button>
            </div>
            {msg && (
              <p
                className={`mt-3 text-sm ${
                  msg.type === "error" ? "text-red-600" : msg.type === "success" ? "text-green-600" : "text-gray-700"
                }`}
              >
                {msg.text}
              </p>
            )}
            <p className="mt-2 text-xs text-gray-400">(Subscriptions are stored locally in your browser for now.)</p>
          </form>
        </div>
      </main>
    </div>
  );
}
