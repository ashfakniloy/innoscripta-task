import { useEffect, useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InputProps } from "../ui/input";

type SelectFieldProps = {
  name: string;
  options: {
    label: string;
    value: string;
  }[];
  label?: string;
} & InputProps;

export function SelectField({
  name,
  placeholder,
  options,
  ...props
}: SelectFieldProps) {
  const {
    formState: { errors },
    watch,
  } = useFormContext();

  const fieldValue = watch(name);

  const [value, setValue] = useState(fieldValue);

  useEffect(() => {
    setValue(fieldValue);
  }, [fieldValue]);

  return (
    <div className="relative w-full">
      {props.label && (
        <label
          htmlFor={name}
          className={`inline-block text-sm font-medium ${
            errors[name] && "text-red-500"
          }`}
        >
          {props.label}
        </label>
      )}

      <Controller
        name={name}
        {...props}
        render={({ field }) => (
          <Select value={value} onValueChange={field.onChange}>
            <SelectTrigger className="lg:w-[180px] h-12 text-lg">
              {value ? (
                <SelectValue placeholder={value} />
              ) : (
                <p className="text-muted-foreground">{placeholder}</p>
              )}
            </SelectTrigger>

            <SelectContent className="bg-white">
              {options.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className="px-8"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />

      {errors[name] && (
        <p className="absolute mt-1 text-xs text-red-600">
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  );
}
