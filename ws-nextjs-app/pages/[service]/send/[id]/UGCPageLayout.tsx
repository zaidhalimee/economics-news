/** @jsx jsx */
import { useState } from 'react';
import { jsx } from '@emotion/react';
import styles from './styles';
import { ComponentProps, OnChangeInputName, OnChangeInputValue } from './types';
import FormField from './FormField';
import Submit, { handleSubmit } from './SubmitButton';

const UGCPageLayout = ({ pageData }: ComponentProps) => {
  const {
    data: { title, description, sections },
  } = pageData;

  const firstSection = sections[0];

  const handleChange = (name: OnChangeInputName, value: OnChangeInputValue) => {
    console.log(name, value);
    return null;
  };

  const fields = firstSection.fields.map(({ id, label, htmlType }) => (
    <FormField
      key={id}
      id={id}
      label={label}
      htmlType={htmlType}
      onChange={handleChange}
    />
  ));

  return (
    <div css={styles.grid}>
      <div css={styles.primaryColumn}>
        <main css={styles.mainContent} role="main">
          <h1>{title}</h1>
          <div>{description}</div>
          <form onSubmit={handleSubmit}>
            {fields}
            <Submit />
          </form>
        </main>
      </div>
    </div>
  );
};

export default UGCPageLayout;
