import Link from "next/link";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl pb-12 pt-10">
      <Card className="space-y-4 p-6 sm:p-8">
        <h1 className="font-display text-4xl text-[var(--brand-strong)]">Page not found</h1>
        <p className="text-sm font-medium text-slate-600">
          The page you are looking for is unavailable. Please continue from the home page.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link href="/">
            <Button size="lg">Go to Home</Button>
          </Link>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Contact STAN BROS
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
