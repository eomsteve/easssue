import React from "react";
import { DashboardModalProps } from "./types";
import { DashIndex } from "@/components/Modals/DashBoard"

export const DashboardModal: React.FC<DashboardModalProps> = ({
  setDashboardModalOpen, isLogin
}) => {
  const onCloseClick = () => {
    setDashboardModalOpen(false)
  }
  return (
    <>
      <div className="absolute top-0 left-0 w-screen h-screen bg-black/75">
        <div className="p-2 z-50 h-[80%] w-[70%] absolute top-[15%] left-[15%] bg-white rounded-lg">
        <div className="text-xl">
              대시보드
            <button className="absolute right-2" onClick={onCloseClick}>
              X
            </button>
          </div>
          <DashIndex></DashIndex>
        </div>
      </div>
    </>
  );
};
