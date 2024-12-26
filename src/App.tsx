import { NetworkBackground } from '@/components/NetworkBackground';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { CircleNode } from '@/components/CircleNode';
import { WorkExperienceModal } from '@/components/WorkExperienceModal';
import { EducationModal } from '@/components/EducationModal';
import { SkillsModal } from '@/components/SkillsModal';
import { useState } from 'react';

// Triangle dimensions
const WIDTH = 400;
const HEIGHT = 400;
const CIRCLE_RADIUS = 40;
const PADDING = 80; // Padding from edges

// Calculate circle centers
const TOP_CENTER = { x: WIDTH / 2, y: PADDING };
const BOTTOM_LEFT = { x: PADDING, y: HEIGHT - PADDING };
const BOTTOM_RIGHT = { x: WIDTH - PADDING, y: HEIGHT - PADDING };

function App() {
  const [showWorkExperience, setShowWorkExperience] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  return (
    <div className="fixed inset-0 bg-black">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,purple,transparent_50%)] opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,blue,transparent_50%)] opacity-30" />
      <NetworkBackground />
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center">
        <div className="relative" style={{ width: `${WIDTH}px`, height: `${HEIGHT}px` }}>
          {/* Lines connecting dots */}
          <svg className="absolute inset-0" viewBox={`0 0 ${WIDTH} ${HEIGHT}`}>
            {/* Triangle outline */}
            <line
              x1={TOP_CENTER.x}
              y1={TOP_CENTER.y}
              x2={BOTTOM_LEFT.x}
              y2={BOTTOM_LEFT.y}
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1"
            />
            <line
              x1={TOP_CENTER.x}
              y1={TOP_CENTER.y}
              x2={BOTTOM_RIGHT.x}
              y2={BOTTOM_RIGHT.y}
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1"
            />
            <line
              x1={BOTTOM_LEFT.x}
              y1={BOTTOM_LEFT.y}
              x2={BOTTOM_RIGHT.x}
              y2={BOTTOM_RIGHT.y}
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1"
            />
            {/* Name in the center */}
            <text
              x={WIDTH / 2}
              y={HEIGHT / 2 + 80}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="rgba(255,255,255,0.8)"
              className="text-lg font-bold"
            >
              Ashish Alexander
            </text>
          </svg>
          
          {/* Work Experience Dot */}
          <CircleNode
            icon={<Briefcase className="h-8 w-8 text-white" />}
            label="Work Experience"
            className="absolute"
            onClick={() => setShowWorkExperience(true)}
            style={{
              left: TOP_CENTER.x - CIRCLE_RADIUS,
              top: TOP_CENTER.y - CIRCLE_RADIUS
            }}
          />
          
          {/* Education Dot */}
          <CircleNode
            icon={<GraduationCap className="h-8 w-8 text-white" />}
            label="Education"
            className="absolute"
            onClick={() => setShowEducation(true)}
            style={{
              left: BOTTOM_RIGHT.x - CIRCLE_RADIUS,
              top: BOTTOM_RIGHT.y - CIRCLE_RADIUS
            }}
          />
          
          {/* Skills Dot */}
          <CircleNode
            icon={<Award className="h-8 w-8 text-white" />}
            label="Skills & Certifications"
            className="absolute"
            onClick={() => setShowSkills(true)}
            style={{
              left: BOTTOM_LEFT.x - CIRCLE_RADIUS,
              top: BOTTOM_LEFT.y - CIRCLE_RADIUS
            }}
          />
        </div>
      </div>
      <div className="fixed bottom-4 right-4 text-white/50 text-sm font-light">
        github.com/ash-lx <br/>
        linkedin.com/in/ashish-alexander-553965120/
      </div>
      <div className="fixed top-4 left-4 text-white/50 text-sm font-light">
        Product Manager
      </div>
      <WorkExperienceModal 
        isOpen={showWorkExperience}
        onClose={() => setShowWorkExperience(false)}
      />
      <EducationModal
        isOpen={showEducation}
        onClose={() => setShowEducation(false)}
      />
      <SkillsModal
        isOpen={showSkills}
        onClose={() => setShowSkills(false)}
      />
    </div>
  );
}

export default App;
