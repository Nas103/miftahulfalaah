"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { EnrollModal } from "./EnrollModal";

export function HeroEnrollButton() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button
        variant="liquid"
        size="lg"
        type="button"
        onClick={() => setModalOpen(true)}
      >
        Enroll
      </Button>
      <EnrollModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
