import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../Authentication/Title';
import TextArea from './TextArea';
import { reportEvaluation } from '../../hooks/evaluations/evaluations';
import ReportEvaluationRequest from '../../hooks/evaluations/requests/reportEvaluationRequest';
import { useProfile } from '../../hooks/user/users';
import Label from '../utils/Label';

interface ReportFormProps {
  evaluationId: string;
  setModalState: () => void;
}

const ReportForm: React.FC<ReportFormProps> = ({
  evaluationId,
  setModalState,
}) => {
  const { t } = useTranslation();
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const [select, setSelect] = useState();
  const profile = useProfile();
  const options = [
    {
      label: t('comment.report.reason.choose'),
      value: 'notSelected',
    },
    {
      label: t('comment.report.reason.uncivil'),
      value: 'uncivil',
    },
    {
      label: t('comment.report.reason.discrimination'),
      value: 'discrimination',
    },
    {
      label: t('comment.report.reason.localBusiness'),
      value: 'localBusiness',
    },
    {
      label: t('comment.report.reason.illegalContent'),
      value: 'illegalContent',
    },
    {
      label: t('comment.report.reason.other'),
      value: 'other',
    },
  ];
  const handleReason = (event: any) => {
    setSelect(event.target.value);
    setMessage('');
    setStatus('');
  };
  const postReport = async (event: any) => {
    event.preventDefault();

    if (select === 'notSelected' || select === undefined) {
      setMessage(t('comment.report.form.error.notSelected'));
      setStatus('Error');
      return;
    }

    const request = new ReportEvaluationRequest(
      select,
      profile?.customer_id,
      evaluationId,
    );

    try {
      await reportEvaluation(request);
      setModalState();
    } catch (e) {
      setMessage(t('comment.report.form.apiResponses.failure'));
      setStatus('Error');
    }
  };
  return (
    <>
      <div className="px-8 md:px-20 pt-6 pb-8 mb-4 flex flex-col">
        <div className="flex justify-center">
          <Title label={t('comment.report.form.title')} />
        </div>

        <form onSubmit={postReport}>
          <div className="flex justify-center mb-4">
            <div className="relative inline-flex">
              <svg
                className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 412 232"
              ></svg>
              <select
                defaultValue={options[0].value}
                className="shadow appearance-none border-gray-400 rounded w-full py-2 focus:outline-none focus:ring-2 focus:ring-gold-100 focus:border-transparent"
                value={select}
                onChange={handleReason}
              >
                {options.map((option, index) => (
                  <option
                    key={index}
                    value={option.value}
                    disabled={option.value === 'notSelected'}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {select === 'other' ? <TextArea /> : <></>}
          <div className="flex justify-center mb-2">
            <Label status={status} message={message} />
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="bg-gold-100 hover:bg-blue-dark text-white font-bold py-2 px-12 rounded transform transition duration-200 hover:scale-105"
              type="submit"
            >
              {t('comment.form.submit')}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ReportForm;
