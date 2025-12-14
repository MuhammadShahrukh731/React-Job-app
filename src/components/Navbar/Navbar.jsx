import Logo from '../../assets/images/logo.png';
import Avatar from '../../assets/images/avatar.jpg';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white-500 text-black custom-font">
      <div className="flex items-center space-x-4">
        <img
          src={Logo}
          alt="Logo"
          className="h-8 w-8"
        />
        <a href="/" className="text-xl font-semibold find-job">Find Jobs</a>
      </div>
      <div className="flex items-center space-x-10 company">
        <a href="/top-companies" className="text-sm">Top Companies</a>
        <a href="/job-tracker" className="text-sm">Job Tracker</a>
        <a href="/my-calendar" className="text-sm">My Calendar</a>
        <a href="/documents" className="text-sm">Documents</a>
        <a href="/messages" className="text-sm">Messages</a>
        <a href="/notifications" className="text-sm">Notifications</a>

        <input
          type="search"
          placeholder="Search"
          className="px-4 py-2 rounded-md text-sm search-css"
        />
        <button className="bg-blue-700 text-white px-4 py-2 rounded-md resume-builder-css">Resume Builder</button>
        <img
          src={Avatar}
          alt="User Avatar"
          className="h-10 w-10 rounded-full"
        />
      </div>
    </nav>
  )
}
