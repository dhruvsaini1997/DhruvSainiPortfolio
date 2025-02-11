const allProjects = [
    {id:1,
        title: 'Bank Fraud Detection',
        imgUrl: 'bankFraud.jpeg',
        skills: "Machine Learning | Python | Scikit-learn | Pandas | NumPy | Matplotlib | FastAPI | MongoDB", 
        githubLink: 'https://github.com/dhruvsaini1997/Bank-Fraud-Detection-Using-NeurIPS-2022-Dataset-suite',
        description: 'Worked on a machine learning project focused on developing a classification model for bank fraud detection using supervised learning techniques. Collaborating with a team to analyze a publicly available dataset and implement algorithms such as Logistic Regression, Decision Trees, and potentially Neural Networks to accurately detect and classify fraudulent activities in the banking sector. Employing evaluation measures, cross-validation, and feature ablation techniques to fine-tune the models performance and ensure its ability to generalize to unseen data. Expected outcomes include improved fraud detection accuracy and enhanced trust in the banking sector.'
    },
    {id:2,
        title: 'Logitt Application',
        imgUrl: 'logiit.png',
        skills: "ReactJS | Java 17 | Spring Boot | JPA | AWS | PostgreSQL | Hibernate ORM | Back-End Web Dev", 
        githubLink: 'https://github.com/dhruvsaini1997/Logitt',
        description: 'The Logitt application is an ultimate stop solution for analyzing spending patterns, helping users save money and prevent wasteful expenditures by over 20%. It empowers users to effortlessly track and record daily expenses in their preferred currency. With a user-friendly dashboard, it allows tracking expenses in different categories such as Shopping, Groceries, etc. Logitt enables its users to stay on top of their spending and make more informed financial decisions. This project is part of the CS5200 course at Northeastern University.'
    }
    , {id:3,
        title: 'Onskola - School Management System',
        imgUrl: 'onskola.jpeg',
        skills: "Java | Spring Boot | SQL | Mongo | React | Redux | AWS", 
        githubLink: 'https://github.com/Onskola',
        description: 'Onskola is a School Management System developed as a group initiative to facilitate school students in getting school life experiences during the COVID-19 pandemic phase. The project utilized the Java Spring Boot framework to develop user-based profiles for Admin, Teachers, Students, and Parents, along with dashboard APIs. Microsoft Teams integration was implemented with the platform, and Spring Security with OAuth was used for authentication based on user-specific profiles.'
    },
    {id:4,
        title: 'Smart Garbage Monitoring and Controlling System using IoT"',
        imgUrl: 'iot_devices.jpeg',
        skills: "IOT | Matlab | Embeded C | Arduino IDE", 
        githubLink: 'https://github.com/dhruvsaini1997/Documents/blob/main/SmartGarbageMonitoring_Report.pdf',
        description: 'The Smart Garbage Monitoring and Controlling System project was part of my undergraduate final year project at SRM University. It was initiated to support the cleanliness drive of the Swachh Bharat Abhiyan launched by the Government of India. A prototype was developed using an Arduino microcontroller. The system utilizes an ultrasound sensor to monitor the garbage level. Additionally, a metal detector and a moisture sensor were incorporated to segregate metal and wet waste from the garbage. The management of plastics and degradable items is facilitated using image processing techniques.'
    },
     {id:5,
        title: 'Data Structures and Algorithms',
        skills: "Java | Python | C++", 
        imgUrl: 'dsAndAlgo.jpg',
        githubLink: 'https://github.com/dhruvsaini1997/DSA_Practise/tree/main/src',
        description: 'Ongoing Algorithm practices and implementations.'
    }


]

const allSkills = [
    {
        title: 'Programming Languages',
        list: ['Python', 'Java 8+', 'C#', 'JavaScript', 'SQL', 'C++', 'Shell scripting','R'],
        index: 1
    },
    {
        title: 'Web Technologies',
        list: ['HTML5', 'CSS', 'JavaScript ', 'Bootstrap', 'React', 'NodeJs'],
        index:2
    },
    {
        title: 'Softwares',
        list: ['Visual studio', 'Visual studio Code', 'Eclipse', 'Anaconda', 'Jenkins', 'Sonarqube']
        , index:5
    },
    {
        title: 'Libraries',
        list: ['Pytorch', 'Pandas', 'Matplotlib ', 'NumPy'],
        index:6
    }
    , {
        title: 'Cloud Technologies',
        list: ['Microsoft Azure', 'DataBricks', 'Amazon Web Services'],
        index:3
    },
    {
        title: 'Database Technologies',
        list: ['PostGres', 'BigQuery', 'MySQL', 'MongoDB', 'DynamoDB']
        , index:4
    }
    
]

const timelineItems =

[
    {
        title:'Software Data Engineering Co-Op',
        organization:'Addgene',
        location:'Boston, United States',
        responsibilities: [
            'Contributed to the continuous development and delivery of functionalities for the Lab Information Management System (LIMS) and the public website.',
            'Redesigned and refactored ETL data pipelines to integrate plasmid sequences and features data from multiple sources (SnapGene/S3) to Google BigQuery, enhancing data ingestion time by 60%.',
            'Actively optimizing data pipeline performance and automating data cleaning and filtering processes.',
            'Developed and automated complex logic for verifying and correcting plasmid sequences prior to manual intervention.'
        ],
        skills: "Python | Django | ETL | REST APIs | SQL | BigQuery | Docker | Jenkins",      
        date: 'May 2024 - Present',
        category: {
            tag: 'Full-Time',
            color: '#76B947'
        }
    },
    {
        title:'Graduate Teaching Assistant',
        organization:'Khoury College of Computer Science',
        location:'Boston, United States',
        responsibilities: [
            'Served as a Teaching Assistant for CS5200 Database System, guiding and mentoring a class of students through database design principles and PL/SQL.',
            'Offering comprehensive support, resolving queries, and providing valuable academic assessments to enhance their learning experience.',
            'Helping over 60 students with designing and implementing database oriented projects using SQL and No SQL Databases with backend(java/python) and frontend(react) technologies.'
        ],
        skills: "Python | SQL | Database Design | MongoDb",      
        date: 'May 2023 - May 2024',
        category: {
            tag: 'Full-Time',
            color: '#76B947'
        }
    },
    {
        title:'Software Engineer',
        organization:'Publicis Sapient',
        location:'Gurugram, India',
        responsibilities: [
            "Designed and created scalable web services for a B28 digital platform for a prominent North American client in the logistics/shipping industry.",
            "Constructed a standalone POC on Data Factory, resulting in a reduced overall production server load by 22%.",
            "Designed and accomplished complex pricing and discounting engines with high code reusability and complete code coverage.",
            "Took individual ownership of analyzing, developing, and deploying multiple business-impacting features such as a daily quotes reporting system and more.",
            "Recognized by the development team and product owners for leadership and ownership qualities and sound business impact.",
          ],
          skills: "Java 8 | Spring Boot | ORM | Azure DevOps | Data Factory | SQL | Kafka | HTTP | SOAP | REST | MVC | Docker ",      
        date: 'July 2020 - December 2022',
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
            "Built a web-based learning platform for incoming Sapient campus interns to provide an efficient learning management system and systematic assessment through various contests, helping in screening 5000+ campus students.",
            "The gamification project polished all technical as well as leadership skills as a product engineer.",
            "Implemented Netflix Architecture and Micro-services framework leveraging React and Java Spring Boot.",
          ],
          skills: "React | JavaScript | Java | Spring Boot | AWS | Jenkins",      
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
