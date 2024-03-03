import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useNavigation() {
  const router = useRouter();
  const currentPathname = usePathname();
  const searchParams = useSearchParams();

  let params: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    params = { ...params, [key]: value };
  });

  const createQueryString = (
    pathname?: string,
    query?: Record<string, unknown>
  ) => {
    if (!query || Object.keys(query).length === 0) {
      return pathname || currentPathname;
    }

    const params = new URLSearchParams(searchParams);

    Object.entries(query).forEach(([name, value]) => {
      if (value === undefined || value === null || value === "") {
        params.delete(name);
      } else {
        params.set(name, String(value));
      }
    });

    return `${pathname || currentPathname}?${params.toString()}`;
  };

  const navigate = (options: {
    pathname?: string;
    query?: Record<string, unknown>;
  }) => {
    router.push(createQueryString(options.pathname, options.query));
  };

  return {
    router,
    pathname: currentPathname,
    searchParams,
    params,
    navigate,
    createQueryString,
  };
}
