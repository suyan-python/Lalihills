import { useEffect } from "react";
import
    {
        useLocation,
        useNavigationType,
    } from "react-router-dom";

const ScrollManager = () =>
{
    const location = useLocation();
    const navigationType = useNavigationType();


    /*
    =====================================================
    SAVE SCROLL POSITION
    =====================================================
    */

    useEffect(() =>
    {
        const saveScroll = () =>
        {
            sessionStorage.setItem(
                `scroll-${location.key}`,
                JSON.stringify({
                    x: window.scrollX,
                    y: window.scrollY,
                })
            );
        };


        window.addEventListener(
            "scroll",
            saveScroll,
            { passive: true }
        );


        return () =>
        {
            window.removeEventListener(
                "scroll",
                saveScroll
            );
        };

    }, [location.key]);


    /*
    =====================================================
    ROUTE CHANGE
    =====================================================
    */

    useEffect(() =>
    {
        if (navigationType === "POP")
        {
            const saved =
                sessionStorage.getItem(
                    `scroll-${location.key}`
                );


            if (saved)
            {
                const position = JSON.parse(saved);


                requestAnimationFrame(() =>
                {
                    window.scrollTo(
                        position.x,
                        position.y
                    );
                });

                return;
            }
        }


        /*
        ================================================
        NORMAL LINK NAVIGATION
        ================================================
        */

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });

    }, [
        location.key,
        navigationType,
    ]);


    return null;
};

export default ScrollManager;