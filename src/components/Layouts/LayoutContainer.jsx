import { AppShell, Burger} from '@mantine/core';
import Menu from '@/components/shared/Menu/Menu.jsx';
import { useLayoutContext } from '@/components/Layouts/LayoutProvider.jsx';
import config from '@/config/projectConfig.json';
import { Outlet } from 'react-router-dom';
import ToggleMenuButton from '@/components/Layouts/components/ToggleMenuButton.jsx';

function LayoutContainer() {
  const { toggleMobile, mobileOpened } = useLayoutContext();
  return (
    <AppShell
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !mobileOpened } }}
      padding="md"
    >
      <ToggleMenuButton parentMethod={toggleMobile} mobileOpened={mobileOpened}/>
      <AppShell.Navbar
        style={{
          borderColor: 'transparent',
          backgroundColor: '#161A23',
        }}
        p="md">
        <Menu />
      </AppShell.Navbar>
      <AppShell.Main
        bg={config.colors.background}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default LayoutContainer;