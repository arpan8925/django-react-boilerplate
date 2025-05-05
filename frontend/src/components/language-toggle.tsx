
import { createContext, useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

type Language = "en" | "bn";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    "app.title": "SISIMPUR",
    "app.description": "An AI-powered tool that converts any PDF or document into customized exam-style questions to aid rapid and effective exam preparation.",
    "app.get_started": "Get Started",
    "app.upload": "Upload Document",
    "app.or_drop": "or drop files here",
    "app.format_support": "Supports PDF, Word, Text files up to 20MB",
    "app.category": "Select Test Category",
    "app.question_type": "Question Type",
    "app.difficulty": "Difficulty Level",
    "app.preview": "Preview",
    "app.memory_boost": "10-Minute Memory Boost",
    "app.start": "Start",
    "app.beginner": "Beginner",
    "app.intermediate": "Intermediate",
    "app.advanced": "Advanced",
    "app.mcq": "Multiple Choice",
    "app.one_word": "One Word",
    "app.short_answer": "Short Answer",
    "app.flashcards": "Flashcards",
    "app.default": "Default",
    "app.custom": "Custom"
  },
  bn: {
    "app.title": "সিসিমপুর",
    "app.description": "একটি AI-চালিত টুল যা যেকোনো PDF বা ডকুমেন্টকে কাস্টমাইজড পরীক্ষা-স্টাইল প্রশ্নে রূপান্তর করে দ্রুত এবং কার্যকর পরীক্ষার প্রস্তুতি নিতে সাহায্য করে।",
    "app.get_started": "শুরু করুন",
    "app.upload": "ডকুমেন্ট আপলোড করুন",
    "app.or_drop": "অথবা ফাইল এখানে ড্রপ করুন",
    "app.format_support": "২০MB পর্যন্ত PDF, Word, Text ফাইল সমর্থন করে",
    "app.category": "টেস্ট ক্যাটাগরি নির্বাচন করুন",
    "app.question_type": "প্রশ্নের ধরন",
    "app.difficulty": "কঠিনতার স্তর",
    "app.preview": "প্রিভিউ",
    "app.memory_boost": "১০-মিনিট মেমোরি বুস্ট",
    "app.start": "শুরু করুন",
    "app.beginner": "বিগিনার",
    "app.intermediate": "ইন্টারমিডিয়েট",
    "app.advanced": "অ্যাডভান্সড",
    "app.mcq": "বহুনির্বাচনী",
    "app.one_word": "এক শব্দ",
    "app.short_answer": "সংক্ষিপ্ত উত্তর",
    "app.flashcards": "ফ্ল্যাশকার্ড",
    "app.default": "ডিফল্ট",
    "app.custom": "কাস্টম"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("en")}>
          English {language === "en" && "✓"}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("bn")}>
          বাংলা {language === "bn" && "✓"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
