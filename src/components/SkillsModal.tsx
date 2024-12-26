import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SkillsModal({ isOpen, onClose }: SkillsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] p-0 bg-black/80 border-white/20 backdrop-blur-lg">
        <DialogTitle className="sr-only">Skills & Certifications</DialogTitle>
        <ScrollArea className="h-[80vh] p-6">
          <div className="space-y-8 text-white/90">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">Technical Skills & Certifications</h2>
              
              {/* Tools */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white/90 mb-2">Tools</h3>
                <p className="text-sm">
                  Jira, Asana, Notion, Miro, Figma, Google Analytics, PowerBI, Advanced Excel, 
                  Hubspot, Salesforce, SAP C4C, Prompt Engineering, Python, SQL, Make.com, Zapier
                </p>
              </div>

              {/* Certifications */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white/90 mb-2">Relevant Certifications</h3>
                <ul className="list-disc list-outside ml-4 space-y-2 text-sm">
                  <li>Agile Project Management (Scrum.org) - PSM-1 (enrolled)</li>
                  <li>Google Analytics Certification (Google)</li>
                  <li>Data Analysis Specialization (DataCamp)</li>
                  <li>Design Thinking</li>
                </ul>
              </div>

              {/* Achievements */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white/90 mb-2">Achievements</h3>
                <ul className="list-disc list-outside ml-4 space-y-2 text-sm">
                  <li>Founded and led Consulting Club at HHL</li>
                  <li>Co-founded UniqueAble, an e-commerce platform connecting 50+ artisans with disabilities to German market</li>
                  <li>Beta Gamma Sigma Member - Honor for the top 1% of MBA students</li>
                  <li>Awarded Stewardship recognition at Barclays for product innovation</li>
                </ul>
              </div>

              {/* Languages */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white/90 mb-2">Languages</h3>
                <p className="text-sm">
                  English (Native), German (A2), Hindi (Native), Malayalam (Native)
                </p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}