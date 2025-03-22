"use client"; // Ensure this runs on the client side

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs"; // Clerk authentication hook

export default function ChatBase() {
  const { isSignedIn } = useUser(); // Check if user is signed in

  useEffect(() => {
    if (!isSignedIn) return; // Only load script if user is signed in

    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "-5Dl2v5HnzP6ROVf3Lmyv";
    script.domain = "www.chatbase.co";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up on unmount
    };
  }, [isSignedIn]);

  return null; // No UI needed, just loads the script
}
