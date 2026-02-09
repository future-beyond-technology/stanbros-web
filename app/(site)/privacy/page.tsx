import Card from "@/components/ui/Card";
import BilingualText from "@/components/shared/BilingualText";

export const metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <div className="space-y-6 pb-12 pt-4">
      <BilingualText
        as="h1"
        en="Privacy Note"
        ta="தனியுரிமை குறிப்பு"
        className="font-display text-4xl text-[var(--brand-strong)] sm:text-5xl"
      />

      <Card className="space-y-3 p-5 sm:p-6">
        <BilingualText
          as="p"
          en="This website is an enquiry-focused retail site. No user login and no payment processing are implemented."
          ta="இந்த இணையதளம் விசாரணை மையப்படுத்தப்பட்ட விற்பனை தளம். பயனர் உள்நுழைவு மற்றும் ஆன்லைன் கட்டண வசதி இங்கு வழங்கப்படவில்லை."
          className="text-sm font-medium leading-relaxed text-slate-700"
        />
        <BilingualText
          as="p"
          en="WhatsApp enquiry links open directly in WhatsApp with your prefilled message."
          ta="WhatsApp விசாரணை இணைப்புகள், உங்கள் முன் நிரப்பப்பட்ட மெசேஜுடன் நேரடியாக WhatsApp-ஐ திறக்கும்."
          className="text-sm font-medium leading-relaxed text-slate-700"
        />
      </Card>
    </div>
  );
}
