import { NavbarShell,Pill } from "../shared/NavbarShell";
export default function Navbar03(){return <NavbarShell logo={<span className="text-[28px] font-extrabold tracking-tight">EasWorks</span>} links={[{label:"Home"},{label:"Buy"},{label:"About Us"}]} actions={<><Pill filled>Sign in</Pill><Pill>Download</Pill></>} desktopClassName="max-w-[1380px] justify-between" linkClassName="font-bold"/>}
