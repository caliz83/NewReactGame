import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatforms from "../Hooks/UsePlatforms"


const PlatformSelector = () => {
    const {data} = usePlatforms()
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Platform</MenuButton>  
        <MenuList>
            {/* <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
            <MenuItem>Item 3</MenuItem> */}
            {data.map(platform => <MenuItem key={platform.id}>{platform.name}</MenuItem> )}
            </MenuList>    
    </Menu>
  )
}

export default PlatformSelector
