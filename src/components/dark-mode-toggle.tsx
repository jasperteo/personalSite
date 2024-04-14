import { Icon } from "@iconify-icon/react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      {theme === "dark" ? (
        <Icon
          icon="line-md:sunny-outline-to-moon-loop-transition"
          width="1.2em"
          height="1.2em"
        />
      ) : (
        <Icon
          icon="line-md:moon-to-sunny-outline-loop-transition"
          width="1.2em"
          height="1.2em"
        />
      )}
    </Button>
  );
}