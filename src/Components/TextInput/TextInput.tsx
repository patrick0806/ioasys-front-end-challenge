import * as React from "react";
import * as S from "./TextInput.styles";

type ButtonRightProps = React.InputHTMLAttributes<HTMLButtonElement> & {
  label: string;
  type: "submit" | "reset" | "button";
};

type TextInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  name: string;
  error?: string;
  buttonRight?: ButtonRightProps;
  isPassword?: boolean;
  onClickButtomRight?: () => void;
};

export function TextInput({
  name,
  placeholder,
  error = "",
  buttonRight,
  isPassword = false,
  onClickButtomRight,
  onChange,
  ...rest
}: TextInputProps) {
  const handleChangeInput = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(event);
    },
    [onChange],
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
        {buttonRight && (
          <S.Button type={buttonRight.type}>{buttonRight.label}</S.Button>
        )}
      </S.InputContainer>
      {error && <S.Error>{error}</S.Error>}
    </S.InputWithErrorContainer>
  );
}
