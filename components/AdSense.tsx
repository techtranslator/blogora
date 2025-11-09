"use client";

import { useEffect } from "react";
import { useAdPlacement } from "@/hooks/useAdSense";

interface AdSenseProps {
  adSlot: string;
  adFormat?: string;
  adLayout?: string;
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

// Extend window interface for adsbygoogle
declare global {
  interface Window {
    adsbygoogle: any;
  }
}

export function AdSense({
  adSlot,
  adFormat = "auto",
  adLayout = "in-article",
  fullWidthResponsive = true,
  style = { display: "block" },
  className = ""
}: AdSenseProps) {
  const { shouldShowAds } = useAdPlacement();

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window.adsbygoogle && shouldShowAds) {
        (window.adsbygoogle as any).push({});
      }
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, [shouldShowAds]);

  if (!shouldShowAds) {
    return null; // Don't render ad if ads are disabled
  }

  return (
    <div className={`ad-container my-8 ${className}`}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-1234567890123456"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-ad-layout={adLayout}
        data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
      ></ins>
    </div>
  );
}