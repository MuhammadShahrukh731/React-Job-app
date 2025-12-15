import Profile from "../../components/Profile/Profile";
import JobSection from "../../components/JobSection/JobSection";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function Dashboard() {
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
