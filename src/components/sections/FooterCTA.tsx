
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

const FooterCTA: React.FC = () => {
  const handleEarlyAccess = () => {
    // Open Tally form in new tab for early access requests
    window.open('https://tally.so/r/mD9DRq', '_blank');
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-slate-950/95 via-purple-950/70 to-slate-950/95 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Request Early Access
        </h2>
        <p className="text-xl text-gray-100 mb-8">
          We share a technical brief under NDA with investors, researchers, and engineers 
          working on secure neural-interface systems. Submit a request to review our work 
          or start a conversation.
        </p>
        <Button 
          onClick={handleEarlyAccess}
          size="lg" 
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-12 py-4 text-lg font-semibold"
        >
          Submit Access Request
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default FooterCTA;
