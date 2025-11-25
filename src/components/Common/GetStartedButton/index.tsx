import Link from 'next/link';
import { LinkTo } from './styles';

interface GetStartedButtonProps {
  padding: string;
  text?: string;
  href?: string;
}

const GetStartedButton = ({
  padding,
  text = 'Launch App',
  href = 'https://app.minisend.xyz'
}: GetStartedButtonProps) => {
  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </LinkTo>
  );
};

export default GetStartedButton;
