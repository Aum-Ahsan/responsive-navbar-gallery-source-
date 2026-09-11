// import { ArrowRight,BarChart3,CalendarDays,Check,Code2,Image as ImageIcon,Layers3,Play,ShoppingBag,Smartphone,Sparkles,Target,Users } from "lucide-react";
// type Theme="midnight"|"ocean"|"sun"|"mint"|"ink"|"violet"|"sand"|"rose"|"sky"|"lime";
// type Layout="split"|"center"|"reverse";
// type Visual="dashboard"|"phone"|"orbit"|"stats"|"store"|"calendar"|"code"|"gallery"|"people"|"layers";
// type Props={theme:Theme;layout?:Layout;eyebrow:string;title:string;body:string;primary:string;secondary?:string;visual?:Visual;bullets?:string[]};
// const themes:Record<Theme,string>={midnight:"bg-[#0b1020] text-white",ocean:"bg-[#075985] text-white",sun:"bg-[#ffdc57] text-[#17140c]",mint:"bg-[#d8f3e8] text-[#12352b]",ink:"bg-[#191919] text-white",violet:"bg-[#5b35d5] text-white",sand:"bg-[#efe4d0] text-[#302419]",rose:"bg-[#f9d7df] text-[#491b29]",sky:"bg-[#dceeff] text-[#102c4a]",lime:"bg-[#d9f66f] text-[#15220b]"};
// const visualIcons={dashboard:BarChart3,phone:Smartphone,orbit:Target,stats:Sparkles,store:ShoppingBag,calendar:CalendarDays,code:Code2,gallery:ImageIcon,people:Users,layers:Layers3};
// function VisualBlock({kind="dashboard"}:{kind?:Visual}){const Icon=visualIcons[kind];if(kind==="phone")return <div className="hero-phone"><div className="mb-3 mx-auto h-1.5 w-16 rounded-full bg-current opacity-40"/><div className="hero-phone-screen"/><div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">{[1,2,3].map(i=><span key={i} className="h-8 rounded-lg bg-current opacity-15"/>)}</div></div>;if(kind==="orbit")return <div className="hero-orbit"><Icon size={48}/></div>;if(kind==="stats")return <div className="hero-stat-grid w-full">{[["12k","Members"],["48%","Growth"],["4.9","Rating"]].map(([v,l])=><div key={l} className="hero-stat"><b className="block text-3xl">{v}</b><span className="text-sm opacity-65">{l}</span></div>)}</div>;return <div className="hero-ui border border-current/15 bg-white/10 backdrop-blur"><div className="mb-7 flex items-center justify-between"><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-current/15"><Icon size={20}/></span><div><div className="hero-ui-bar mb-2 w-24"/><div className="hero-ui-bar w-16"/></div></div><span className="size-3 rounded-full bg-current opacity-40"/></div><div className="hero-ui-grid">{[1,2,3,4,5,6].map(i=><div key={i} className="hero-ui-card p-3"><div className="hero-ui-bar mb-3 w-2/3"/><div className="hero-ui-bar w-1/2"/></div>)}</div></div>}
// export default function HeroShell({theme,layout="split",eyebrow,title,body,primary,secondary,visual="dashboard",bullets}:Props){return <section className={`hero-surface w-full overflow-hidden ${themes[theme]}`}><div className={`hero-inner ${layout==="center"?"hero-center":""} ${layout==="reverse"?"hero-reverse":""}`}><div className="hero-copy"><div className="mb-5 inline-flex items-center gap-2 rounded-full border border-current/20 px-3 py-1.5 text-xs font-bold uppercase tracking-[.16em]"><Sparkles size={13}/>{eyebrow}</div><h3 className="hero-title font-semibold">{title}</h3><p className="hero-body mt-6 max-w-2xl opacity-75">{body}</p>{bullets&&<div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">{bullets.map(item=><span key={item} className="flex items-center gap-2 text-sm"><Check size={16}/>{item}</span>)}</div>}<div className={`hero-actions mt-8 ${layout==="center"?"justify-center":""}`}><button className="hero-btn bg-current"><span className={theme==="sun"||theme==="mint"||theme==="sand"||theme==="rose"||theme==="sky"||theme==="lime"?"text-white":"text-black"}>{primary}</span><ArrowRight size={16} className={theme==="sun"||theme==="mint"||theme==="sand"||theme==="rose"||theme==="sky"||theme==="lime"?"text-white":"text-black"}/></button>{secondary&&<button className="hero-btn"><Play size={15}/>{secondary}</button>}</div></div>{layout!=="center"&&<div className="hero-visual"><VisualBlock kind={visual}/></div>}{layout==="center"&&<div className="hero-visual mt-6"><VisualBlock kind={visual}/></div>}</div></section>}



