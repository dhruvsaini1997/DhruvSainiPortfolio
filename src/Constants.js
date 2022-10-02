const allProjects = [
    {
        title: 'Data Structures and Algorithms Practise',
        imgUrl: 'dsAndAlgo.jpg',
        githubLink: 'https://github.com/dhruvsaini1997/Data-Structures-And-Algorithms-Practise',
        description: 'Implementation of Data structures such as Array, LinkedLists, Trees, etc.'
    },
    {
        title: 'Data Structures Practise',
        imgUrl: '',
        githubLink: '',
        description: ''
    }
    , {
        title: 'Data Structures Practise',
        imgUrl: '',
        githubLink: '',
        description: ''
    },
    {
        title: 'Data Structures and Algorithms Practise',
        imgUrl: 'dsAndAlgo.jpg',
        githubLink: 'https://github.com/dhruvsaini1997/Data-Structures-And-Algorithms-Practise',
        description: 'Implementation of Data structures such as Array, LinkedLists, Trees, etc.'
    },
    {
        title: 'Data Structures Practise',
        imgUrl: '',
        githubLink: '',
        description: ''
    }


]

const allSkills = [
    {
        title: 'Programming Languages',
        list: ['Python', 'C/C++', 'PowerShell', 'Java', 'C#', 'JavaScript', 'Python'],
        index: 1
    },
    {
        title: 'Web Technologies',
        list: ['HTML5', 'CSS', 'JavaScript ', 'Bootstrap', 'React', 'NodeJs'],
        index:2
    }
    , {
        title: 'Cloud Technologies',
        list: ['Azure', 'Data Bricks', 'Azure'],
        index:3
    },
    {
        title: 'Database Technologies',
        list: ['PostGres', 'SQL', 'MySQL', 'MongoDB']
        , index:4
    },
    {
        title: 'Softwares',
        list: ['Visual studio', 'Visual studio Code', 'Eclipse', 'Anaconda', 'Jenkins', 'Sonarqube','Jira']
        , index:5
    }
    , {
        title: 'MS Office',
        list: ['Word', 'Powerpoint', 'Excel']
    
        , index:6
    }
]

const timelineItems =

[
    {
        title:'Product Engineer',
        organization:'Publicis Sapient',
        location:'Gurugram, India',
        responsibilities: [
            'Designed and developed scalable web services for a B2B digital platform.',
            'Developed a Azure Data Factory pipeline architecture for daily SQL dump processing.',
            'Worked on designing and implementing rating and discounting engines.',
            'Frequently recognized by the development team and product owners for ownership quality, sound business imapct and learning mindset.'
        ],
        date: 'July 2020 - Present',
        category: {
            tag: 'Full-Time',
            color: '#76B947'
        }
    },
    {
        title:'SDE Intern',
        organization:'Publicis Sapient',
        location:'Gurugram, India',
        responsibilities: [
            'Developed a web-based learning platform for incomming campus interns.',
            'Implemented Netflix Architecture and Microservices framework JAVA springboot and ReactJS.',
            'Setting up Oauth 2 with sapient SSO page.',
            'Lead representative for the project and recognized by stakeholder.'
        ],
        date: 'January 2020 - June 2020',
        category: {
            tag: 'Internship',
     
            color: '#94C973'
        }
    },
    {
        title:'Summer Intern',
        organization:'Alight Solutions',
        location:'Gurugram, India',
        responsibilities: [
            'Developed a POC on Single Page Application(SPA).',
            'Implemented SPA using Javascript, HTML5 and CSS.',
            'Learned about Agile Ceremonies, JIRA amd multiple other business tools.'
        ],
        date: 'June 2018 - July 2018',
        category: {
            tag: 'Internship',
            color: '#94C973'
        }
    },
    {
        title:'SDE Intern',
        organization:'Airtel Communications',
        location:'Noida, India',
        responsibilities: [
            'Did POC in networking systems.',
            'Gained knowledge aound the network topology, networking protocols, routing, IP addressing and subnetting.'
          ],
        date: 'December 2017 - January 2018',
        category: {
            tag: 'Internship',
            color: '#94C973'
        }
    }
];

export default { allProjects, allSkills,timelineItems }