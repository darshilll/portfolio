import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="skill">
      <BentoGrid>
        {gridItems.map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            className={item.className}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
          />
        ))}
      </BentoGrid>
    </section>
  );
};
export default Grid;
