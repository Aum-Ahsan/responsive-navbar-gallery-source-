import { NavbarShell, Pill } from "../shared/NavbarShell";
import { ChevronDown, Zap, Shield, Smartphone, Globe } from "lucide-react";

export default function Navbar31() {
  return (
    <div className="relative group/nav">
      <NavbarShell 
        logo={<div className="text-2xl font-black text-blue-600 italic">TECH-X</div>} 
        links={[
          { label: "Platform", caret: true },
          { label: "Solutions", caret: true },
          { label: "Pricing" },
          { label: "Docs" }
        ]} 
        actions={
          <>
            <Pill className="border-0 text-gray-600 font-medium">Log in</Pill>
            <Pill filled className="bg-blue-600 text-gray-600 border-0 rounded-lg">Start Free</Pill>
          </>
        } 
        className="bg-white border-b border-gray-100 shadow-sm" 
        desktopClassName="max-w-[1200px] mx-auto justify-between min-h-[80px]" 
        linkClassName="text-[16px] font-semibold text-gray-700 hover:text-blue-600 flex items-center gap-1"
      />

      {/* MEGA MENU PANEL - Ithu Platform link hover panna theriyum */}
      {/* Real logic-la oru state vachippom, ippo design-kaga visibility check pannalam */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[80px] w-full max-w-[1000px] bg-white border border-gray-100 rounded-2xl shadow-2xl p-8 grid grid-cols-2 gap-8 opacity-0 group-hover/nav:opacity-100 transition-all pointer-events-none group-hover/nav:pointer-events-auto">
        
        {/* Left Column */}
        <div className="space-y-6">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Core Features</h3>
          <div className="grid gap-6">
            <div className="flex gap-4 items-start group/item cursor-pointer">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors"><Zap size={24}/></div>
              <div>
                <h4 className="font-bold text-gray-900">Lightning Fast</h4>
                <p className="text-sm text-gray-500 italic">Optimized for high-speed performance.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start group/item cursor-pointer">
              <div className="p-3 bg-purple-50 text-purple-600 rounded-xl group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors"><Shield size={24}/></div>
              <div>
                <h4 className="font-bold text-gray-900">Enterprise Security</h4>
                <p className="text-sm text-gray-500 italic">Bank-grade encryption for your data.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-gray-50 rounded-2xl p-6">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">New Updates</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-700 font-medium hover:text-blue-600 cursor-pointer"><Smartphone size={18}/> Mobile App v2.0</div>
            <div className="flex items-center gap-3 text-gray-700 font-medium hover:text-blue-600 cursor-pointer"><Globe size={18}/> Global CDN Support</div>
            <div className="mt-4 p-4 bg-blue-600 rounded-xl text-white text-center font-bold cursor-pointer">View All Features</div>
          </div>
        </div>
      </div>
    </div>
  );
}