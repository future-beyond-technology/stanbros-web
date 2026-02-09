import Card from "@/components/ui/Card";

export default function ProductCategoryGrid({
  title,
  items,
}: {
  title: { en: string; ta: string };
  items: Array<{ en: string; ta: string }>;
}) {
  return (
    <section className="space-y-3">
      <div>
        <div className="text-xl font-extrabold tracking-tight text-slate-900">
          {title.en}
        </div>
        <div className="text-sm font-semibold text-slate-500" lang="ta">
          {title.ta}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <Card key={it.en} className="p-4">
            <div className="text-sm font-extrabold text-slate-900">
              {it.en}
            </div>
            <div className="mt-1 text-sm font-semibold text-slate-500" lang="ta">
              {it.ta}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

