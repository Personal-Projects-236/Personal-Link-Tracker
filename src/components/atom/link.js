import Link from "next/link";

export const link = (href, component) => (
  <Link href={href} legacyBehavior>
    {component}
  </Link>
);
