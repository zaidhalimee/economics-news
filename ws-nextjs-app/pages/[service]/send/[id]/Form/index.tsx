/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import { useFormContext } from '../FormContext';
import { Field } from '../types';
import FormField from '../FormField';
import styles from './styles';
import Submit from '../SubmitButton';
import Loader from '../Loader';

export default function Form({
  fields,
  privacyNotice,
}: {
  fields: Field[];
  privacyNotice: string;
}) {
  const { handleSubmit, submissionError, submitted } = useFormContext();

  const formFields = fields?.map(({ id, label, type, htmlType, textArea }) => (
    <FormField
      key={id}
      id={id}
      label={label}
      type={type}
      htmlType={htmlType}
      textArea={textArea}
    />
  ));

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        {formFields}
        <div
          css={styles.privacyNotice}
          // TODO: This is a security risk, we should sanitize the HTML
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: privacyNotice }}
        />
        {!submitted ? <Submit /> : <Loader />}
      </form>
      {submissionError && (
        <div css={styles.submissionError}>
          {`Error: ${submissionError.status} - ${submissionError.code} - ${submissionError.message}`}
          <br />
          {`Recoverable: ${submissionError.isRecoverable}`}
        </div>
      )}
    </>
  );
}
