"use client";

import React, { useEffect, useState } from "react";

import "./globals.css";
import { Box } from "@chakra-ui/react";
import { applyLightTheme } from "utils/themeUtils";
import Loader from "./components/Loader";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
    applyLightTheme();
  }, []);

  return (
    <>
      <div className="">
        {loading ? (
          <Loader />
        ) : (
          <div className="flex h-screen overflow-hidden">
            {/* <!-- ===== Sidebar Start ===== --> */}
            <Box zIndex={10}>
              <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
            </Box>

            {/* <!-- ===== Sidebar End ===== --> */}

            {/* <!-- ===== Content Area Start ===== --> */}
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              {/* <!-- ===== Navbar Start ===== --> */}

              <Navbar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              {/* <!-- ===== Navbar End ===== --> */}

              {/* <!-- ===== Main Content Start ===== --> */}
              <Box as={"main"} zIndex={9}>
                <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                  {children}
                </div>
              </Box>
              {/* <!-- ===== Main Content End ===== --> */}
            </div>
            {/* <!-- ===== Content Area End ===== --> */}
          </div>
        )}
      </div>
    </>
  );
}

export default AdminLayout;
