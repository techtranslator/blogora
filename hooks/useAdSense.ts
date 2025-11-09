import { useEffect, useState } from "react";

interface AdSenseConfig {
  publisherId: string;
  enabled: boolean;
}

export function useAdSense(config: AdSenseConfig) {
  const [isAdSenseLoaded, setIsAdSenseLoaded] = useState(false);
  const [isAdBlocked, setIsAdBlocked] = useState(false);

  useEffect(() => {
    if (!config.enabled) return;

    // Check if AdSense is already loaded
    if (typeof window !== "undefined" && window.adsbygoogle) {
      setIsAdSenseLoaded(true);
      return;
    }

    // Load AdSense script
    const script = document.createElement("script");
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${config.publisherId}`;
    script.async = true;
    script.crossOrigin = "anonymous";
    script.onload = () => {
      setIsAdSenseLoaded(true);
      // Initialize ads
      try {
        if (window.adsbygoogle) {
          (window.adsbygoogle as any).push({});
        }
      } catch (err) {
        console.error("AdSense initialization error:", err);
      }
    };
    script.onerror = () => {
      setIsAdBlocked(true);
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [config.publisherId, config.enabled]);

  return {
    isAdSenseLoaded,
    isAdBlocked,
    canShowAds: isAdSenseLoaded && !isAdBlocked && config.enabled
  };
}

// Hook for handling ad placement logic
export function useAdPlacement() {
  const [shouldShowAds, setShouldShowAds] = useState(true);

  useEffect(() => {
    // Check for user preferences or ad blocking
    const checkAdPreferences = () => {
      // Check if user has opted out of ads
      const adPreference = localStorage.getItem("ads-enabled");
      if (adPreference === "false") {
        setShouldShowAds(false);
        return;
      }

      // Check for ad blocker (simplified detection)
      if (typeof window !== "undefined") {
        const adElement = document.createElement("div");
        adElement.className = "adsbox";
        adElement.style.height = "1px";
        document.body.appendChild(adElement);
        
        setTimeout(() => {
          const computedStyle = window.getComputedStyle(adElement);
          if (computedStyle.display === "none" || adElement.offsetHeight === 0) {
            setShouldShowAds(false);
          }
          document.body.removeChild(adElement);
        }, 100);
      }
    };

    checkAdPreferences();
  }, []);

  const toggleAds = (enabled: boolean) => {
    localStorage.setItem("ads-enabled", enabled.toString());
    setShouldShowAds(enabled);
  };

  return {
    shouldShowAds,
    toggleAds
  };
}