interface LetterPageProps {
  params: {
    letterId: string;
  }
}

const LetterPage = ({
  params,
}: LetterPageProps) => {
  return (
    <div>
      Letter {params.letterId}
    </div>
  );
};

export default LetterPage;