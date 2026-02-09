import Card from "@/components/ui/Card";

const faqs = [
  {
    qEn: "How do I enquire?",
    qTa: "எப்படி தொடர்பு கொள்ளலாம்?",
    aEn: "Tap any WhatsApp button, choose a preset, and send your message.",
    aTa: "WhatsApp பொத்தானை அழுத்தி, தயாரான மெசேஜை தேர்வு செய்து அனுப்புங்கள்.",
  },
  {
    qEn: "Do you have online payments?",
    qTa: "ஆன்லைன் பேமென்ட் உள்ளதா?",
    aEn: "Not in this demo. Enquiries are WhatsApp-based for speed.",
    aTa: "இந்த டெமோவில் இல்லை. விரைவுக்காக WhatsApp மூலம் தான்.",
  },
  {
    qEn: "Can this expand later?",
    qTa: "பின்னர் மேலும் விரிவாக்க முடியுமா?",
    aEn: "Yes—structure supports more units, offers, galleries, and SEO.",
    aTa: "ஆம்—மேலும் கடைகள், ஆஃபர்கள், கேலரி, SEO எல்லாம் சேர்க்க முடியும்.",
  },
];

export default function FAQSection() {
  return (
    <section className="pt-2">
      <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
        FAQ
      </div>
      <div className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900">
        Quick answers
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {faqs.map((f) => (
          <Card key={f.qEn} className="p-5 sm:p-6">
            <div className="text-sm font-extrabold text-slate-900">
              {f.qEn}
            </div>
            <div className="mt-1 text-sm font-semibold text-slate-600" lang="ta">
              {f.qTa}
            </div>
            <div className="mt-3 text-sm font-semibold text-slate-700">
              {f.aEn}
            </div>
            <div className="mt-1 text-sm font-semibold text-slate-500" lang="ta">
              {f.aTa}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

