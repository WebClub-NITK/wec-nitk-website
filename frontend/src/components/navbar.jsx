"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSearch, FaTimes } from "react-icons/fa";
import Fuse from "fuse.js";
import axios from "axios";

const API_URL = "http://localhost:1337";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [allData, setAllData] = useState([]);
  const path = usePathname();
  const inputRef = useRef(null);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    setQuery("");
    setResults([]);
    setHighlightIndex(-1);
    if (!searchOpen) setTimeout(() => inputRef.current?.focus(), 100);
  };

  useEffect(() => {
    setIsOpen(false);
    setSearchOpen(false);
    setQuery("");
    setResults([]);
  }, [path]);


  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      try {
        const collections = ["members", "blogs", "events", "hackathons", "sigs"];
        let tempData = [];

        for (const col of collections) {
          const res = await axios.get(`${API_URL}/api/${col}?pagination[pageSize]=100`);
          const items = res.data.data.map((item) => ({
            type: col.slice(0, -1), 
            title: item.attributes.title || item.attributes.name || "Untitled",
            id: item.id,
          }));
          tempData = tempData.concat(items);
        }
        setAllData(tempData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAllData();
  }, []);


  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const fuse = new Fuse(allData, {
      keys: ["title"],
      threshold: 0.3, 
    });

    const fuseResults = fuse.search(query).map(r => r.item);
    setResults(fuseResults);
  }, [query, allData]);

  const handleKeyDown = (e) => {
    if (!results.length) return;
    if (e.key === "ArrowDown") setHighlightIndex((prev) => Math.min(prev + 1, results.length - 1));
    else if (e.key === "ArrowUp") setHighlightIndex((prev) => Math.max(prev - 1, 0));
    else if (e.key === "Enter" && highlightIndex >= 0) {
      const item = results[highlightIndex];
      window.location.href = `/${item.type}/${item.id}`;
    } else if (e.key === "Escape") toggleSearch();
  };

  return (
    <div className="fixed top-4 inset-x-0 z-50">
      <div className="max-w-2xl mx-auto px-8">
        <div className="w-full mx-auto">
          <div className="relative flex flex-col w-full md:p-3 p-1 mx-auto ring-1 uppercase ring-gray-700 backdrop-blur-xl backdrop-filter rounded-xl md:rounded-full md:items-center md:justify-between md:flex-row bg-secondary-900/50">

           
            <div className="flex flex-row items-center justify-between md:justify-start">
              <a
                className="text-primary-100 hover:text-primary-50 gap-4 items-center inline-flex font-bold ml-2 text-xl transition-all ease-in-out duration-300"
                href="/"
                style={{ textTransform: 'none' }}
              >
                WebClub
              </a>
              <button
                onClick={toggleNavbar}
                className="inline-flex items-center justify-center p-2 text-white hover:text-primary-200 focus:outline-none md:hidden"
                aria-controls="navbar-default"
                aria-expanded={isOpen ? "true" : "false"}
              >
                <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

           
            {searchOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-secondary-900/90 backdrop-blur-xl rounded-xl p-2 z-50">
                <div className="flex items-center gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search..."
                    className="w-full px-4 py-2 rounded-lg text-black focus:outline-none"
                  />
                  <button onClick={toggleSearch} className="text-white text-lg">
                    <FaTimes />
                  </button>
                </div>
                {loading && <div className="text-white mt-1">Loading...</div>}
                {results.length > 0 && (
                  <ul className="bg-white text-black mt-1 rounded-lg max-h-64 overflow-auto shadow-lg">
                    {results.map((item, index) => (
                      <li
                        key={`${item.type}-${item.id}`}
                        className={`px-4 py-2 cursor-pointer ${index === highlightIndex ? "bg-gray-300" : ""}`}
                        onMouseEnter={() => setHighlightIndex(index)}
                        onClick={() => window.location.href = `/${item.type}/${item.id}`}
                      >
                        <span className="font-bold">{item.type}: </span>
                        <span dangerouslySetInnerHTML={{__html: item.title.replace(new RegExp(query, "gi"), (match) => `<mark>${match}</mark>`)}} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

          
            {!searchOpen && (
              <nav
                id="navbar-default"
                className={`${isOpen ? "block" : "hidden"} md:flex md:items-end md:justify-center md:flex-row md:pb-0 pb-5`}
              >
                <ul className="space-y-4 py-1 list-none text-xs text-gray-500 md:space-y-0 md:ml-auto items-center md:inline-flex justify-center text-center md:text-left gap-3">
                  <li><Link href="/events" className="hover:text-white shrink-0">Events</Link></li>
                  <li><Link href="/blogs" className="hover:text-white shrink-0">Blogs</Link></li>
                  <li><Link href="/members" className="hover:text-white shrink-0">Members</Link></li>
                  <li><Link href="/hackclub_nitk" className="hover:text-white shrink-0">HackClub</Link></li>
                  <li className="shrink-0">
                    <a href="https://linktr.ee/wecnitk" target="_blank" className="py-2 w-auto px-4 border-2 h-8 rounded-full text-white duration-200 focus:ring-offset-2 ring-2">Linktree</a>
                  </li>

                  <li className="shrink-0">
                    <button onClick={toggleSearch} className="text-white text-lg hover:text-primary-200">
                      <FaSearch />
                    </button>
                  </li>
                </ul>
              </nav>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
