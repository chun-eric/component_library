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
import { badgeVariants, badgeColors } from "./data/badgeData";

function App() {
  console.log("App rendering");

  return (
    <div className='dark-theme'>
      <div className='flex h-[60px]'></div>
      <h1 className='mb-4 text-3xl font-bold tracking-wide text-black uppercase'>
        Frontend Component Library
      </h1>
      {/* Gap */}
      <div className='flex h-[60px]'></div>
      {/* Star Toggle */}
      <h2 className='mb-4 text-xl font-bold text-black uppercase'>Star</h2>
      <StarToggle />

      {/* Gap */}
      <div className='flex h-[60px]'></div>

      {/* Menu Nav */}
      <h2 className='mb-4 text-xl font-bold text-black uppercase'>Menu</h2>
      <Menu onOpen={() => console.log("first render")}>
        <MenuButton>Menu</MenuButton>
        <MenuDropdown />
      </Menu>

      {/* Gap */}
      <div className='flex h-[300px]'></div>

      {/* Avatars */}
      <h2 className='mb-4 text-xl font-bold text-black uppercase'>Avatars</h2>
      <div className='flex flex-col gap-2 p-4 '>
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
      <div className='flex h-[60px]'></div>

      {/* Badges */}
      <h2 className='mb-4 text-xl font-bold text-black uppercase'>Badges</h2>
      <div className='flex flex-col gap-4'>
        {badgeVariants.map((variant) => (
          <div key={variant} className='flex gap-3 cursor-pointer'>
            {badgeColors.map((color) => (
              <Badge
                key={`${variant}-${color}`}
                variant={variant}
                color={color}
              >
                Badge
              </Badge>
            ))}
          </div>
        ))}
      </div>

      {/* Gap */}
      <div className='flex h-[60px]'></div>
    </div>
  );
}

export default App;
