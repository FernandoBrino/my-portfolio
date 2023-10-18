import { recommendations } from "@/utils/recommendations";
import { Label } from "../Label";
import { TestimonyCard } from "../TestimonyCard";

export const RecommendationSection = () => (
  <section
    className="flex flex-col px-28 py-24 items-center justify-center w-full bg-sub-background"
    id="recommendations"
  >
    <Label title="Recomendações" />
    <p className="text-text mt-4 mb-12">
      Pessoas que presenciaram meu trabalho:
    </p>

    <div className="flex gap-12">
      {recommendations.map((testimony) => (
        <TestimonyCard key={testimony.id} testimony={testimony} />
      ))}
    </div>
  </section>
);
