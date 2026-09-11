import { navbars } from "@/components/navbars";
import { heroes } from "@/components/heroes";
import { carousels } from "@/components/carousels";
import { processes } from "@/components/processes";
import { ctas } from "@/components/ctas";
import { newsletters } from "@/components/newsletters";
import { PreviewShell } from "./PreviewShell";

export default async function PreviewPage(props: { params: Promise<{ type: string, id: string }> }) {
  const params = await props.params;
  let Comp: any = null;

  if (params.type === 'navbar') Comp = navbars.find(n => n.id === params.id)?.Component;
  if (params.type === 'hero') Comp = heroes.find(h => h.id === params.id)?.Component;
  if (params.type === 'carousel') Comp = carousels.find(c => c.id === params.id)?.Component;
  if (params.type === 'process') Comp = processes.find(p => p.id === params.id)?.Component;
  if (params.type === 'cta') Comp = ctas.find(c => c.id === params.id)?.Component;
  if (params.type === 'newsletter') Comp = newsletters.find(n => n.id === params.id)?.Component;

  if (!Comp) return <div className="p-10 text-center font-semibold text-xl">Component not found</div>;

  return (
    <PreviewShell type={params.type} id={params.id}>
      <Comp />
    </PreviewShell>
  );
}
