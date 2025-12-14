import './Profile.css';

export default function Profile() {
  return (
    <aside className="w-72 bg-white border-r p-6 space-y-6 profile">
      <div className="text-center">
        <img
          src="https://i.pravatar.cc/100"
          alt="profile"
          className="w-20 h-20 rounded-full mx-auto"
        />
        <h2 className="mt-3 font-semibold text-lg">Albert Flores</h2>
        <p className="text-sm text-gray-500">
          Senior Product Designer
        </p>
        <p className="text-xs text-gray-400">Clinton, Maryland</p>
      </div>
      <div className="profile-rating">
        {[
          ["Profile Visitors", 140],
          ["Resume Viewers", 20],
          ["My Jobs", 88],
        ].map(([label, value], index, arr) => (
          <div key={label}>
            <div className="flex justify-between text-sm py-2">
              <span className="text-gray-500">{label}</span>
              <span className="font-semibold text-blue-600">{value}</span>
            </div>
            {index < arr.length - 1 && (
              <hr className="border-gray-200" />
            )}
          </div>
        ))}
      </div>
      <div>
        <hr className="border-gray-200" />
        <h3 className="font-medium text-sm mb-2">My Calendar</h3>
        <p className="text-xs text-gray-500">Upcoming Interviews</p>
      </div>
    </aside>
  );
}

