type experience =  {
    year: string,
    title: string,
    description: string,
}

const experienceData: Array<experience> = [
  {
    year: '2022',
    title: 'Associate Engineering Manager',
    description: 'Successfully led 3 platform migration and revamp initiatives, overseeing the seamless transition of critical systems to new architectures. ' + 
      'Led a team of backend and frontend engineers through the entire migration process, providing guidance and support to ensure adherence to timelines and quality standards. ' +
      'Built a booking system that is highly configurable. It supports more than 5 different products within Ruangguru which each of them has a different booking flow. ' +
      'Participated in sessions to payroll integration that eventually automate more than 90% of manual work.',
  },
  {
    year: '2020',
    title: 'Senior Software Engineer at Ruangguru',
    description: 'Led two separate teams totaling 12 members, serving as the primary point of contact for technical guidance, project planning, and execution. ' + 
      'Collaborated closely with product managers, designers, and stakeholders to translate business requirements into technical specifications and actionable plans.' + 
      'Played a key role in scaling products to support millions of users, optimizing performance and reliability to meet growing demand and exceed user expectations.',
  },
  {
    year: '2018',
    title: 'Backend Engineer at Ruangguru',
    description: 'Developed innovative features, including gamification elements and a robust forum system, leveraging technologies such as Golang, MySQL, CockroachDB, and Redis. ' + 
      'Actively participated in the migration of critical services from PHP to Golang.',
  },
  {
    year: '2017',
    title: 'Backend Developer at MamiKos',
    description: 'Building Indonesia #1 Kost directory. I took backend role here and develop ' +
      'various new exciting features that will help user find a kost easier. The project that I handled ' +
      'was highly integrated with Google Map API.'
  },
  {
    year: '2015',
    title: 'Web Developer at Closely Coded',
    description: 'In order to back to the track as developer, I took a new role as ' +
      'web developer. Here I created various online stores and company profiles mostly ' +
      'using Drupal and few WordPress. I did both backend and frontend development.'
  },
  {
    year: '2014',
    title: 'Software Quality Assurance at Formulatrix Indonesia',
    description: 'Hunt down obvious and non obvious bugs. Execute and maintain test cases. ' +
      'Make sure all new features and bugfix will not break previous working functions, also make sure ' +
      'that they are match with the requirements.'
  },
  {
    year: '2012',
    title: 'Took Bachelor Degree on Information Technology',
    description: 'Graduated on 2014 from Satya Wacana Christian University'
  },
  {
    year: '2009',
    title: 'Junior Web Developer at Wacana Inti Informatika',
    description: 'While still studying at university, I took a part-time job as Web Developer. ' + 
      'This is my first ever job as developer. Later in mid 2010, I was converted into a ' + 
      'full-time employee.'
  },
  {
    year: '2007',
    title: 'Took Diploma Degree on Information Technology',
    description: 'Graduated on 2010 from Satya Wacana Christian University'
  }
];

export default experienceData;