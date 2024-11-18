"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

interface YearFilterProps {
  years: string[];
}

export function YearFilter({ years }: YearFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentYear = searchParams.get("year") || "all";

  const handleYearChange = (year: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (year === "all") {
      params.delete("year");
    } else {
      params.set("year", year);
    }
    router.push(`posts/?${params.toString()}`);
  };

  return (
    <div className="flex items-center space-x-2">
      <Select value={currentYear} onValueChange={handleYearChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="연도 선택" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">전체</SelectItem>
          {years.map((year) => (
            <SelectItem key={year} value={year}>
              {year}년
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
