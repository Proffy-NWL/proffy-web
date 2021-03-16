import React, { useRef, useState, useCallback, useEffect, TextareaHTMLAttributes } from 'react';
import { useField } from '@unform/core';

import {
  Container,
  TextArea,
  LabelContainer,
  Label,
  LabelSecondary,
  QtdCaracteres,
} from './styles';

interface TextAreaLabel extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  labelSecondary?: string;
}

const TextAreaLabel: React.FC<TextAreaLabel> = ({
  name,
  label,
  labelSecondary,
  ...rest
}: TextAreaLabel) => {

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [qtdCaracteres, setQtdCaracteres] = useState(0);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current ?.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      isFilled={isFilled}
      isErrored={!!error}
      isFocused={isFocused}
    >
      <LabelContainer>
        <Label
          isErrored={!!error}
          isFocused={isFocused}
        >{label} <LabelSecondary>{labelSecondary}</LabelSecondary> </Label>
        <QtdCaracteres> {qtdCaracteres || ""} </QtdCaracteres>
      </LabelContainer>
      <TextArea
        isErrored={!!error}
        isFocused={isFocused}
        name={name}
        onChange={() => setQtdCaracteres(inputRef.current ?.value.length || 0)}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
    </Container>
  )
}

export default TextAreaLabel;