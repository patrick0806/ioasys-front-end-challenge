import * as S from "./Button.styles";

type ButtonProps = {
  label: string;
  onClick: () => void;
};

export function Button({ label, onClick }: ButtonProps) {
  return <S.Button onClick={onClick}>{label}</S.Button>;
}
