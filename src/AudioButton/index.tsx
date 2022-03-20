type Props = {
  label: string;
  path: string;
  onClick: () => void;
};

const AudioButton = ({ label, path, onClick }: Props) => {
  return <button onClick={async () => onClick()}>{label}</button>;
};

export default AudioButton;
