const course = {
    courseName: "javascript",
    price: 2700,
    courseContent: "good",
    review: "***",
  };
  
  console.log(course.review);
  
  const { price } = course;
  console.log(price);
  
  const { review: rate } = course;
  console.log(rate);
  
  const course1 = {
    courseName: "javascript",
    price1: 2700,
    courseContent: "good",
    review: "***",
  };
  
  const { courseName, price1, courseContent } = course1;
  
  console.log(courseName);
  console.log(courseContent);
  
  const course2 = {
    courseName: "javascript",
    price: 2700,
    courseContent: "good",
    review: "***",
  };
  