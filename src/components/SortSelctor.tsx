import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";


interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedSortOrder: string
}

const SortSelctor = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-release", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  let selectOrder = sortOrder.find(s => s.value === selectedSortOrder)
  

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Oder by: {selectOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrder.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.label}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelctor;
