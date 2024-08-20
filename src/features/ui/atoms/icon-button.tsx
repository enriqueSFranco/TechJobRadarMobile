import { Pressable, PressableProps } from "react-native";

type IconButtonProps = PressableProps & {
  color?: "primary" | "secondary" | "success";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
};

export function IconButton ({
  color = "primary",
  disabled = false,
  size = "medium",
  children,
  ...props
}: IconButtonProps) {
  return <Pressable {...props}>{children}</Pressable>;
}
