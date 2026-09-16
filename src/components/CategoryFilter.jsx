import { motion } from "framer-motion";

const CategoryFilter = ({ activeCategory, setActiveCategory }) => {
  const categories = [
    "All",
    "Development",
    "Design",
    "Marketing",
    "Other",
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${
              isActive
                ? "text-white"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 -z-0 rounded-full bg-slate-900"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}

            <span className="relative z-10">
              {category}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;