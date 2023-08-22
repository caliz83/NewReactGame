import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../Hooks/UsePlatforms";
import { Platform } from "../Hooks/UseGames";

interface Props {
    onSelectPlatform: (platform: Platform) => void
    selectedPlatform: Platform | null
}


const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props) => {
    const {data, error} = usePlatforms()
    if(error) return null;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
            {selectedPlatform?.name || 'Platform'}
            </MenuButton>  
        <MenuList>
            {/* <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
            <MenuItem>Item 3</MenuItem> */}
            {data.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem> )}
            </MenuList>    
    </Menu>
  )
}

export default PlatformSelector
