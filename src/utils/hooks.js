import { useState } from "react";

export const useForceRefresh = () => {
    const [refreshCount, forceRefresh] = useState(0);
    return () => {
        forceRefresh(refreshCount + 1);
    }
}
export const useLock = () => {
    const forceRefresh = useForceRefresh();

    if (!sessionStorage.getItem("unlocked")) {
		sessionStorage.setItem("unlocked", 0)
	}
	const lock = parseInt(sessionStorage.getItem("unlocked"));

    const unlockAll = () => {
        sessionStorage.setItem("unlocked", Number.MAX_SAFE_INTEGER);
        forceRefresh()
    }
    const setLock = (v) => {
        sessionStorage.setItem("unlocked", v);
        forceRefresh();
    }
    return {
        lock,
        unlockAll,
        setLock
    }
}