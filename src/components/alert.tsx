import '../styles/alert.css';

type AlertProps = {
  message: string,
  type: "success" | "error",
}

const Alert = ({ message, type }: AlertProps) => {
  return (
    <div className={`alert ${type}`}>
      <p>{message}</p>
    </div>
  );
}

export default Alert;