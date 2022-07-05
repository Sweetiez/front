import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface AccessControllerProps {
  redirect: string;
  isAuthorised: boolean;
}

const AccessController: React.FC<AccessControllerProps> = ({
  redirect,
  isAuthorised,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthorised) {
      navigate(redirect);
    }
  }, [redirect, isAuthorised, navigate]);

  return <></>;
};

export default AccessController;
