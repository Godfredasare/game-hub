import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { AxiosError } from "axios";

export interface PlatformSelectors {
  id: number;
  name: string;
  slug: string;
}

interface PlatformResponse {
  count: number;
  results: PlatformSelectors[];
}

interface Props {
  onSelectedPlatform: (platform: PlatformSelectors) => void;
  selectedPlatform: PlatformSelectors | null;
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const [platform, setPlatform] = useState<PlatformSelectors[]>([]);
  const [error, setError] = useState("");

  const fetchPlatform = async () => {
    try {
      const res = await apiClient.get<PlatformResponse>(
        "/platforms/lists/parents"
      );
      setPlatform(res.data.results);
    } catch (error) {
      setError((error as AxiosError).message);
    }
  };

  useEffect(() => {
    fetchPlatform();
  }, []);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platform.map((platform) => (
          <MenuItem
            onClick={() => onSelectedPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
