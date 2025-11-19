import { useRouter } from "../hooks/useRouter";

export const Link = ({ href, children, ...props }) => {
  const { navigateTo } = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    navigateTo(href);
  };
  return (
    <a href={href} {...props} onClick={handleClick}>
      {children}
    </a>
  );
};
