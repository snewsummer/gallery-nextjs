import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/dbf9f471-fd12-46c5-80b4-aaa81b7c4f05-u21jad.webp",
  "https://utfs.io/f/79e6c6a2-397b-4124-a15d-c49fecf937ff-vuy015.webp",
  "https://utfs.io/f/299dcaa9-4e1d-4e88-8912-63f2a0482299-j99ia1.jpg",
  "https://utfs.io/f/bb371ca9-e785-497b-b354-6b3636870851-bt5zuj.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
