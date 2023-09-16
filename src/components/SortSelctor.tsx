import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelctor = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Oder by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>yuheu</MenuItem>
        <MenuItem>bwuh8wh</MenuItem>
        <MenuItem>ndivjioej</MenuItem>
        <MenuItem>kwjiowj</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelctor;
