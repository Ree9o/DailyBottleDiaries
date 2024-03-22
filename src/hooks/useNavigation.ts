import { useParams, usePathname, useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";

function useNavigation() {
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  return {
    loading,
    setLoading,
    open,
    setOpen,
    active,
    setActive,
    router,
    params,
    searchParams,
    pathname,
  };
}

export default useNavigation;