import { ArrowRight, BarChart3, CalendarDays, Check, Code2, Image as ImageIcon, Layers3, Play, ShoppingBag, Smartphone, Sparkles, Target, Users } from "lucide-react";

type Theme = "midnight" | "ocean" | "sun" | "mint" | "ink" | "violet" | "sand" | "rose" | "sky" | "lime";
type Layout = "split" | "center" | "reverse" | "fullscreen" | "fullscreen-left"; 
type Visual = "dashboard" | "phone" | "orbit" | "stats" | "store" | "calendar" | "code" | "gallery" | "people" | "layers";

// INGE bgImage?: string PUDHUSA ADD AAGIRUKKU
type Props = { theme: Theme; layout?: Layout; eyebrow: string; title: string; body: string; primary: string; secondary?: string; visual?: Visual; bullets?: string[]; bgImage?: string; };

const themes: Record<Theme, string> = { midnight: "bg-[#0b1020] text-white", ocean: "bg-[#075985] text-white", sun: "bg-[#ffdc57] text-[#17140c]", mint: "bg-[#d8f3e8] text-[#12352b]", ink: "bg-[#191919] text-white", violet: "bg-[#5b35d5] text-white", sand: "bg-[#efe4d0] text-[#302419]", rose: "bg-[#f9d7df] text-[#491b29]", sky: "bg-[#dceeff] text-[#102c4a]", lime: "bg-[#d9f66f] text-[#15220b]" };

const visualIcons = { dashboard: BarChart3, phone: Smartphone, orbit: Target, stats: Sparkles, store: ShoppingBag, calendar: CalendarDays, code: Code2, gallery: ImageIcon, people: Users, layers: Layers3 };

function VisualBlock({ kind = "dashboard" }: { kind?: Visual }) {
  const Icon = visualIcons[kind];
  if (kind === "phone") return <div className="hero-phone"><div className="mb-3 mx-auto h-1.5 w-16 rounded-full bg-current opacity-40" /><div className="hero-phone-screen" /><div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">{[1, 2, 3].map(i => <span key={i} className="h-8 rounded-lg bg-current opacity-15" />)}</div></div>;
  if (kind === "orbit") return <div className="hero-orbit"><Icon size={48} /></div>;
  if (kind === "stats") return <div className="hero-stat-grid w-full">{[["12k", "Members"], ["48%", "Growth"], ["4.9", "Rating"]].map(([v, l]) => <div key={l} className="hero-stat"><b className="block text-3xl">{v}</b><span className="text-sm opacity-65">{l}</span></div>)}</div>;
  return <div className="hero-ui border border-current/15 bg-white/10 backdrop-blur"><div className="mb-7 flex items-center justify-between"><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-current/15"><Icon size={20} /></span><div><div className="hero-ui-bar mb-2 w-24" /><div className="hero-ui-bar w-16" /></div></div><span className="size-3 rounded-full bg-current opacity-40" /></div><div className="hero-ui-grid">{[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="hero-ui-card p-3"><div className="hero-ui-bar mb-3 w-2/3" /><div className="hero-ui-bar w-1/2" /></div>)}</div></div>
}

