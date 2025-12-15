
import './SearchBar.css';
export default function SearchBar() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex gap-4">
      <input
        type="text"
        placeholder="Job title, company, or keywords"
        className="flex-1  rounded-md px-4 py-2 text-sm focus:outline-none"
      />

      <select className="border rounded-md px-3 py-2 text-sm">
        <option>Select Location</option>
      </select>

      <select className="border rounded-md px-3 py-2 text-sm">
        <option>Job Type</option>
      </select>

      <button className=" text-white px-6 rounded-md text-sm font-medium search">
        Search
      </button>
    </div>
  );
}
