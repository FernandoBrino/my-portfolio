import { recommendations } from "@/utils/recommendations";
import { Label } from "../../Label";
import { TestimonyCard } from "../../TestimonyCard";

export const RecommendationSection = () => (
  <section
    className="flex flex-col px-4 py-12 items-center justify-center w-full bg-sub-background lg:px-28 lg:py-24"
    id="recommendations"
  >
    <Label title="Recommendations" />
    <p className="text-text mt-4 mb-12">People who witnessed my work:</p>

    <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
      {recommendations.map((testimony) => (
        <TestimonyCard key={testimony.id} testimony={testimony} />
      ))}
    </div>
  </section>
);
