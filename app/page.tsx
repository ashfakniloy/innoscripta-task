import { Input } from "@/components/ui/input";
import { SelectField } from "@/components/select-field";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/date-picker";

export default function HomePage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className=" border p-10 rounded-lg flex items-center gap-10 shadow-md">
        <Input
          placeholder="Search articles"
          className="h-14 w-[300px] text-xl"
        />
        <SelectField
          placeholder="Select source"
          options={["NewsAPI", "The Guardian", "New York Times"]}
        />
        <DatePicker />
        <Button className="h-14 w-[130px] text-lg bg-cyan-800">Search</Button>
      </div>
    </div>
  );
}
