import Card from "@/components/ui/Card";
import BilingualText from "@/components/shared/BilingualText";
import { getBrand } from "@/lib/data/loaders";

export default function LocationSection() {
  const brand = getBrand();

  return (
    <section className="pt-2">
      <Card className="p-5 sm:p-6">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
              Location
            </div>
            <div className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900">
              Visit our shop units
            </div>
            <div className="mt-1 text-sm font-semibold text-slate-500" lang="ta">
              எங்கள் கடை பிரிவுகளை நேரில் பார்க்க
            </div>

            <div className="mt-4 space-y-2">
              <BilingualText
                en={`Service area: ${brand.city.en}`}
                ta={`சேவை பகுதி: ${brand.city.ta}`}
                enClassName="text-sm font-semibold text-slate-700"
                taClassName="text-sm font-semibold text-slate-500"
              />
              <div className="text-xs font-semibold text-slate-500">
                Add exact addresses per unit in Phase-2.
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[var(--radius-xl)] border border-slate-200 bg-slate-50 p-4">
              <div className="text-sm font-extrabold text-slate-900">
                Map placeholder (demo)
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-600" lang="ta">
                மேப் (டெமோ)
              </div>
              <div className="mt-4 h-40 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-100 to-transparent" />
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
