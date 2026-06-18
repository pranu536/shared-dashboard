import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import SharedCard from "./components/SharedCard";

function App() {
  const sharedFiles = [
    {
      initials: "JM",
      name: "Jordan Mehta",
      message:
        "Putting together the Q3 deck — please review the strategy brief and budget plan by Friday.",
      permission: "Can Edit",
      avatarColor: "bg-teal-500",
      files: [
        "📄 Q3 Strategy Brief.docx",
        "📊 Q3 Budget Plan.xlsx",
        "📕 Competitive Landscape.pdf",
      ],
    },

    {
      initials: "AP",
      name: "Anita Patel",
      message:
        "Design review folder is ready — feedback welcome on any mockups.",
      permission: "Can Comment",
      avatarColor: "bg-purple-600",
      folder: "Design Review",
    },

    {
      initials: "DB",
      name: "Diana Beck",
      message:
        "Signed copies of the partnership docs. Let me know if anything needs another pass before next week.",
      permission: "View & Download",
      avatarColor: "bg-orange-500",
      files: [
        "📕 Partnership Agreement.pdf",
        "📕 SOW.pdf",
      ],
    },
  ];

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-[#F8FAFC] px-12 py-10 overflow-auto">
        <Header />

        <div className="space-y-8 mt-8">
          {sharedFiles.map((file, index) => (
            <SharedCard
              key={index}
              initials={file.initials}
              name={file.name}
              message={file.message}
              permission={file.permission}
              avatarColor={file.avatarColor}
              files={file.files}
              folder={file.folder}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;