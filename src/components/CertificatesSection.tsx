
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
    name: 'Deep Learning Masterclass with Tensorflow',
    issuingOrganization: 'Udemy',
    date: 'Issued March 2024',
    credentialUrl: 'https://www.udemy.com/certificate/UC-e800a629-9f0d-4c4a-8339-859dbb497768/',
    imageUrl: 'src/public/certi1.jpg',
  },

  {
    id: 2,
    name: 'Python Programming Intermidiate Training',
    issuingOrganization: 'Udemy',
    date: 'Issued Oct 2023',
    credentialUrl: 'https://www.udemy.com/certificate/UC-302ff557-2612-4ee9-98b8-0c1e4f41838e/',
    imageUrl: 'src/public/certi3.webp',
  },
    {
    id: 3,
    name: 'MLOPs Bootcamp : AI Operations For Success',
    issuingOrganization: 'Udemy',
    date: 'Issued June 2024',
    credentialUrl: 'https://www.udemy.com/certificate/UC-45bd925e-86a7-4ebc-91d8-5c8c1b16020c/',
    imageUrl: 'src/public/certi2.jpg',
  },
    {
    id: 4,
    name: 'Machine Learning Deep Learning In Python & R',
    issuingOrganization: 'Udemy',
    date: 'Issued Apr 2021',
    credentialUrl: 'https://www.udemy.com/certificate/UC-7a726d68-bc15-4510-9035-70df04fc1582/',
    imageUrl: 'src/public/certi4.webp',
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
