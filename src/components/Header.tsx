import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-5xl font-bold text-slate-900">
            Shared with
            <span className="text-teal-700 italic ml-2">
              you
            </span>
          </h1>

          <p className="text-slate-500 mt-2">
            Files and folders shared with you.
          </p>
        </div>

        <div className="relative">
          <FiSearch
            className="absolute left-4 top-4 text-slate-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search shared files..."
            className="pl-11 pr-4 py-3 w-80 border rounded-xl bg-white"
          />
        </div>
      </div>

      <div className="flex gap-3 mt-8">
        <button className="px-5 py-2 rounded-full bg-slate-900 text-white">
          All
        </button>

        <button className="px-5 py-2 rounded-full border bg-white">
          Folders
        </button>

        <button className="px-5 py-2 rounded-full border bg-white">
          Files
        </button>

        <button className="px-5 py-2 rounded-full border bg-white">
          From Outside
        </button>
      </div>
    </div>
  );
};

export default Header;