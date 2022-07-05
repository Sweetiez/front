import React, { useEffect, useRef } from 'react';
import '../../../assets/css/streaming.css';
import Room from '../Room';
import { useNavigate, useParams } from 'react-router-dom';
import { useUserProfile } from '../../../hooks/user/users';
import CanAttendMasterClassRequest from '../../../hooks/events/requests/CanAttendMasterClassRequest';
import { canAttendMasterclass } from '../../../hooks/events/events';

export const Streaming: React.FC = () => {
  let { id } = useParams();
  const roomId = useRef<string>(id ? id : '');
  const { data: profileData, isLoading: isProfileLoading } =
    useUserProfile(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (id && profileData && !isProfileLoading) {
      const isAuthorised = async () => {
        const request = new CanAttendMasterClassRequest(
          id ? id : '',
          profileData.id ? profileData.id : '',
        );
        try {
          return await canAttendMasterclass(request);
        } catch (e) {
          navigate('/');
          return false;
        }
      };

      isAuthorised()
        .then()
        .catch(() => navigate('/'));
    }
  }, [id, profileData, isProfileLoading, navigate]);

  return (
    <>
      <Room roomID={roomId.current} />
    </>
  );
};
