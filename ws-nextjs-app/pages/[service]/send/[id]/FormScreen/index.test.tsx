import React from 'react';
import {
  act,
  render,
  fireEvent,
} from '#app/components/react-testing-library-with-providers';
import {
  title,
  description,
  sectionTitle,
  privacyNotice,
  fields,
} from './fixture';
import * as FormContextModule from '../FormContext';
import { FormContext } from '../FormContext';
import Form from '.';
import { Field } from '../types';
import * as ErrorListModule from '../FormContext/utils/getErrorList';

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: { id: '123' },
  }),
}));

describe('Form', () => {
  it('should render and match snapshot', async () => {
    jest
      .spyOn(FormContextModule, 'useFormContext')
      .mockImplementationOnce(() => ({
        handleSubmit: jest.fn(e => e.preventDefault()),
        formState: {},
        submitted: false,
        hasValidationErrors: false,
        attemptedSubmitCount: 1,
      }))
      .mockImplementationOnce(() => ({
        handleSubmit: jest.fn(e => e.preventDefault()),
        formState: {},
        submitted: false,
        hasValidationErrors: false,
        attemptedSubmitCount: 1,
      }));
    const { container } = await act(() => {
      return render(
        <Form
          title={title}
          description={description}
          sectionTitle={sectionTitle}
          privacyNotice={privacyNotice}
          fields={fields as Field[]}
        />,
      );
    });

    const form = container.querySelector('form');
    expect(form).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should handle submit', async () => {
    const handleSubmit = jest.fn(e => e.preventDefault());
    const handleChange = jest.fn();
    const handleFocusOut = jest.fn();
    const { container } = await act(() => {
      return render(
        <FormContext.Provider
          value={{
            formState: {},
            handleChange,
            handleSubmit,
            handleFocusOut,
            submissionError: null,
            hasValidationErrors: false,
            submitted: false,
            progress: '0',
            attemptedSubmitCount: 0,
            screen: 'form',
            submissionID: null,
          }}
        >
          <Form
            title={title}
            description={description}
            sectionTitle={sectionTitle}
            privacyNotice={privacyNotice}
            fields={fields as Field[]}
          />
          ,
        </FormContext.Provider>,
      );
    });

    const submitButton = container.querySelector('button');
    fireEvent.click(submitButton as HTMLButtonElement);

    expect(handleSubmit).toHaveBeenCalled();
  });

  it('should render an error summary box on an invalid form', async () => {
    jest
      .spyOn(FormContextModule, 'useFormContext')
      .mockImplementationOnce(() => ({
        handleSubmit: jest.fn(e => e.preventDefault()),
        formState: {},
        submitted: false,
        hasValidationErrors: true,
        attemptedSubmitCount: 1,
      }));

    jest.spyOn(ErrorListModule, 'default').mockReturnValueOnce([
      {
        id: 'txt49018765',
        messageCode: 'validationRequired',
      },
      {
        id: 'txt49018835',
        messageCode: 'validationRequired',
      },
      {
        id: 'txt49019016',
        messageCode: 'validationRequired',
      },
    ]);

    const { container } = await act(() => {
      return render(
        <Form
          title={title}
          description={description}
          sectionTitle={sectionTitle}
          privacyNotice={privacyNotice}
          fields={fields as Field[]}
        />,
      );
    });

    const errorSummary = container.querySelector('strong[id=errorSummaryBox]');
    expect(errorSummary).toBeInTheDocument();
  });

  it('should render no error summary box on a valid form', async () => {
    jest
      .spyOn(FormContextModule, 'useFormContext')
      .mockImplementationOnce(() => ({
        handleSubmit: jest.fn(e => e.preventDefault()),
        formState: {},
        submitted: false,
        hasValidationErrors: false,
        attemptedSubmitCount: 1,
      }))
      .mockImplementationOnce(() => ({
        handleSubmit: jest.fn(e => e.preventDefault()),
        formState: {},
        submitted: false,
        hasValidationErrors: false,
        attemptedSubmitCount: 1,
      }));

    const { container } = await act(() => {
      return render(
        <Form
          title={title}
          description={description}
          sectionTitle={sectionTitle}
          privacyNotice={privacyNotice}
          fields={fields as Field[]}
        />,
      );
    });

    const errorSummmary = container.querySelector('strong[id=errorSummaryBox]');

    expect(errorSummmary).toBeNull();
  });
});
