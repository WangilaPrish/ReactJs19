interface SearchProps {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Search = (props: SearchProps) => {
    return (
        <div className="text-white text-3xl">{props.searchTerm}</div>
    )
}

export default Search