export default function HeroShell({ theme, layout = "split", eyebrow, title, body, primary, secondary, visual = "dashboard", bullets, bgImage }: Props) {
  return (
    <section className={`hero-surface relative w-full overflow-hidden ${themes[theme]}`}>
      
      {/* Fullscreen Background */}
      {(layout === "fullscreen" || layout === "fullscreen-left") && (
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
          {/* Ippa dynamic aaga bgImage prop-la irunthu varum */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity" 
            style={{ backgroundImage: bgImage ? `url('${bgImage}')` : "none" }}
          />
          
          {layout === "fullscreen-left" ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0b1020] via-[#0b1020]/80 to-transparent w-full md:w-[75%]" />
              <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#0b1020] to-transparent" />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1020] via-[#0b1020]/50 to-transparent" />
          )}
        </div>
      )}

      {/* Main Content Area */}
      <div className={`hero-inner relative z-10 
        ${layout === "center" || layout === "fullscreen" ? "hero-center text-center flex flex-col items-center justify-center" : ""} 
        ${layout === "fullscreen-left" ? "flex flex-col justify-center min-h-[70vh] items-start" : ""} 
        ${layout === "reverse" ? "hero-reverse" : ""}
      `}>
        
        <div className={`hero-copy ${layout === "fullscreen" || layout === "fullscreen-left" ? "py-24" : ""}`}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-current/20 px-3 py-1.5 text-xs font-bold uppercase tracking-[.16em] backdrop-blur-md">
            <Sparkles size={13} />{eyebrow}
          </div>
          
          {/* <h3 className={`hero-title font-semibold ${layout === "fullscreen-left" ? "text-3xl sm:text-4xl lg:text-5xl md:text-6xl" : ""}`}>{title}</h3> */}
          <h3
  className="
    hero-title
    font-semibold
    !text-[36px]
    md:!text-[44px]
    lg:!text-[56px]

    max-[767px]:landscape:!text-[40px]
    min-[768px]:max-[1279px]:landscape:!text-[48px]
  "
>
  {title}
</h3>
          {/* <p className="hero-body mt-6 max-w-xl opacity-75">{body}</p> */}
          <p className="
  hero-body
  mt-6
  max-w-xl
  opacity-75
  !text-[15px]
  md:!text-[18px]
  lg:!text-[20px]
">
  {body}
</p>
          
          {bullets && (
            <div className={`mt-6 flex flex-wrap gap-x-5 gap-y-2 ${layout === "fullscreen" ? "justify-center" : ""}`}>
              {bullets.map(item => <span key={item} className="flex items-center gap-2 text-sm"><Check size={16} />{item}</span>)}
            </div>
          )}
          
          <div className={`hero-actions mt-8 ${layout === "center" || layout === "fullscreen" ? "justify-center" : ""}`}>
            <button className="hero-btn bg-current">
              <span className={theme === "sun" || theme === "mint" || theme === "sand" || theme === "rose" || theme === "sky" || theme === "lime" ? "text-white" : "text-black"}>
                {primary}
              </span>
              <ArrowRight size={16} className={theme === "sun" || theme === "mint" || theme === "sand" || theme === "rose" || theme === "sky" || theme === "lime" ? "text-white" : "text-black"} />
            </button>
            {secondary && <button className="hero-btn backdrop-blur-md bg-white/10"><Play size={15} />{secondary}</button>}
          </div>
        </div>

        {/* Carousel Slider Dots */}
        {layout === "fullscreen-left" && (
          <div className="absolute bottom-6 left-0 flex gap-2">
            <span className="h-1.5 w-8 rounded-full bg-white"></span>
            <span className="h-1.5 w-2 rounded-full bg-white/30 cursor-pointer hover:bg-white/50 transition-colors"></span>
            <span className="h-1.5 w-2 rounded-full bg-white/30 cursor-pointer hover:bg-white/50 transition-colors"></span>
            <span className="h-1.5 w-2 rounded-full bg-white/30 cursor-pointer hover:bg-white/50 transition-colors"></span>
          </div>
        )}

        {(layout === "split" || layout === "reverse") && <div className="hero-visual"><VisualBlock kind={visual} /></div>}
        {layout === "center" && <div className="hero-visual mt-6"><VisualBlock kind={visual} /></div>}
        
      </div>
    </section>
  )
}