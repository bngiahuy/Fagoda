import React from 'react';
import './Profile.css';

export default function listPost({userData}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        setPosts(await getNewfeed());
      };
  
      fetchData();
    }, [])
  
    return (
    s
  )
}
