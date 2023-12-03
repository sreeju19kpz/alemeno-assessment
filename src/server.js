import { createServer, Model } from "miragejs";

createServer({
  models: {
    courses: Model,
  },

  seeds(server) {
    server.create("course", {
      id: "1",
      name: "Introduction to React Native",
      instructor: "John Doe",
      description:
        "Learn the basics of React Native and build your first mobile app",
      enrollmentStatus: "Open",
      thumbnail:
        "https://images.pexels.com/photos/5926397/pexels-photo-5926397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", //Link to the course thumbnail
      duration: "8 weeks", // Duration of the course
      schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
      location: "Online",
      prerequisites: ["Basic JavaScript knowledge", " Familiarity with React"],
      syllabus: [
        {
          week: 1,
          topic: ["Introduction to React Native"],
          content: [
            "Overview of React Native",
            "setting up your development environment.",
          ],
        },
        {
          week: 2,
          topic: ["Building Your First App"],
          content: [
            "Creating a simple mobile app using React Native components.",
          ],
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 101,
          name: "Alice Johnson",
          email: "alice@example.com",
        },
        {
          id: 102,
          name: "Bob Smith",
          email: "bob@example.com",
        },
        // Additional enrolled students...
      ],
      reviews: [],
    });
    server.create("course", {
      id: "2",
      name: "Introduction to React Js",
      instructor: "John Doe",
      description: "Learn the basics of React Js and build your first Web app",
      enrollmentStatus: "Open",
      thumbnail:
        "https://images.pexels.com/photos/5926378/pexels-photo-5926378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", //Link to the course thumbnail
      duration: "12 weeks", // Duration of the course
      schedule: "Tuesdays and Thursdays, 6:00 PM - 4:00 PM",
      location: "Online",
      prerequisites: ["Basic JavaScript knowledge", " Familiarity with React"],
      syllabus: [
        {
          week: 1,
          topic: ["Introduction to React JS"],
          content: [
            "Overview of React JS",
            "setting up your development environment.",
          ],
        },
        {
          week: 2,
          topic: ["Building Your First App"],
          content: [
            "Creating a simple mobile app using React Native components.",
          ],
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 101,
          name: "Alice Johnson",
          email: "alice@example.com",
        },
        {
          id: 102,
          name: "Bob Smith",
          email: "bob@example.com",
        },
        // Additional enrolled students...
      ],
      reviews: [],
    });
    server.create("course", {
      id: "3",
      name: "Introduction to Javascript",
      instructor: "michle Doe",
      description:
        "Learn the basics of javascript and build your first Web app",
      enrollmentStatus: "Open",
      thumbnail:
        "https://images.pexels.com/photos/5650043/pexels-photo-5650043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", //Link to the course thumbnail
      duration: "12 weeks", // Duration of the course
      schedule: "Tuesdays and Thursdays, 6:00 PM - 4:00 PM",
      location: "Online",
      prerequisites: ["Basic JavaScript knowledge", " Familiarity with React"],
      syllabus: [
        {
          week: 1,
          topic: ["Introduction to javascript"],
          content: [
            "Overview of javascript",
            "setting up your development environment.",
          ],
        },
        {
          week: 2,
          topic: ["Building Your First App"],
          content: [
            "Creating a simple mobile app using javascript components.",
          ],
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 101,
          name: "Alice Johnson",
          email: "alice@example.com",
        },
        {
          id: 102,
          name: "Bob Smith",
          email: "bob@example.com",
        },
        // Additional enrolled students...
      ],
      reviews: [],
    });
    server.create("course", {
      id: "4",
      name: "Introduction to React Js",
      instructor: "Arun Doe",
      description:
        "Learn the basics of HTML & CSS and build your first Web app",
      enrollmentStatus: "Open",
      thumbnail:
        "https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", //Link to the course thumbnail
      duration: "12 weeks", // Duration of the course
      schedule: "Tuesdays and Thursdays, 6:00 PM - 4:00 PM",
      location: "Online",
      prerequisites: [
        "Basic HTML & CSS knowledge",
        " Familiarity with HTML & CSS",
      ],
      syllabus: [
        {
          week: 1,
          topic: ["Introduction to HTML & CSS"],
          content: [
            "Overview of HTML & CSS",
            "setting up your development environment.",
          ],
        },
        {
          week: 2,
          topic: ["Building Your First App"],
          content: [
            "Creating a simple mobile app using React Native components.",
          ],
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 101,
          name: "Alice Johnson",
          email: "alice@example.com",
        },
        {
          id: 102,
          name: "Bob Smith",
          email: "bob@example.com",
        },
        // Additional enrolled students...
      ],
      reviews: [],
    });
    server.create("course", {
      id: "5",
      name: "Introduction to Node js",
      instructor: "Alan Doe",
      description: "Learn the basics of React Js and build your first Web app",
      enrollmentStatus: "Open",
      thumbnail:
        "https://images.pexels.com/photos/1069798/pexels-photo-1069798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", //Link to the course thumbnail
      duration: "12 weeks", // Duration of the course
      schedule: "Tuesdays and Thursdays, 6:00 PM - 4:00 PM",
      location: "Online",
      prerequisites: [
        "Basic JavaScript knowledge",
        " Familiarity with  Node js",
      ],
      syllabus: [
        {
          week: 1,
          topic: ["Introduction to  Node js"],
          content: [
            "Overview of  Node js",
            "setting up your development environment.",
          ],
        },
        {
          week: 2,
          topic: ["Building Your First App"],
          content: ["Creating a simple app using  Node js components."],
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 101,
          name: "Alice Johnson",
          email: "alice@example.com",
        },
        {
          id: 102,
          name: "Bob Smith",
          email: "bob@example.com",
        },
        // Additional enrolled students...
      ],
      reviews: [],
    });
    server.create("course", {
      id: "6",
      name: "Introduction to Full stack development",
      instructor: "Amar Doe",
      description:
        "Learn the basics of Full stack development and build your first Web app",
      enrollmentStatus: "Open",
      thumbnail:
        "https://images.pexels.com/photos/2233399/pexels-photo-2233399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", //Link to the course thumbnail
      duration: "12 weeks", // Duration of the course
      schedule: "Tuesdays and Thursdays, 6:00 PM - 4:00 PM",
      location: "Online",
      prerequisites: ["Basic JavaScript knowledge", " Familiarity with React"],
      syllabus: [
        {
          week: 1,
          topic: ["Introduction to Full stack development"],
          content: [
            "Overview of Full stack development",
            "setting up your development environment.",
          ],
        },
        {
          week: 2,
          topic: ["Building Your First App"],
          content: ["Creating a simple  Full stack app using components."],
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 101,
          name: "Alice Johnson",
          email: "alice@example.com",
        },
        {
          id: 102,
          name: "Bob Smith",
          email: "bob@example.com",
        },
        // Additional enrolled students...
      ],
      reviews: [],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/courses", (schema, request) => {
      return schema.courses.all();
    });

    this.get("/courses/:id", (schema, request) => {
      const id = request.params.id;
      return schema.courses.find(id);
    });
  },
});
