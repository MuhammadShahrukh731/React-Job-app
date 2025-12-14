import Profile from "./components/Profile/Profile";
import Header from "./components/Header/header";
import SearchBar from "./components/Searchbar/Searchbar";
import JobSection from "./components/Jobsection/Jobsection";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <>          <Navbar />

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
