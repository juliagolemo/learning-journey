import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function NavigationTracker() {
  const location = useLocation();

  useEffect(() => {
    const companyName = localStorage.getItem('company');

    if (!companyName) {
      return;
    }

    const currentPath = location.pathname.startsWith('/')
      ? location.pathname.slice(1)
      : location.pathname;
    const currentTime = new Date().toISOString();

    const data = {
      company_name: companyName,
      web_url: currentPath,
      time: currentTime,
    };

    const sendPostRequest = async () => {
      try {
        await axios.post('https://julia-golemo-learning-journey-api-c5bvgmbrd9a7dcat.northeurope-01.azurewebsites.net/log_traffic', data, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
      } catch (error) {
      }
    };

    sendPostRequest();
  }, [location]);

  return null;
}

export default NavigationTracker;
