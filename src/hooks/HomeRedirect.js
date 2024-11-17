import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function HomeRedirect() {
  const { company } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('company', company);
    navigate('/');
  }, [company, navigate]);

  return null;
}

export default HomeRedirect;
