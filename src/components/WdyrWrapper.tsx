"use client";

import React from "react";

import whyDidYouRender from "@welldone-software/why-did-you-render";

if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    logOnDifferentValues: true,
  });
}

export default function WdyrWrapper() {
  return null;
}
