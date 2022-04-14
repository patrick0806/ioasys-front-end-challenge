import * as React from "react";
import * as S from "./TextInput.styles";

type TextInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  name: string;
  error?: string;
  buttonRight?: React.ReactNode;
  isPassword?: boolean;
  onClickButtomRight?: () => void;
};

export function TextInput({
  name,
  placeholder,
  error = "",
  buttonRight: ButtonRight,
  isPassword = false,
  onClickButtomRight,
  onChange,
  ...rest
}: TextInputProps) {
  const handleChangeInput = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(event);
    },
    [onChange]
  );

  return (
    <S.InputWithErrorContainer>
      <S.InputContainer hasPlaceholder={!!placeholder}>
      <S.Input
        {...rest}
        id={name}
        onChange={handleChangeInput}
        placeholder="&nbsp;"
        hasPlaceholder={!!placeholder}
        type={isPassword ? "password" : "text"}
      />
      <S.Label className="label" htmlFor={name}>
        {placeholder}
      </S.Label>
      {ButtonRight && (
        <S.ButtonRight onClick={onClickButtomRight}>
          {ButtonRight}
        </S.ButtonRight>
      )}
    </S.InputContainer>
      {error && <S.Error>{error}</S.Error>}
    </S.InputWithErrorContainer>
  );
}
