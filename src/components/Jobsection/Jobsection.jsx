import JobCard from "../JobCard/JobCard";
import './jobSection.css';

export default function JobSection({ title }) {
  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg">{title}</h2>
        <a className="job-link">See {title}</a>
        <button className="text-sm text-blue-600 hover:underline">
          See all
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {[...Array(5)].map((_, i) => (
          <JobCard key={i} />
        ))}
      </div>
    </section>
  );
}
