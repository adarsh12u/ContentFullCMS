import { createClient } from "contentful";

const client = createClient({
  space: "ungtsporrbii",
  environment: "master",
  accessToken:'3b89o4yk59ST14vdcH-oznSUmUSz1Z9xk8vu4hN8eHE' ,
});
import React, { useEffect, useState } from "react";

 const Fetchproject = () => {
  console.log(import.meta.env.VITE_KEY)
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });
      const projects = response.items.map((item) => {
        const { name, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { name, url, id, img };
      });
      setProjects(projects);
      setLoading(false);
      console.log("proejcts =>",projects)
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};

export default Fetchproject;
