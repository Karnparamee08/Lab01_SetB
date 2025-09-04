import Check from "./Check";

type TravelItem = {
  Code: string;
  Name: string;
  Cover: string;
  Description: string;
  Location: string;
  Source: string;
  Rating: number;
};

export function TravelCard({ item }: { item: TravelItem }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
      <img
        src={item.Cover}
        alt={item.Name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-lg font-bold mt-2">{item.Name}</h2>
      <p className="text-gray-600 text-sm">{item.Description}</p>
      <p className="mt-2 text-sm">📍 {item.Location}</p>
      <p className="text-yellow-500">⭐ {item.Rating}/5</p>
      <Check isTop={item.Top5} />
      <a
        href={item.Source}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 underline text-sm"
      >
        More Info
      </a>
    </div>
  );
}
