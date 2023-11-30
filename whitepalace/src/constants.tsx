import { Icon } from "@iconify/react/";
import { SideNavItem } from "./types";

export const SIDENAV_ITEMS: SideNavItem[] = [
    {
        title: "WHITE PALACE",
        path: "/",
    },
    {
        title: "NEXT SHOWS",
        path: "/shows",
    },    
    {
        title: "ABOUT US",
        path: "/info",
    },    
    {
        title: "LISTEN",
        path: "/music",
        icon: <Icon icon="ri:music-fill" width="24" height="24"/>
    },
]