// import { navigationItems } from "./data/navigationData";
import StarToggle from "./components/star/StarToggle";
import "./index.css";
import Avatar from "./components/avatar/Avatar";
import profile from "./images/ecprofile.jpg";
import { avatarSizes, avatarColors } from "./data/avatarData";
import Menu from "./components/navigation/Menu";
import MenuDropdown from "./components/navigation/MenuDropdown";
import MenuButton from "./components/navigation/MenuButton";
import Badge from "./components/badges/Badge";

function App() {
  console.log("App rendering");

  return (
    <div className='dark-theme'>
      {/* Star Toggle */}
      <div className='flex h-[60px]'></div>
      <StarToggle />

      {/* Menu Nav */}
      <div className='flex h-[60px]'></div>
      <Menu onOpen={() => console.log("first render")}>
        <MenuButton>Menu</MenuButton>
        <MenuDropdown />
      </Menu>

      {/* Gap */}
      <div className='flex h-[260px]'></div>

      {/* Avatars */}
      <div className='flex flex-col gap-2 p-4 bg-gray-100 border border-black rounded'>
        {/* Photo Variants */}
        <div className='flex items-end gap-4'>
          {avatarSizes.map((size) => (
            <Avatar
              key={size}
              src={profile}
              alt='profile'
              variant='photo'
              size={size}
            />
          ))}
        </div>
        {/* Letter Variants */}
        <div className='flex items-end gap-4 mt-2'>
          {avatarColors.map((color) => (
            <Avatar key={color} variant='letters' color={color} size='large'>
              BZ
            </Avatar>
          ))}
        </div>
        {/* Anonymous Variants */}
        <div className='flex flex-col items-start gap-4 mt-2'>
          {avatarColors.map((color) => (
            <div key={color} className='flex items-end gap-4 align-baseline'>
              {avatarSizes.map((size) => (
                <Avatar
                  key={`${color}-${size}`}
                  variant='anonymous'
                  color={color}
                  size={size}
                  className='flex flex-col'
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Gap */}
      <div className='flex h-[260px]'></div>

      {/* Badges */}
      <Badge>Badge</Badge>
    </div>
  );
}

export default App;
