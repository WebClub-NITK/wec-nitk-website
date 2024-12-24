import { Badge } from "@/components/ui/badge";
import {
    Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Card } from "./Card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";



export function SIGCard({
  title,
  href,
  description,
  image,
  className,
}) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300 ease-out h-full border border-[#242424] bg-[#1c1c1c] text-white"
      }
    >
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer", className)}
      >
        {image && (
          <Image
            src={`/${image}`}
            alt={title}
            width={1000}
            height={500}
            className="h-40 w-full overflow-hidden object-cover object-center"
          />
        )}
      </Link>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert text-gray-500">
            {description}
          </Markdown>
        </div>
      </CardHeader>
    </Card>
  );
}