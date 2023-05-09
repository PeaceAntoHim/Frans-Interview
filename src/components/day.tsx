import { MouseEventHandler } from "react";

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export default function Day({ children, style, onClick }: Props) {
  return (
    <div className='wrapper' onClick={onClick}>
      <p style={style}>{children}</p>
    </div>
  );
}
