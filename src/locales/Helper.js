"use client";

import { EnTrans } from "./en";
import { ArTrans } from "./ar";

import { useEffect, useState } from "react";

export const useTrans = () => {
  const [File, setFile] = useState(EnTrans);
  const handleTrans = () => {
    const ISSERVER = typeof window === "undefined";
    if (ISSERVER) {
      return;
    }
    const lang = localStorage.getItem("preferredLanguage");
    console.log(lang, "lang");
    // setFile(lang == "ar" || !lang ? EnTrans : ArTrans);
    // return lang == "ar" || !lang ? EnTrans : ArTrans;
    setFile(ArTrans);
    return ArTrans;
  };

  useEffect(() => {
    handleTrans();
  }, []);

  return File;
};
