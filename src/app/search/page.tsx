type Props = {
  params: {
    terms: string;
  };
};

const Search = ({ params: { terms } }: Props) => {
  return <div>{terms}</div>;
};

export default Search;
