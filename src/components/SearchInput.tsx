import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

interface Props{
    onSearch: (searchText: string) => void
}

const SearchInput = ({onSearch} : Props) => {
  const [input, setInput] = useState("");

  return (
    <form style={{ width: "100%" }} onSubmit={e => {
        e.preventDefault()
        onSearch(input)
    }}>
      <InputGroup>
        <InputLeftElement>
          <BsSearch />
        </InputLeftElement>
        <Input
        value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Search games..."
          borderRadius={20}
          variant={"filled"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
