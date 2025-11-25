import Link from 'next/link';
import { LinkTo } from './styles';

const GetStartedButton = ({ padding }: { padding: string }) => {
  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      href="https://app.minisend.xyz"
      target="_blank"
      rel="noopener noreferrer"
    >
      Launch App
    </LinkTo>
  );
};

export default GetStartedButton;
