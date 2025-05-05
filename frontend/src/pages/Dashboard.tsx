
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { FileUpload } from "@/components/file-upload";
import { useLanguage } from "@/components/language-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Clock } from "lucide-react";

interface Question {
  id: string;
  question: string;
  options?: string[];
  answer?: string;
}

export default function Dashboard() {
  const { t } = useLanguage();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [questionType, setQuestionType] = useState("mcq");
  const [difficulty, setDifficulty] = useState("intermediate");
  const [category, setCategory] = useState("default");
  const [previewQuestions, setPreviewQuestions] = useState<Question[]>([]);

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    
    // Mock preview questions when a file is uploaded
    const mockQuestions: Question[] = [
      {
        id: "1",
        question: "What is the main purpose of the document you uploaded?",
        options: ["Education", "Entertainment", "Research", "Documentation"],
        answer: "Research",
      },
      {
        id: "2",
        question: "Which concept is most prominently featured in the text?",
        options: ["Machine Learning", "Data Analysis", "Cloud Computing", "Web Development"],
        answer: "Data Analysis",
      },
      {
        id: "3",
        question: "According to the document, what is a key consideration when analyzing data?",
        options: ["Processing speed", "Data quality", "Visual representation", "Storage capacity"],
        answer: "Data quality",
      }
    ];
    
    setPreviewQuestions(mockQuestions);
  };

  const categories = [
    { id: "default", name: t("app.default") },
    { id: "ielts", name: "IELTS" },
    { id: "toefl", name: "TOEFL" },
    { id: "gre", name: "GRE" },
    { id: "gmat", name: "GMAT" },
    { id: "sat", name: "SAT" },
    { id: "bcs", name: "BCS" },
    { id: "custom", name: t("app.custom") }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Upload and Settings */}
          <div className="md:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t("app.upload")}</CardTitle>
                <CardDescription>Upload your document to generate questions</CardDescription>
              </CardHeader>
              <CardContent>
                <FileUpload onFileChange={handleFileUpload} />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>{t("app.category")}</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={category}
                  onValueChange={setCategory}
                  className="grid grid-cols-2 gap-2"
                >
                  {categories.map((cat) => (
                    <div key={cat.id}>
                      <RadioGroupItem
                        value={cat.id}
                        id={`category-${cat.id}`}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={`category-${cat.id}`}
                        className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                      >
                        {cat.name}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>{t("app.question_type")}</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={questionType}
                  onValueChange={setQuestionType}
                  className="grid grid-cols-2 gap-2"
                >
                  <div>
                    <RadioGroupItem
                      value="mcq"
                      id="question-mcq"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="question-mcq"
                      className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                    >
                      {t("app.mcq")}
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem
                      value="one-word"
                      id="question-one-word"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="question-one-word"
                      className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                    >
                      {t("app.one_word")}
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem
                      value="short-answer"
                      id="question-short-answer"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="question-short-answer"
                      className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                    >
                      {t("app.short_answer")}
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem
                      value="flashcards"
                      id="question-flashcards"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="question-flashcards"
                      className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                    >
                      {t("app.flashcards")}
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>{t("app.difficulty")}</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={difficulty}
                  onValueChange={setDifficulty}
                  className="grid grid-cols-3 gap-2"
                >
                  <div>
                    <RadioGroupItem
                      value="beginner"
                      id="difficulty-beginner"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="difficulty-beginner"
                      className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                    >
                      {t("app.beginner")}
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem
                      value="intermediate"
                      id="difficulty-intermediate"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="difficulty-intermediate"
                      className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                    >
                      {t("app.intermediate")}
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem
                      value="advanced"
                      id="difficulty-advanced"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="difficulty-advanced"
                      className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                    >
                      {t("app.advanced")}
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Column - Preview and Memory Boost */}
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t("app.preview")}</CardTitle>
              </CardHeader>
              <CardContent>
                {uploadedFile ? (
                  <div className="space-y-4">
                    {previewQuestions.length > 0 ? (
                      previewQuestions.map((question) => (
                        <div key={question.id} className="border rounded-lg p-4 space-y-3">
                          <p className="font-medium">{question.question}</p>
                          {question.options && (
                            <div className="space-y-2">
                              {question.options.map((option, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${option === question.answer ? 'border-primary bg-primary/10' : 'border-muted'}`}>
                                    {option === question.answer && <CheckCircle2 className="w-4 h-4 text-primary" />}
                                  </div>
                                  <span className={option === question.answer ? 'text-primary' : ''}>{option}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8 text-muted-foreground">
                        <p>Generating preview questions...</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <p>Upload a document to generate preview questions</p>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button disabled={!uploadedFile} className="w-full">
                  Generate Full Question Set
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    {t("app.memory_boost")}
                  </div>
                </CardTitle>
                <CardDescription>
                  Quick flashcard-style quiz for rapid revision
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="prompt" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="prompt">Prompt</TabsTrigger>
                    <TabsTrigger value="answer">Answer</TabsTrigger>
                  </TabsList>
                  <TabsContent value="prompt" className="p-4 min-h-[200px] border rounded-lg mt-4 flex items-center justify-center">
                    <p className="text-lg font-medium text-center">
                      {uploadedFile ? "What is the primary focus of data analysis?" : "Upload a document to generate memory boost cards"}
                    </p>
                  </TabsContent>
                  <TabsContent value="answer" className="p-4 min-h-[200px] border rounded-lg mt-4 flex items-center justify-center">
                    <p className="text-lg font-medium text-center">
                      {uploadedFile ? "Extracting insights and patterns from data to inform decision-making" : "Upload a document to generate memory boost cards"}
                    </p>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter>
                <Button disabled={!uploadedFile} className="w-full">
                  {t("app.start")}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
