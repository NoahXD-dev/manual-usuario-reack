import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { HiHome, HiUser } from "react-icons/hi"
import { FaProjectDiagram } from "react-icons/fa";
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
                        icon={FaProjectDiagram}
                    >
                        Diagramas
                    </SidebarItem>
                </SidebarItemGroup>
            </SidebarItems>
        </Sidebar>
    )
}

export default SidebarLayout;