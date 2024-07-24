import React from 'react';
import { useInvitation } from '../context/InvitacionContext';
import NameStep from './NameStep';
import PartnerStep from './PartnerStep';
import InvitationStep from './InvitationStep';

const Invitacion = () => {
  const { step } = useInvitation();

  const components = [
    <NameStep />,
    <PartnerStep />,
    <InvitationStep />
  ];

  return components[step];
};

export default Invitacion;
