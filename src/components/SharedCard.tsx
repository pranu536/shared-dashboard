type SharedCardProps = {
  name: string;
  initials: string;
  message: string;
  permission: string;
  avatarColor: string;
  files?: string[];
  folder?: string;
};

const SharedCard = ({
  name,
  initials,
  message,
  permission,
  avatarColor,
  files,
  folder,
}: SharedCardProps) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {/* User */}
      <div className="flex items-center gap-6">
        <div
          className={`w-14 h-14 rounded-full ${avatarColor} text-white flex items-center justify-center font-bold text-lg`}
        >
          {initials}
        </div>

        <div>
          <h3 className="font-semibold text-xl text-slate-800">
            {name}
          </h3>

          <p className="text-slate-500 text-sm">
            Same workspace • 2 hours ago
          </p>
        </div>
      </div>

      {/* Message */}
      <div className="border border-slate-200 rounded-xl p-4 mt-5 text-slate-600">
        {message}
      </div>

      {/* Permission */}
      <div className="mt-5">
        <span
          className={`px-4 py-2 rounded-xl text-sm font-medium ${
            permission === "Can Edit"
              ? "bg-green-100 text-green-700"
              : permission === "Can Comment"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          {permission}
        </span>
      </div>

      {/* Files */}
      {files && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          {files.map((file, index) => (
            <div
              key={index}
              className="border rounded-2xl p-4 bg-slate-50 hover:bg-slate-100 cursor-pointer transition"
            >
              {file}
            </div>
          ))}
        </div>
      )}

      {/* Folder */}
      {folder && (
        <div className="mt-5">
          <div className="border rounded-2xl p-5 bg-slate-50 hover:bg-slate-100 transition cursor-pointer">
            📁 {folder}

            <p className="text-sm text-slate-500 mt-2">
              8 Items
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SharedCard;