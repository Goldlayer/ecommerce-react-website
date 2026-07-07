import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // 🌟 Instantly forces the browser window to snap back to the absolute top-left corner
        window.scrollTo(0, 0);
    }, [pathname]); // Fires automatically every single time the URL pathname changes

    return null; // This component handles memory positioning and renders no visible markup
}
