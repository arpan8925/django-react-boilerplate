
import { useLanguage } from "@/components/language-toggle";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, File, Upload } from "lucide-react";

export default function Landing() {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isLanding={true} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 container">
          <div className="mx-auto flex flex-col items-center text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter animate-fade-in">
                <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                  {t("app.title")}
                </span>
              </h1>
              <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl/relaxed animate-slide-up">
                {t("app.description")}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="animate-slide-up [animation-delay:300ms]">
                <Link to="/dashboard">
                  {t("app.get_started")} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-12 md:py-24 bg-muted/50">
          <div className="container">
            <div className="mx-auto max-w-6xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                How It Works
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="rounded-full bg-primary/10 p-3 w-14 h-14 mx-auto flex items-center justify-center mb-4">
                  <Upload className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Upload Documents</h3>
                <p className="text-muted-foreground">
                  Upload your PDF, Word, or Text files to extract key content for study materials.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="rounded-full bg-primary/10 p-3 w-14 h-14 mx-auto flex items-center justify-center mb-4">
                  <File className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">AI Processing</h3>
                <p className="text-muted-foreground">
                  Our AI analyzes your documents and generates customized exam-style questions.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="rounded-full bg-primary/10 p-3 w-14 h-14 mx-auto flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Practice & Learn</h3>
                <p className="text-muted-foreground">
                  Practice with personalized questions and improve your exam preparedness.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SISIMPUR. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
