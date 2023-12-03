import { useEffect, useState } from "react";
const useFetchSingleCourse = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [faliled, setFailed] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`/api/courses/${id}`);
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
    fetchCourse();
  }, [id]);
  return { loading, faliled, data };
};

export default useFetchSingleCourse;
