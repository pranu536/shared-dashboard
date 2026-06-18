import {
  FiHome,
  FiFolder,
  FiUsers,
  FiClock,
  FiShare2,
  FiTrash2,
  FiPlus,
} from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside className="w-72 min-h-screen bg-[#062C38] text-white p-5">
      <div className="w-12 h-12 bg-cyan-500 rounded-xl mb-6"></div>

      <button className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center mb-10">
        <FiPlus size={24} />
      </button>

      <div className="space-y-3">
        <div className="flex items-center gap-3 px-4 py-3">
          <FiHome />
          <span>Home</span>
        </div>

        <div className="flex items-center gap-3 px-4 py-3">
          <FiFolder />
          <span>Files</span>
        </div>

        <div className="flex items-center gap-3 px-4 py-3">
          <FiUsers />
          <span>People</span>
        </div>

        <div className="flex items-center gap-3 px-4 py-3">
          <FiClock />
          <span>Activity</span>
        </div>

        <div className="bg-cyan-900 rounded-xl">
          <div className="flex items-center gap-3 px-4 py-3">
            <FiShare2 />
            <span>Shared</span>
          </div>
        </div>

        <div className="flex items-center gap-3 px-4 py-3">
          <FiTrash2 />
          <span>Trash</span>
        </div>
      </div>
      <div className="mt-10">
  <h3 className="text-slate-400 text-sm mb-4">Teams</h3>

  <div className="space-y-2">
    <p>Product</p>
    <p>Design</p>
    <p>Marketing</p>
    <p>Finance</p>
    <p>Sales</p>
    <p>HR</p>
  </div>
</div>
    </aside>
  );
};

export default Sidebar;