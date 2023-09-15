import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { AxiosError } from "axios";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface PlatformResponse {
  count: number;
  results: Platform[];
}

const PlatformSelector = () => {
  const [platform, setPlatform] = useState<Platform[]>([]);
  const [error, setError] = useState('')

  const fetchPlatform = async () => {
    try {
        
        const res = await apiClient.get<PlatformResponse>(
          "/platforms/lists/parents"
        );
        setPlatform(res.data.results);
    } catch (error) {
        setError((error as AxiosError).message)
    }
  };

  useEffect(() => {
    fetchPlatform();
  }, []);

  if(error) return null

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platfroms
      </MenuButton>
      <MenuList>
        {platform.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
