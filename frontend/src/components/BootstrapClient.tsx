"use client";

import { useEffect } from "react";

function BootstrapClient() {
  useEffect(() => {
    // @ts-ignore
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null;
}

export default BootstrapClient;
