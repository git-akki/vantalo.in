"use client";
import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";

// reducedMotion="user": framer-motion skips transform/layout animation for
// visitors with the OS "reduce motion" setting, while opacity still fades.
const MotionProvider = ({ children }: { children: ReactNode }) => (
  <MotionConfig reducedMotion="user">{children}</MotionConfig>
);

export default MotionProvider;
