import codecollab from "../images/codecollab.jpg";
import taskmanager from "../images/task-manager.jpg"
import restraunt from "../images/restraunt.jpg"
import time from "../images/time.jpg"
import weather from "../images/weather.jpg"

const projects = [

    {
        name: "Code-collab",
        icon: "code",
        pic: codecollab,
        link: "https://codecollab-3a539.web.app/",
        description: `A platform which enables multiple users to write code at the same time.
         It can also be used in coding interviews where a interviewer can watch the live code of the applicant.`,
        tech: [
            {
                tech_name: "React",
            },
            {
                tech_name: "Google-Auth",
            },
            {
                tech_name: "Firebase",
            },
            {
                tech_name: "Real-time Db"
            }
        ]
    },
    {
        name: "Everyday AQi and Weather",
        icon: "cloud-sun-rain",
        pic: weather,
        link: "https://naman-weather-application.herokuapp.com/",
        description: "It is an open API based application which provides the current climatic conditions and Air quality index of any given location all over the world.",
        tech: [
            {
                tech_name: "Bootstrap",
            },
            {
                tech_name: "Nodejs",
            },
            {
                tech_name: "Express.js",
            },
            {
                tech_name: "axios"
            }
        ]
    },
    {
        name: "Task-Manager",
        icon: "calendar-check",
        pic: taskmanager,
        link: "#",
        description: "It is an application which enables each user to maintain their own records of task using login authentication. A user can easily create, update and delete task his/her tasks",
        tech: [
            {
                tech_name: "Nodejs",
            },
            {
                tech_name: "MongoDb-Atlas",
            },
            {
                tech_name: "Mongoose",
            },
            {
                tech_name: "express.js",
            }
        ]
    },
    {
        name: "ZEIT",
        icon: "clock",
        pic: time,
        link: "https://namanjain29.github.io/German_time.github.io/",
        description: "It is an application for German language learners which converts the time into german language Official and Inofficial time format.",
        tech: [
            {
                tech_name: "Javascript",
            },
            {
                tech_name: "Bootstrap",
            },
            {
                tech_name: "Jquery",
            },
            {
                tech_name: "HTML",
            },
            {
                tech_name: "CSS",
            }
        ]
    },
    {
        name: "Restraunt",
        icon: "utensils",
        pic: restraunt,
        link: "#",
        description: "A website which enables user to place order, to book table in advance and also to provide feedback of each dish. ",
        tech: [
            {
                tech_name: "Nodejs",
            },
            {
                tech_name: "MongoDb",
            },
            {
                tech_name: "React",
            },
            {
                tech_name: "Express.js",
            },
            {
                tech_name: "Mongoose",
            }
        ]
    }
]


export default projects