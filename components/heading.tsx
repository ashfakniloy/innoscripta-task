export default function Heading({
  title,
  total,
}: {
  title: string;
  total?: number;
}) {
  return (
    <h1 className="text-lg lg:text-3xl font-bold text-center">
      {`Search results for "${title}"`}{" "}
      {total !== undefined && (
        <span className="ml-2 lg:ml-4 text-xs lg:text-lg font-medium">{`${total} ${
          total > 1 ? "results" : "result"
        } `}</span>
      )}
    </h1>
  );
}
