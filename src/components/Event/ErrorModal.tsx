import React from 'react';
import { useTranslation } from 'react-i18next';
import LabelButton from "../Button/LabelButton";

interface Props {
  setShowErrorModal: (show:boolean) => void
}

const ErrorModal: React.FC<Props> = ({setShowErrorModal
}) => {

  const { t } = useTranslation();

  return (
        <div className="px-8 md:px-20 pt-6 pb-8 flex flex-col">
          <div className="text-4xl font-pompiere text-center text-red-500">{t('events.errorTitle')}</div>
          <div className="text-xl font-pompiere">{t('events.errorContent')}</div>
          <div className="flex justify-center mt-4">
            <LabelButton
            label={t('events.ok')}
            onClick={() => setShowErrorModal(false)}
            color="bg-red-500"
          /></div>
        </div>
  );
};

export default ErrorModal;
