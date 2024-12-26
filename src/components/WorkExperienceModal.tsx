import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface WorkExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WorkExperienceModal({ isOpen, onClose }: WorkExperienceModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] p-0 bg-black/80 border-white/20 backdrop-blur-lg">
        <DialogTitle className="sr-only">Work Experience</DialogTitle>
        <ScrollArea className="h-[80vh] p-6">
          <div className="space-y-8 text-white/90">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">Work Experience</h2>
              
              {/* Market Intelligence */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white/90 mb-1">
                  Market Intelligence (Work-Study) - Gerresheimer AG
                </h3>
                <p className="text-sm text-white/70 mb-2">Essen, Germany | Apr 2024 – Present</p>
                <ul className="list-disc list-outside ml-4 space-y-2 text-sm">
                  <li>Led product discovery and market validation through end-to-end intelligence ecosystem, leveraging Make.com and Python for data collection. Integrated insights with PowerBI and SAP C4C, enabling data-driven product roadmap decisions and user targeting</li>
                  <li>Drove product-market fit analysis for Nutraceuticals segment, conducting competitive analysis and user research across delivery formats. Identified €10M market opportunity and developed go-to-market strategy through cross-functional collaboration with Marketing, Sales, and Manufacturing</li>
                  <li>Owned sustainability product initiative by developing CO2 abatement models for hybrid furnace technology, translating customer needs into technical requirements and achieving 40-60% emissions reduction while optimizing €20M+ investment</li>
                </ul>
              </div>

              {/* Porsche Ventures */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white/90 mb-1">
                  Student Consultant - Porsche Ventures
                </h3>
                <p className="text-sm text-white/70 mb-2">Berlin, Germany | Nov 2023 – Mar 2024</p>
                <ul className="list-disc list-outside ml-4 space-y-2 text-sm">
                  <li>Developed Quantum Orientation Tool from ideation to launch through user-centered design approach. Led stakeholder interviews, created user journey maps in Miro, and integrated Python with Crunchbase API to build interactive dashboard, resulting in identification of 15 investment-ready ventures</li>
                </ul>
              </div>

              {/* HW Saver */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white/90 mb-1">
                  Product Manager - HW Saver
                </h3>
                <p className="text-sm text-white/70 mb-2">Delhi, India; Delaware, USA | Jun 2019 – Aug 2023</p>
                <ul className="list-disc list-outside ml-4 space-y-2 text-sm">
                  <li>Owned core ed-tech product strategy and execution, implementing product analytics stack with Hubspot CRM and Google Analytics. Established OKR framework aligning product metrics with user success, driving industry-leading retention through data-driven feature prioritization</li>
                  <li>Built scalable product operations infrastructure using Notion for documentation and Airtable for curriculum management. Implemented Zapier automation for user matching algorithm, enabling 10,000+ teaching hours while maintaining 95% user satisfaction</li>
                  <li>Led development of AI-powered STEM learning platform from conception to beta. Conducted user research with students and educators, ran bi-weekly user testing sprints with engineering team, and achieved 85% satisfaction through iterative product improvements</li>
                  <li>Designed multi-channel content strategy through systematic A/B testing and user behavior analysis. Implemented engagement optimization framework across content variables, resulting in 40% increase in watch time and 25% growth in paid subscriptions</li>
                  <li>Scaled product from ideation to $400K revenue through data-driven prioritization and lean methodology. Established product metrics framework using Hubspot and Google Analytics, maintaining high margins through efficient feature development</li>
                </ul>
              </div>

              {/* Barclays Bank */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white/90 mb-1">
                  Business Intelligence (Corporate & Investment Banking) - Barclays Bank
                </h3>
                <p className="text-sm text-white/70 mb-2">Delhi, India | Mar 2017 – May 2019</p>
                <ul className="list-disc list-outside ml-4 space-y-2 text-sm">
                  <li>Led development of financial automation platform using agile methodology and design thinking. Integrated VBA with external data feeds to create automated workflows, reducing processing time equivalent to 6 FTEs while improving user experience</li>
                  <li>Transformed product insights delivery through strategic narrative development, translating complex user needs into actionable product recommendations for senior leadership</li>
                  <li>Built comprehensive reporting solution integrating Moody's data with Salesforce CRM, processing 1M+ company datasets across 8 regions. Created dynamic dashboards enabling data-driven decision making for Corporate Banking users</li>
                </ul>
              </div>

              {/* Rajesh Anuradha and Associates */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white/90 mb-1">
                  Analyst - Rajesh Anuradha and Associates
                </h3>
                <p className="text-sm text-white/70 mb-2">Delhi, India | Feb 2014 – Jan 2017</p>
                <ul className="list-disc list-outside ml-4 space-y-2 text-sm">
                  <li>Drove user experience improvements through systematic research and pain point analysis. Implemented automated workflows based on user insights, achieving 97% accuracy while enhancing client satisfaction</li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}