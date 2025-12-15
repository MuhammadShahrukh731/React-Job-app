import Profile from "./components/Profile/Profile.jsx";
import SearchBar from "./components/SearchBar";
import JobSection from "./components/JobSection/JobSection.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Header from "./components/Header/Header.jsx";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 flex">
        <Profile />

        <main className="flex-1 p-6 space-y-6">
          <Header />
          <SearchBar />

          <JobSection title="Featured Jobs" />
          <JobSection title="Recommended Jobs" />
          <JobSection title="Latest Jobs" />
        </main>
      </div>
    </>

  );
}
