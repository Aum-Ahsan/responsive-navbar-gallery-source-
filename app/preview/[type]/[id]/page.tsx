import { navbars } from "@/components/navbars";
import { heroes } from "@/components/heroes";
import { carousels } from "@/components/carousels";
import { processes } from "@/components/processes";

export default async function PreviewPage(props: { params: Promise<{ type: string, id: string }> }) {
  const params = await props.params;
  let Comp: any = null;
  
  if (params.type === 'navbar') Comp = navbars.find(n => n.id === params.id)?.Component;
  if (params.type === 'hero') Comp = heroes.find(h => h.id === params.id)?.Component;
  if (params.type === 'carousel') Comp = carousels.find(c => c.id === params.id)?.Component;
  if (params.type === 'process') Comp = processes.find(p => p.id === params.id)?.Component;

  if (!Comp) return <div className="p-10 text-center font-semibold text-xl">Component not found</div>;

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Comp />
    </div>
  );
}
