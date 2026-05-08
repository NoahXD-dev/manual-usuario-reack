import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { HiHome, HiUser, HiChartBar } from "react-icons/hi"
import { Link } from "react-router-dom";

function SidebarLayout() {
    return (
        <Sidebar>
            <SidebarItems>
                <SidebarItemGroup>
                    <SidebarItem
                        as={Link}
                        to="/"
                        icon={HiHome}
                    >
                        Inicio
                    </SidebarItem>

                    <SidebarItem
                        as={Link}
                        to="/users"
                        icon={HiUser}
                    >
                        Usuarios
                    </SidebarItem>

                    <SidebarItem
                        as={Link}
                        to="/diagram"
                        icon={HiChartBar}
                    >
                        Diagramas
                    </SidebarItem>
                </SidebarItemGroup>
            </SidebarItems>
        </Sidebar>
    )
}

export default SidebarLayout;