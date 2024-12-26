import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface EducationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EducationModal({ isOpen, onClose }: EducationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] p-0 bg-black/80 border-white/20 backdrop-blur-lg">
        <DialogTitle className="sr-only">Education</DialogTitle>
        <ScrollArea className="h-[80vh] p-6">
          <div className="space-y-8 text-white/90">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">Education</h2>
              
              {/* MBA */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white/90 mb-1">
                  MBA (Masters in Business Administration)
                </h3>
                <p className="text-sm text-white/70 mb-2">HHL Leipzig Graduate School of Management, Germany | 2023 – 2024</p>
              </div>

              {/* Masters in Finance */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white/90 mb-1">
                  Masters in Finance
                </h3>
                <p className="text-sm text-white/70 mb-2">Bharatiar University, India | 2016 – 2017</p>
              </div>

              {/* Chartered Accountant */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white/90 mb-1">
                  Chartered Accountant (Indian CPA): Level II
                </h3>
                <p className="text-sm text-white/70 mb-2">Institute of Chartered Accountants of India | 2012 – 2014</p>
              </div>

              {/* Bachelor of Commerce */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white/90 mb-1">
                  Bachelor of Commerce
                </h3>
                <p className="text-sm text-white/70 mb-2">University of Delhi, India | 2012 – 2015</p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}