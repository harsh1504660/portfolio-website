
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

interface Certificate {
  id: number;
  name: string;
  issuingOrganization: string;
  date: string;
  credentialUrl?: string;
  imageUrl?: string; // Optional image for the certificate
}

const certificatesData: Certificate[] = [
  {
    id: 1,
    name: 'Full-Stack Web Development Bootcamp',
    issuingOrganization: 'CodeAcademy Pro',
    date: 'Issued May 2020',
    credentialUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXIlMjBjZXJ0aWZpY2F0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    name: 'Advanced JavaScript Concepts',
    issuingOrganization: 'Online Learning Platform',
    date: 'Issued Sep 2021',
    credentialUrl: '#',
  },
  {
    id: 3,
    name: 'Certified React Developer',
    issuingOrganization: 'React Institute',
    date: 'Issued Jan 2023',
    credentialUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1607746880431-5a5b509a9f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGluZyUyMGNlcnRpZmljYXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="bg-brand-deep-blue">
      <div className="container mx-auto">
        <h2 className="section-title animate-on-scroll">Certificates & Awards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((cert, index) => (
            <div
              key={cert.id}
              className="bg-brand-light-navy rounded-lg shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-brand-teal/20 transform hover:-translate-y-1 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {cert.imageUrl && (
                <img src={cert.imageUrl} alt={cert.name} className="w-full h-48 object-cover" />
              )}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-3">
                   <Award className="text-brand-teal mr-3 shrink-0" size={24} />
                  <h3 className="text-xl font-semibold text-brand-light-slate">{cert.name}</h3>
                </div>
                <p className="text-brand-slate text-sm mb-1">{cert.issuingOrganization}</p>
                <p className="text-brand-slate text-xs font-mono mb-4">{cert.date}</p>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-sm text-brand-teal hover:text-brand-light-slate inline-flex items-center transition-colors"
                  >
                    View Credential <ExternalLink size={16} className="ml-1.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
