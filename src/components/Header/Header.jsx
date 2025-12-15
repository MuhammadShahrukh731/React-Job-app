import './Header.css';

export default function Header() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">
        Find your Dream Job, <span className="albert">Albert!</span>
      </h1>
      <p className="text-gray-500 text-sm">
        Explore the latest job openings and apply today
      </p>
    </div>
  );
}
