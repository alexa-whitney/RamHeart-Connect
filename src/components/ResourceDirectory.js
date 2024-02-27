import React from 'react';
import vsdChdSupportQR from '../images/babies_with_vsd_group_qr.svg';
import heartMomsQR from '../images/heart_moms_qr.svg';
import chdChildrenQR from '../images/children_with_chd_group_qr.svg';

const hospitals = [
  {
    name: 'Texas Children\'s Hospital',
    address: '6651 Main St, Houston, TX 77030',
    url: 'http://www.texaschildrens.org/departments/heart-center',
  },
  {
    name: 'Duke Children\'s Hospital and Health Center',
    address: '2301 Erwin Rd, Durham, NC 27710',
    url: 'https://www.dukehealth.org/hospitals/duke-childrens-hospital',
  },
  {
    name: 'Rady Children\'s Hospital',
    address: '3020 Children\'s Way, San Diego, CA 92123',
    url: 'https://www.rchsd.org/',
  },
  {
    name: 'MUSC Children\'s Heart Network of South Carolina',
    address: '165 Ashley Ave, Charleston, SC 29425',
    url: 'https://musckids.org/our-services/heart-center',
  },
  {
    name: 'Nationwide Children\'s Hospital',
    address: '700 Children\'s Dr, Columbus, OH 43205',
    url: 'https://www.nationwidechildrens.org/',
  },
  {
    name: 'Boston Children\'s Hospital',
    address: '300 Longwood Ave, Boston, MA 02115',
    url: 'http://www.childrenshospital.org/centers-and-services/departments/cardiology',
  },
  {
    name: 'Cincinnati Children\'s and Kentucky Children\'s Hospital Joint Heart Program',
    address: '3333 Burnet Ave, Cincinnati, OH 45229',
    url: 'https://www.cincinnatichildrens.org/service/h/heart-institute',
  },
  {
    name: 'Levine Children\'s Hospital',
    address: '1000 Blythe Blvd, Charlotte, NC 28203',
    url: 'https://atriumhealth.org/medical-services/childrens-services/levine-childrens-hospital',
  },
  {
    name: 'UPMC Children\'s Hospital of Pittsburgh',
    address: '4401 Penn Ave, Pittsburgh, PA 15224',
    url: 'http://www.chp.edu/our-services/heart',
  },
  {
    name: 'Cleveland Clinic Children\'s Hospital',
    address: '8950 Euclid Ave, Cleveland, OH 44106',
    url: 'https://my.clevelandclinic.org/pediatrics',
  },
  {
    name: 'University of Michigan Health C.S. Mott Children\'s Hospital',
    address: '1540 E Hospital Dr, Ann Arbor, MI 48109',
    url: 'https://www.mottchildren.org/medical-services/ped-cardiology',
  },
  {
    name: 'Children\'s Healthcare of Atlanta',
    address: '1405 Clifton Rd NE, Atlanta, GA 30322',
    url: 'https://www.choa.org/heart',
  },
  {
    name: 'Children\'s Hospital Los Angeles',
    address: '4650 Sunset Blvd, Los Angeles, CA 90027',
    url: 'https://www.chla.org/heart-institute',
  },
  {
    name: 'Hassenfeld Children\'s Hospital at NYU Langone',
    address: '160 E 32nd St, New York, NY 10016',
    url: 'https://nyulangone.org/locations/hassenfeld-childrens-hospital',
  },
  {
    name: 'Children\'s Hospital of Alabama at UAB',
    address: '1600 7th Ave S, Birmingham, AL 35233',
    url: 'https://www.childrensal.org/heart',
  },
  {
    name: 'Children\'s Hospital Colorado',
    address: '13123 E 16th Ave, Aurora, CO 80045',
    url: 'https://www.childrenscolorado.org/doctors-and-departments/departments/heart/',
  },
  {
    name: 'Children\'s Hospital of Philadelphia',
    address: '3401 Civic Center Blvd, Philadelphia, PA 19104',
    url: 'http://www.chop.edu/',
  },
  {
    name: 'Riley Hospital for Children at IU Health',
    address: '705 Riley Hospital Dr, Indianapolis, IN 46202',
    url: 'https://www.rileychildrens.org/departments/riley-heart-center',
  },
  {
    name: 'Seattle Children\'s Hospital',
    address: '4800 Sand Point Way NE, Seattle, WA 98105',
    url: 'http://www.seattlechildrens.org/clinics/heart/',
  },
  {
    name: 'NewYork-Presbyterian Children\'s Hospital-Columbia and Cornell',
    address: '3959 Broadway, New York, NY 10032',
    url: 'https://www.nyp.org/morganstanley',
  },
];

// HospitalDirectory component
const HospitalDirectory = () => {
  return (
    <div className="hospital-directory">
      <h2>Notable Pediatric Hospitals</h2>
      <ul>
        {hospitals.map((hospital, index) => (
          <li key={index}>
            <h3>{hospital.name}</h3>
            <p>{hospital.address}</p>
            <a href={hospital.url} target="_blank" rel="noopener noreferrer">
              Visit website
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};


const ResourceDirectory = () => {
	const resources = [
		{
			name: 'Babies and Children with VSD (Ventricular Septal Defect) and CHD Support',
			members: '8.4K members',
			url: 'https://www.facebook.com/groups/268526583311618/',
			qrCode: vsdChdSupportQR,
		},
		{
			name: 'Heart Moms',
			members: '12K members',
			url: 'https://www.facebook.com/groups/251025041590900/',
			qrCode: heartMomsQR,
		},
		{
			name: 'Children with Congenital Heart Defects',
			members: '16.4K members',
			url: 'https://www.facebook.com/groups/ChildrenwithCHD/',
			qrCode: chdChildrenQR,
		},
	];

	return (
		<div>
			<div className="resource-directory">
				<ul>
					{resources.map((resource, index) => (
						<li key={index}>
							<h3>{resource.name}</h3>
							<p>{resource.members}</p>
							<a href={resource.url} target="_blank" rel="noopener noreferrer">
								Visit group
							</a>
							<div>
								<img src={resource.qrCode} alt={`QR code for ${resource.name}`} />
							</div>
						</li>
					))}
				</ul>
			</div>
			<div className="hospital-directory">
				<HospitalDirectory />
			</div>
		</div>
	);
};

export default ResourceDirectory;

