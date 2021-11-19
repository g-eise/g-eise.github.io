import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";

export const useForceRefresh = () => {
    const [refreshCount, forceRefresh] = useState(0);
    return useCallback(() => {
        forceRefresh(refreshCount + 1);
    }, [refreshCount]);
}
export const useLock = () => {
    const forceRefresh = useForceRefresh();

    if (!sessionStorage.getItem("unlocked")) {
		sessionStorage.setItem("unlocked", 0)
	}
	const lock = parseInt(sessionStorage.getItem("unlocked"));

    const unlockAll = useCallback(() => {
        sessionStorage.setItem("unlocked", Number.MAX_SAFE_INTEGER);
        forceRefresh()
    }, [forceRefresh]);
    
    const setLock = useCallback((v) => {
        sessionStorage.setItem("unlocked", v);
        forceRefresh();
    }, [forceRefresh])

    return {
        lock,
        unlockAll,
        setLock
    }
}

export const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};
