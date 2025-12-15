import Logo from '../../assets/images/t-logo.png';
import './JobCard.css';

export default function JobCard() {
  return (
    <>
      <div className="bg-white p-4 rounded-lg hover:shadow-md transition">
        <h6 className='promoted'>Promoted</h6>
        <div className="flex items-center gap-2 mb-2">

          <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center">

            <span className="text-blue-600 font-bold">
              <img
                src={Logo}
                alt="profile"
              /></span>
          </div>
          <div>
            <h3 className="text-sm font-semibold">UI/UX Designer</h3>
            <p className="text-xs text-gray-500">Teams</p>
          </div>
        </div>

        <p className="text-xs text-gray-500 mb-3">
          Seattle, USA (Remote)
        </p>

        <p className="text-xs text-gray-400 mb-4">
          1 day ago · <span className="text-blue-600">22 applicants</span>
        </p>

        <button className="w-full bg-[rgb(1,84,170)] text-white text-sm py-2 rounded-md">
          Apply Now
        </button>
      </div>

    </>
  );
}
