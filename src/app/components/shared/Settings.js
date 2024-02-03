
import OptionsSetting from "../ui/OptionsSetting";

const Settings = () => {
  return (
    <div className="flex flex-col justify-start items-end"> 
      <div className="bg-white rounded-2xl px-2 py-10 flex-1 items-center text-center gap-6 ">
        <h2 className="font-bold ">Settings</h2>
        <OptionsSetting/>
      </div>
    </div>
  );
};

export default Settings;
