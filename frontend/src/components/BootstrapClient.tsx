"use client";

import { useEffect } from "react";

function BootstrapClient() {
  useEffect(() => {
    const loadBootstrap = async () => {
      await import("bootstrap");
    };
    loadBootstrap();
  }, []);

  return null;
}

export default BootstrapClient;
