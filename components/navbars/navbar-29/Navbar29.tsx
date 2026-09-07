import { NavbarShell, Pill } from "../shared/NavbarShell";

export default function Navbar29() {
  return (
    <NavbarShell 
      centerLogo={true}
      logo={
        <div className="flex flex-col items-center leading-none">
          <span className="text-xs tracking-[0.4em] text-gray-400 uppercase font-medium">Studio</span>
          <span className="text-2xl font-serif font-bold text-white mt-1">VOGUE</span>
        </div>
      } 
      
      leftLinks={[
        { label: "Gallery" },
        { label: "Portfolio" }
      ]} 
      
      links={[
        { label: "Journal" },
        { label: "About" }
      ]} 
      
      actions={
        <Pill className="border-white/20 text-[12px] text-white uppercase tracking-widest hover:bg-white hover:text-black transition-all">
          Contact
        </Pill>
      } 
      
      /* KEY CHANGE: Inga 'text-white' add pannirukken. Ithu thaan mobile menu-va white-aa maathum */
      className="bg-[#0f0f0f] border-b border-white/5 text-white" 
      
      desktopClassName="max-w-[1200px] mx-auto justify-between min-h-[90px]" 
      linkClassName="text-[13px] text-white uppercase tracking-[0.2em] font-medium hover:text-gray-400 transition-colors"
      
      /* Mobile-kaga extra check */
      mobileClassName="text-white"
    />
  );
}