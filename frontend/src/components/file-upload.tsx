
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useLanguage } from "./language-toggle";
import { Upload } from "lucide-react";
import { toast } from "sonner";

interface FileUploadProps {
  onFileChange?: (file: File) => void;
  className?: string;
}

export function FileUpload({ onFileChange, className }: FileUploadProps) {
  const { t } = useLanguage();
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndProcessFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      validateAndProcessFile(e.target.files[0]);
    }
  };

  const validateAndProcessFile = (file: File) => {
    // Check if file is PDF, Word or Text
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain'
    ];
    
    if (!allowedTypes.includes(file.type)) {
      toast.error("Invalid file type. Please upload PDF, Word or Text file.");
      return;
    }
    
    // Check file size (max 20MB)
    const maxSize = 20 * 1024 * 1024; // 20MB in bytes
    if (file.size > maxSize) {
      toast.error("File is too large. Maximum size is 20MB.");
      return;
    }
    
    setFileName(file.name);
    onFileChange && onFileChange(file);
    toast.success("File uploaded successfully!");
  };

  return (
    <div
      className={cn(
        "border-2 border-dashed rounded-lg p-6 transition-colors",
        isDragging ? "border-primary bg-primary/5" : "border-border bg-muted/40",
        className
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="rounded-full bg-primary/10 p-3">
          <Upload className="h-6 w-6 text-primary" />
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">{t("app.upload")}</h3>
          <p className="text-sm text-muted-foreground">{t("app.or_drop")}</p>
          <p className="text-xs text-muted-foreground">{t("app.format_support")}</p>
        </div>
        {fileName ? (
          <div className="max-w-full overflow-hidden">
            <p className="text-sm font-medium truncate">{fileName}</p>
            <Button
              variant="ghost"
              size="sm"
              className="mt-2"
              onClick={() => {
                setFileName(null);
                if (fileInputRef.current) fileInputRef.current.value = '';
              }}
            >
              Remove
            </Button>
          </div>
        ) : (
          <Button
            size="sm"
            onClick={() => fileInputRef.current?.click()}
          >
            Select File
          </Button>
        )}
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={handleFileInputChange}
          accept=".pdf,.doc,.docx,.txt"
        />
      </div>
    </div>
  );
}
