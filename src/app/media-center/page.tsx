"use client";
import React from "react";
import MediaCenterPage from "@/components/MediaCenter/mediaCenter";
import { useAppSelector } from "@/store/store";
import { useSelector } from "react-redux";
const MediaCenter = () => {
  const store = useAppSelector((state: any) => state?.Villa?.isAuthenticated);
  console.log("storestorestorestorestore ", store);
  return (
    <div>
      <MediaCenterPage />
    </div>
  );
};

export default MediaCenter;
