export default function PageHeader({ title }: { title: string }) {
  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
    </div>
  );
}
