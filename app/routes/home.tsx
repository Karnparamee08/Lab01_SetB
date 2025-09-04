import { Travel } from "./Data/Travel";
import { TravelCard } from "./Components/Travel"; 

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Top 5 Tourist Attractions" },
    { name: "description", content: "Top 5 check-in destinations worldwide" },
  ];
}

export default function Home() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">
        🌍 Top 5 Tourist Attractions in the World
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Travel.map((item) => (
          <TravelCard key={item.Code} item={item} />
        ))}
      </div>
    </div>
  );
}

