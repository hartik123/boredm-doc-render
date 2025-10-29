import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, FileText } from 'lucide-react';
import BoreDMDocument from '@/components/BoreDMDocument';

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-2 flex items-center justify-center gap-2">
            <FileText className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">BoreDM PDF Generator</h1>
          </div>
          <p className="text-muted-foreground">Drilling Report Form - React-PDF Implementation</p>
        </div>

        {/* Download Button */}
        <div className="mb-6 flex justify-center">
          <PDFDownloadLink 
            document={<BoreDMDocument />} 
            fileName="Result.pdf"
          >
            {({ loading }) => (
              <Button 
                size="lg" 
                className="gap-2"
                disabled={loading}
              >
                <Download className="h-5 w-5" />
                {loading ? 'Generating PDF...' : 'Download Result.pdf'}
              </Button>
            )}
          </PDFDownloadLink>
        </div>

        {/* PDF Preview */}
        <Card className="overflow-hidden border-2">
          <div className="h-[800px] w-full">
            <PDFViewer width="100%" height="100%" showToolbar={true}>
              <BoreDMDocument />
            </PDFViewer>
          </div>
        </Card>

        {/* Footer Info */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Recreating: Riverside Condominiums - General Location Project (B-17)</p>
          <p className="mt-2">Built with React-PDF • Exact visual match to specification</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
