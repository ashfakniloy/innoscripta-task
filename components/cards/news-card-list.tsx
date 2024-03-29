export default function NewsCardList({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-[35px] gap-y-[40px] lg:gap-y-[50px] place-items-center">
      {children}
    </div>
  );
}
