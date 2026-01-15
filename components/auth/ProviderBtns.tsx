import { ProviderBtn } from "./ProviderBtn";
import { FaGithub, FaGoogle } from "react-icons/fa";

export const ProviderBtns = () => {
  return (
    <div className="flex gap-2 flex-col md:flex-row">
      <ProviderBtn text="Google" provider="google" icon={<FaGoogle />} />
      <ProviderBtn text="GitHub" provider="github" icon={<FaGithub />} />
    </div>
  );
};
