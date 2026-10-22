import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import image01 from "@/assets/car-project-01.jpeg.asset.json";
import image02 from "@/assets/car-project-02.jpeg.asset.json";
import image03 from "@/assets/car-project-03.jpeg.asset.json";
import image04 from "@/assets/car-project-04.jpeg.asset.json";
import image05 from "@/assets/car-project-05.jpeg.asset.json";
import image06 from "@/assets/car-project-06.jpeg.asset.json";
import image07 from "@/assets/car-project-07.jpeg.asset.json";
import image08 from "@/assets/car-project-08.jpeg.asset.json";
import image09 from "@/assets/car-project-09.jpeg.asset.json";
import image10 from "@/assets/car-project-10.jpeg.asset.json";

const screenshots = [
  { src: image01.url, alt: "Gradio vehicle price prediction result" },
  { src: image02.url, alt: "Gradio AI Car Price Predictor input form" },
  { src: image03.url, alt: "Vehicle sales and fuel category analytics" },
  { src: image04.url, alt: "Exploratory vehicle data visualization" },
  { src: image05.url, alt: "Car sales dataset in Excel" },
  { src: image06.url, alt: "Power BI car sales revenue and manufacturer dashboard" },
  { src: image07.url, alt: "Power BI vehicle category and sales performance dashboard" },
  { src: image08.url, alt: "Power BI revenue trends and fuel type dashboard" },
  { src: image09.url, alt: "Used car business insights report" },
  { src: image10.url, alt: "Distributor, location and manufacturer profitability analysis" },
];
const title = "Used Car Price Prediction & Business Analytics";
const description = "An end-to-end Data Analytics & Machine Learning solution built during the NTI program. Combines data cleaning, EDA, interactive Power BI business dashboards, and a Scikit-learn regression model deployed via an interactive Gradio UI.";
const highlights = [
  "Data Cleaning, Feature Engineering & EDA",
  "Interactive Power BI Dashboards (Revenue Trends, Vehicle Categories, Manufacturer Performance, Fuel Type Analysis)",
  "Machine Learning Price Prediction model deployed with Gradio",
];
const tags = ["Python", "Power BI", "Scikit-learn", "Pandas", "Gradio", "EDA", "Machine Learning"];

export function CarProjectCard() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const current = screenshots[active];
  if (!current) return null;
  const move = (direction: number) => setActive((index) => (index + direction + screenshots.length) % screenshots.length);
  const controls = (
    <div className="flex items-center justify-between gap-2 border-t px-3 py-2">
      <Button variant="ghost" size="icon" onClick={() => move(-1)} aria-label="Previous car screenshot" title="Previous screenshot"><ChevronLeft /></Button>
      <span className="font-mono text-xs text-muted-foreground" aria-live="polite">{active + 1} / {screenshots.length}</span>
      <Button variant="ghost" size="icon" onClick={() => move(1)} aria-label="Next car screenshot" title="Next screenshot"><ChevronRight /></Button>
    </div>
  );
  return (
    <article className="card-hover flex min-w-0 flex-col overflow-hidden rounded-2xl border bg-card" aria-label={title}>
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img src={current.src} alt={current.alt} loading="lazy" className="h-full w-full object-contain" />
        <Button variant="secondary" size="icon" className="absolute bottom-2 right-2" onClick={() => setExpanded(true)} aria-label="Expand car screenshot" title="Expand screenshot"><Maximize2 /></Button>
      </div>
      {controls}
      <div className="grid grid-cols-5 gap-1.5 border-y bg-muted/50 p-2">
        {screenshots.map((image, index) => (
          <Button key={image.src} variant="ghost" onClick={() => setActive(index)} aria-label={`Show car screenshot ${index + 1}`} aria-current={active === index ? "true" : undefined} title={`Screenshot ${index + 1}: ${image.alt}`} className={cn("relative aspect-video h-auto min-w-0 overflow-hidden rounded-md border-2 p-0", active === index ? "border-primary" : "border-transparent opacity-60 hover:opacity-100")}>
            <img src={image.src} alt="" loading="lazy" className="h-full w-full object-contain" />
            <span className="absolute bottom-0 right-0 bg-background/90 px-1 font-mono text-[9px] text-foreground">{index + 1}</span>
          </Button>
        ))}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
        <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
          {highlights.map((highlight) => <li key={highlight} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><span>{highlight}</span></li>)}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary">{tag}</span>)}
        </div>
      </div>
      <Dialog open={expanded} onOpenChange={setExpanded}>
        <DialogContent className="w-[calc(100%-2rem)] max-w-6xl gap-3 rounded-lg p-4" onKeyDown={(event) => { if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); } if (event.key === "ArrowRight") { event.preventDefault(); move(1); } }}>
          <DialogTitle className="pr-8 text-base">{title}</DialogTitle>
          <DialogDescription>{current.alt}</DialogDescription>
          <div className="aspect-video max-h-[65dvh] overflow-hidden bg-muted"><img src={current.src} alt={current.alt} className="h-full w-full object-contain" /></div>
          {controls}
        </DialogContent>
      </Dialog>
    </article>
  );
}