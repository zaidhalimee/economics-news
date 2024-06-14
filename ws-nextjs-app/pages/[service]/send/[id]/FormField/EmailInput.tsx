/** @jsx jsx */
import { jsx } from '@emotion/react';
import { InputProps } from '../types';
import Label from './FieldLabel';
import styles from './styles';

export default ({
  id,
  name,
  handleChange,
  inputState,
  describedBy,
  label,
  hasAttemptedSubmit,
}: InputProps) => {
  const { isValid, value = '', required, wasInvalid } = inputState ?? {};
  const useErrorTheme = hasAttemptedSubmit && !isValid;

  return (
    <>
      <Label required={required} forId={id} useErrorTheme={useErrorTheme}>
        {label}
      </Label>
      <div>
        <input
          css={[styles.textField(useErrorTheme), styles.focusIndicator]}
          id={id}
          name={name}
          type="email"
          value={value as string}
          onChange={e => handleChange(e.target.name, e.target.value)}
          {...(!hasAttemptedSubmit && { 'aria-invalid': 'false' })}
          {...(hasAttemptedSubmit && {
            ...(wasInvalid && { 'aria-invalid': !isValid }),
            ...(required && !isValid && { 'aria-required': required }),
            ...(!isValid && { 'aria-describedby': describedBy }),
          })}
        />
      </div>
    </>
  );
};
