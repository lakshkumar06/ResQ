import { useEffect } from 'react';

const Server = ({ setConfigData }) => {
  useEffect(() => {
    const fetchConfigData = async () => {
      try {
        const response = await fetch('https://api.github.com/gists/50bce786e694e5f632bbd0ecd0e90b96', {
          headers: {
            Authorization: `token config.env.ACCESS_KEY`, // Add your token here
          },
        });

        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.status}`);
        }

        const data = await response.json();
        const _configData = JSON.parse(data.files['Firestations.json'].content);
        setConfigData(_configData);
        console.log(_configData);
      } catch (error) {
        console.error('Error fetching config data:', error);
      }
    };

    fetchConfigData();
  }, [setConfigData]);

  return null; // This component does not need to render anything
};

export default Server;
