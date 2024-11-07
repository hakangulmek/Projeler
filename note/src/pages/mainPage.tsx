import NotePage from "./notePage";
function mainPage() {
  return (
    <div className="h-[728px] w-[1534px] bg-[#efd7b4d4]">
      <div className="flex justify-center">
        <h1 className="text-4xl text-[#4A154B] font-bold text-center pt-8">
          Welcome to Note App
        </h1>
      </div>
      <div className="">
        <p className="text-2xl text-[#4A154B] font-bold text-center pt-8">
          Please login to access your notes
        </p>
      </div>
      <div className="flex justify-between px-80  py-6">
        <div className="h-[524px] w-[460px] rounded-lg bg-[#EFBFA8] p-2">
          <NotePage />
        </div>
        <div className="h-[524px] w-80 rounded-lg bg-[#EFBFA8]">Gülmek</div>
      </div>
    </div>
  );
}

export default mainPage;
