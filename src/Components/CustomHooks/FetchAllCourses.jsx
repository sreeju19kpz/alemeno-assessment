import { useEffect, useState } from "react";
const useFetchCourses = () => {
  const [loading, setLoading] = useState(true);
  const [faliled, setFailed] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`/api/courses`);
        const rData = await response.json();
        if (!response.ok) {
          setLoading(false);
          setFailed(true);
          return;
        }
        setLoading(false);
        setData(rData.courses);
      } catch (error) {
        console.log(`Fetching UserData faliled with error ${error}`);
      }
    };
    fetchCourses();
  }, []);

  return { loading, faliled, data };
};

export default useFetchCourses;
